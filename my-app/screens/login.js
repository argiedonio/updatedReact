import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('green');

  const navigation = useNavigation();

  const handleLogin = () => {
    setButtonColor('lightgreen');
    setTimeout(() => {
      setButtonColor('green');
    }, 10);
  };

  return (
    <View style={styles.appContainer}>
         <StatusBar style="auto" />
      <View style={styles.inputContainer}>
     

        <Text style={[styles.title, styles.heading]}>LOGIN</Text>
        <Text style={styles.text}>Welcome to HydroApp</Text>
        <TextInput
          style={[styles.textInput, { color: username ? 'black' : '#525151' }]}
          placeholder='Username'
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={[styles.textInput, { color: password ? 'black' : '#525151', marginTop: 10 }]}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        
        <TouchableOpacity onPress={() =>
    navigation.navigate('ScreenLevels')}>
          <View style={[styles.button, { backgroundColor: buttonColor }]}>
            <Text style={[styles.buttonText]}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.smallText}>No account? </Text>
        <TouchableOpacity onPress={() =>
    navigation.navigate('Register')}>
          <Text style={[styles.smallText, styles.linkGreen]}>Register Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity onPress={() =>
    navigation.navigate('ForgotPassword')}>
          <Text style={[styles.smallText, styles.linkGreen]}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'black'
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    //color: 'white'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green', 
    width: '80%',
    marginBottom: 10,
    padding: 8,
  },
  heading: {
    marginBottom: 8,
    fontSize: 25
  },
  text: {
    marginBottom:30,
    color: '#4c504c7d'
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
    backgroundColor: 'green',
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