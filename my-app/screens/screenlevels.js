import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Svg, Circle } from 'react-native-svg';

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

  const progress = 0.75;

  return (
    <View style={styles.appContainer}>
      <StatusBar style="auto" />

      {/* Background Rectangle */}
      <View style={styles.backgroundRectangle} />

      {/* Header */}
      <Text style={[styles.title, styles.heading]}>LEVELS</Text>

      {/* Circles */}
      <View style={styles.circlesContainer}>
        {/* First Row */}
        <View style={styles.circleRow}>
          {/* Left Circle */}
          <View style={{ marginRight: 20, position: 'relative' }}>
          <Svg height="120" width="120">
            <Circle
              cx="70"
              cy="70"
              r="40"
              stroke="lightblue"
              strokeWidth="5"
              fill="#0f52ba"
              strokeDasharray={[Math.PI * 2 * 50, Math.PI * 2 * 50]}
              strokeDashoffset={(1 - progress) * Math.PI * 2 * 50}
            />
          </Svg>
          <Text style={styles.circleTitle}>Rainwater Tank A</Text>
        </View>

          {/* Right Circle */}
          <View style={{ marginRight: 20, position: 'relative' }}>
          <Svg height="120" width="120">
          <Text style={styles.circleTitle}>Circle 1</Text>
            <Circle
              cx="70"
              cy="70"
              r="40"
              stroke="lightblue"
              strokeWidth="5"
              fill="#0f52ba"
              strokeDasharray={[Math.PI * 2 * 50, Math.PI * 2 * 50]}
              strokeDashoffset={(1 - progress) * Math.PI * 2 * 50}
            />
          </Svg>
          <Text style={styles.circleTitle}>Rainwater Tank B</Text>
        </View>
        </View>

        {/* Second Row */}
        <View style={styles.circleRow}>
          {/* Left Circle */}
          <View style={{ marginRight: 20, position: 'relative' }}>
          <Svg height="120" width="120" style={{ marginRight: 20 }}>
          <Text style={styles.circleTitle}>Circle 1</Text>
            <Circle
              cx="70"
              cy="70"
              r="40"
              stroke="#0f52ba"
              strokeWidth="5"
              fill="lightblue"
              strokeDasharray={[Math.PI * 2 * 50, Math.PI * 2 * 50]}
              strokeDashoffset={(1 - progress) * Math.PI * 2 * 50}
            />
          </Svg>
          <Text style={styles.circleTitle}>Deepwell Tank A</Text>
        </View>

          {/* Right Circle */}
          <View style={{ marginRight: 20, position: 'relative' }}>
          <Svg height="120" width="120">
          <Text style={styles.circleTitle}>Circle 1</Text>
            <Circle
              cx="70"
              cy="70"
              r="40"
              stroke="#0f52ba"
              strokeWidth="5"
              fill="lightblue"
              strokeDasharray={[Math.PI * 2 * 50, Math.PI * 2 * 50]}
              strokeDashoffset={(1 - progress) * Math.PI * 2 * 50}
            />
          </Svg>
          <Text style={styles.circleTitle}>Deepwell Tank B</Text>
        </View>
        </View>
      </View>

      {/* User Profile Information */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileInfo}>{/* Add profile information UI here */}</View>
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
  backgroundRectangle: {
    position: 'absolute',
    top: 50,
    left: 600,
    right: 600,
    bottom: 400,
    backgroundColor: 'lightgray',  // Adjust the background color as needed
    zIndex: -1,  // Place it behind the circles
    borderRadius: 10,
  },
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleTitle: {
    position: 'absolute',
    top: '15%',
    left: '24%',
    transform: [{ translateX: -20 }, { translateY: -10 }],  // Adjust based on the desired positioning
    color: 'black',
    fontSize: 12,
    fontWeight: 'regular',
    zIndex: 1,  // Place it above the circle
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
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