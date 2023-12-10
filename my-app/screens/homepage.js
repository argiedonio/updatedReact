import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('lightgreen');

  const navigation = useNavigation();

  const handleLogin = () => {
    setButtonColor('lightgreen');
    setTimeout(() => {
      setButtonColor('green');
    }, 10);
  };


  const pressLogin = () => {
    navigation.navigate ('Login');
  };

  const pressRegister = () => {
    navigation.navigate ('Register');
  };

  return (
    <View style={styles.appContainer} >
        
<Text style={styles.text}>Welcome to</Text>
        <Text style={[styles.title, styles.heading]}>HydroAPP</Text>

        <TouchableOpacity onPress={pressLogin}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pressRegister}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </View>
        </TouchableOpacity>

    </View>



  );
}

const styles = StyleSheet.create({

  appContainer: {
    padding: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkgreen'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'black', 
    width: '80%',
    marginBottom: 5,
    padding: 8,
  },
  heading: {
    marginBottom: 1,
    fontSize: 30
  },
  text: {
    marginBottom:1,
    color: 'black'
  },
  smallText: {
    fontSize: 12,
  },
  linkGreen: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  image: {
    width: 80, 
    height: 80,
    marginBottom: 30,
  },
  button: {
    backgroundColor: ' ',
    padding: 10,
    borderRadius: 25, 
    marginTop: 20,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  
});