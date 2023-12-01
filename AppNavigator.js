import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import CheckEstimationsScreen from './screens/CheckEstimationsScreen';
import RecipientAddressScreen from './screens/RecipientAddressScreen';
import SendPackageScreen from './screens/SendPackageScreen';
import TopUpScreen from './screens/TopUpScreen';
import TrackOrderScreen from './screens/TrackOrderScreen';
import TrackingDetailsScreen from './screens/TrackingDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="SendPackageScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.appGreen,
        tabBarInactiveTintColor: theme.colors.textPlaceholder,
        tabBarStyle: { borderTopColor: 'transparent' },
      }}
    >
      <Tab.Screen
        name="SendPackageScreen"
        component={SendPackageScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/package-variant"
              size={25}
              color={
                focused ? theme.colors.appGreen : theme.colors.textPlaceholder
              }
            />
          ),
          title: 'Send Package',
        }}
      />
      <Tab.Screen
        name="TrackOrderScreen"
        component={TrackOrderScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/map-search-outline"
              size={25}
              color={
                focused ? theme.colors.appGreen : theme.colors.textPlaceholder
              }
            />
          ),
          title: 'Track Order',
        }}
      />
      <Tab.Screen
        name="TopUpScreen"
        component={TopUpScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/attach-money"
              size={25}
              color={
                focused ? theme.colors.appGreen : theme.colors.textPlaceholder
              }
            />
          ),
          title: 'Top Up',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="BottomTabNavigator"
        screenOptions={{
          headerBackImage: ({ tintColor }) => (
            <Icon
              name="AntDesign/arrowleft"
              size={Platform.OS === 'ios' ? 21 : 24}
              color={tintColor}
              style={[styles.headerIcon, styles.headerIconLeft]}
            />
          ),
          headerTitle: 'Ship It',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="RecipientAddressScreen"
          component={RecipientAddressScreen}
          options={{
            title: 'Recipient Address',
          }}
        />
        <Stack.Screen
          name="CheckEstimationsScreen"
          component={CheckEstimationsScreen}
          options={{
            title: 'Check Estimations',
          }}
        />
        <Stack.Screen
          name="TrackingDetailsScreen"
          component={TrackingDetailsScreen}
          options={{
            title: 'Tracking Details',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
