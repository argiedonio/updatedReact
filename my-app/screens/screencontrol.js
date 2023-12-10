import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// Assume you have some icon images in the assets folder
import levelsIcon from '../assets/levelsIcon.png';
import controlIcon from '../assets/controlIcon.png';
import updatesIcon from '../assets/updatesIcon.png';
import profileIcon from '../assets/profileIcon.png';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const navigateToScreen1 = () => {
    navigation.navigate('ScreenLevels');
  };

  const navigateToScreen2 = () => {
    navigation.navigate('ScreenControl');
  };

  const navigateToScreen3 = () => {
    navigation.navigate('ScreenUpdates');
  };

  const navigateToScreen4 = () => {
    navigation.navigate('ScreenProfile');
  };

  const handleEditProfile = () => {
    // Navigate to the edit profile screen
    // navigation.navigate('EditProfile');
  };

  const handleSettings = () => {
    // Navigate to the settings screen
    // navigation.navigate('Settings');
  };

  const handleLogout = () => {
    // Implement logout logic here
    // For example, clear user data and navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* Profile Title */}
      <Text style={[styles.title, styles.heading]}>CONTROL</Text>

      {/* User Profile Information */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>

        </View>
      </ScrollView>

      {/* Bottom Navigation Inside appContainer */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={navigateToScreen1} style={styles.bottomNavButton}>
          <Image source={levelsIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>LEVELS</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen2} style={styles.bottomNavButton}>
          <Image source={controlIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>CONTROL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen3} style={styles.bottomNavButton}>
          <Image source={updatesIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>UPDATES</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToScreen4} style={styles.bottomNavButton}>
          <Image source={profileIcon} style={styles.bottomNavIcon} />
          <Text style={styles.bottomNavButtonText}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    //left: 20, // Adjust left positioning as needed
  },
  heading: {
    marginBottom: 20,
    fontSize: 25,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },

  profilePicture: {
    width: 80,  // Adjust the size of the profile picture as needed
    height: 80,
    borderRadius: 40,  // Half of the width or height to make it circular
    marginBottom: 10,
  },
  
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  labelP: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoP: {
    fontSize: 14,
    marginBottom: 15,
  },
  buttonP: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  logoutButtonP: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 120,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonTextP: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4, // Adjust as needed to control the spacing between the icon and text
  },

  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  bottomNavButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomNavButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default DashboardScreen;