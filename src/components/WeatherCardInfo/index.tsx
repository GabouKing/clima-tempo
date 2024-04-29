import { Feather } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";


export function WeatherCardInfo({user, temperature, selectedState, onStateChange}){  
  const states = [
    { uf: 'AC', name: 'Acre' },
    { uf: 'AL', name: 'Alagoas' },
    { uf: 'AP', name: 'Amapa' },
    { uf: 'AM', name: 'Amazonas' },
    { uf: 'BA', name: 'Bahia' },
    { uf: 'CE', name: 'Ceara' },
    { uf: 'DF', name: 'Distrito Federal' },
    { uf: 'ES', name: 'Espirito Santo' },
    { uf: 'GO', name: 'Goias' },
    { uf: 'MA', name: 'Maranhao' },
    { uf: 'MT', name: 'Mato Grosso' },
    { uf: 'MS', name: 'Mato Grosso do Sul' },
    { uf: 'MG', name: 'Minas Gerais' },
    { uf: 'PA', name: 'Para' },
    { uf: 'PB', name: 'Paraiba' },
    { uf: 'PR', name: 'Parana' },
    { uf: 'PE', name: 'Pernambuco' },
    { uf: 'PI', name: 'Piaui' },
    { uf: 'RJ', name: 'Rio de Janeiro' },
    { uf: 'RN', name: 'Rio Grande do Norte' },
    { uf: 'RS', name: 'Rio Grande do Sul' },
    { uf: 'RO', name: 'Rondônia' },
    { uf: 'RR', name: 'Roraima' },
    { uf: 'SC', name: 'Santa Catarina' },
    { uf: 'SP', name: 'Sao Paulo' },
    { uf: 'SE', name: 'Sergipe' },
    { uf: 'TO', name: 'Tocantins' },
  ];

  const actualDate = new Date()
  const dateFormated = actualDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
    return(
      <LinearGradient style={styles.container}
      colors={['#87CEEB', '#ff23']}      
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.paragraph}>Boas Vindas {user}</Text>
          <Text style={styles.paragraph}>{dateFormated}</Text>
        </View>
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerText}>Selecione um Estado:</Text>
          <Picker
            selectedValue={selectedState}
            style={styles.picker}            
            selectedValue={selectedState}
            onValueChange={(itemValue, itemIndex) => onStateChange(itemValue)}     
            itemStyle={{backgroundColor:'inherit'}}       
            >
              
            {states.map((state, index) => (
              <Picker.Item
                key={index}
                label={state.name}
                value={state.name}
                style={styles.item}
                color="#000"
              />
            ))}
          </Picker>      
        </View>
        <View style={styles.weather}>
        <Feather name="sun" size={50} color="#fff" />
        <Text style={styles.weatherText}>{temperature}</Text>
        </View>
      </LinearGradient>
    )
}
const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  header:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%'
  },
  weather:{
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },  
  weatherText:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',  
    color:'#fff'  
  },
  pickerContainer:{
    width: '100%',
    backgroundColor:'inheritr'
  },
  picker: {
    width: '100%',
    height: 50,    
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:'inherit'
  },
  pickerText:{
    color:'#fff'
  },
  item: {
    fontSize: 16,
    color:'#fff',
    padding:0,    
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,    
  },
});