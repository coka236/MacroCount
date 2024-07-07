import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';


import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="meal"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'clipboard-text' : 'clipboard-text-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'account' : 'account-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}




const styles = StyleSheet.create({
  tabBar: {
    height: 100, // Prilagodite visinu kako vam odgovara
   
  },
  tabLabel: {
    fontSize: 12, // Veličina fonta labela u tabovima
  },
});
