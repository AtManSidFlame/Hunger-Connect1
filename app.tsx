import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// Screens
import DonateScreen from './app/(tabs)/donate';
import HomeScreen from './app/(tabs)/home';
import ProfileScreen from './app/(tabs)/profile';
import SellScreen from './app/(tabs)/sell';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#1e1e1e', borderTopColor: '#0f2027' },
          tabBarActiveTintColor: '#00ffcc',
          tabBarInactiveTintColor: '#aaa',
          tabBarIcon: ({ color, size }) => {
            let iconName: string = 'home';

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Donate') iconName = 'heart';
            else if (route.name === 'Sell') iconName = 'cart';
            else if (route.name === 'Profile') iconName = 'person';

            return <Ionicons name={iconName as any} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Donate" component={DonateScreen} />
        <Tab.Screen name="Sell" component={SellScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
