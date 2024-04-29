import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, TouchableOpacity  } from 'react-native';
import Header from '../../shared/header';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState(''); 
  const navigation = useNavigation();
  

  const handleButtonPress = () => {    
    navigation.navigate('home',{userName: user})
  };
  return (
<LinearGradient
      colors={['#87CEEB', '#FFFFFF']}
      style={styles.container}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Header/>
      <View style={styles.content}>
        <Text>Digite seu usuário</Text>
        <TextInput style={styles.input}
          onChangeText={(inputText)=>{setUser(inputText)}}
          value={user}
          accessibilityLabel="Campo de usuário"
          />
        <TextInput/>
        <Text>Digite sua senha</Text>
        <TextInput secureTextEntry={true}  style={styles.input}
          onChangeText={(inputText)=>{setPassword(inputText)}}
          value={password}
          accessibilityLabel="Campo de senha"
          />
        <StatusBar style="auto" />
        <TouchableOpacity  style={styles.button} onPress={handleButtonPress} activeOpacity={0.1}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius:25,
  },
  button:{
    backgroundColor:'inherit',
    borderColor:'grey',
    borderWidth:1,
    width:'50%',
    alignItems:'center',
    padding:5,
  }
});
