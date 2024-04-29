import { View, Text, StyleSheet } from "react-native";
import { WeatherCardInfo } from "../../components/WeatherCardInfo";
import { useEffect, useState } from "react";
import { TemperatureCard } from "../../components/TemperatureCard";
import getWeather from "../../api/weatherapi";

export function Home({route}){
  const [currentTemperature, setCurrentTemperature] = useState()
  const [temperatureMin, setTemperatureMin] = useState()
  const [temperatureMax, setTemperatureMax] = useState()
  const [feelsLike, setFeelsLike] = useState()
  const [wind, setWind] = useState()
  const [humidity, setHumidity] = useState()
  const [pressure, setPressure] = useState()  
  const [selectedState, setSelectedState] = useState('São Paulo');

  const handleStateChange = (newState) => {    
    setSelectedState(newState);    
  };

  async function fetchData() {
    try {
      const currentWeather = await getWeather(selectedState);
      if (currentWeather != null) {            
        setTemperatureMin(convertKelvinToC(currentWeather[0]));
        setTemperatureMax(convertKelvinToC(currentWeather[1]));
        setWind(currentWeather[2])
        setHumidity(currentWeather[3])
        setCurrentTemperature(convertKelvinToC(currentWeather[4]));
        setFeelsLike(convertKelvinToC(currentWeather[5]));
        setPressure(currentWeather[6])
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  useEffect(() =>{
    fetchData();
    
  },[])
  useEffect(() =>{
    fetchData();    
  },[selectedState])

  function convertKelvinToC(kelvin){
    return ''+parseInt(kelvin - 273)
  }

  const { userName } = route.params
    return(      
      <View style={styles.homeContainer}>
        <WeatherCardInfo user={userName} temperature={`${currentTemperature}º`} selectedState={selectedState} onStateChange={handleStateChange}/>        
        <View style={styles.otherTemperatures}>
          <TemperatureCard temperature={`${temperatureMin}º`}/>
          <TemperatureCard temperature={`${temperatureMax}º`}/>
        </View>      

          <View style={styles.infoField}>
          <Text style={styles.infoText}>Mais Detalhes</Text>
          <View style={[styles.detailsContent, { borderTopStartRadius: 8, borderTopEndRadius: 8 }]}>
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Vel. Vento</Text>
              <Text>{wind}</Text>
            </View>          
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Umidaade</Text>
              <Text>{humidity}%</Text>
            </View>
          </View>
          <View style={[styles.detailsContent, { borderBottomStartRadius: 8, borderBottomEndRadius: 8 }]}>
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Sensação Térmica</Text>
              <Text>{feelsLike}%</Text>
            </View>          
            <View style={styles.details}>
              <Text style={styles.descriptionTitle}>Pressão Atmosferica</Text>
              <Text>{pressure}%</Text>
            </View>
          </View>
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
  homeContainer:{
    flex:1
  },
  otherTemperatures:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',    
    marginTop: 20
  },
  infoField:{    
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',      
    marginTop:10    
  },
  infoText:{
    fontSize:14,
    fontWeight:'bold',
  },
  detailsContent:{
    display:'flex',
    width:'80%',
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'#87CEEB',        
  },
  details:{
    width:'50%',    
    padding: 5
  },
  descriptionTitle:{
    fontSize:14,
    fontWeight:'bold',
  }
})