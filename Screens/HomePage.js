import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import Learn from "./Learn";
// import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Homepage = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route, focused }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;

					// if (route.name === "Home") {
					// 	iconName = focused ? "home" : "home-outline";
				// } else 
					if ( route.name === "Learn" ) {
						iconName = focused ? "book" : "book-outline";
					} else if ( route.name === "Settings" ) {
						iconName = focused ? "settings" : "settings-outline";
					}
					else if ( route.name === "Home" ) {
						iconName = focused ? "home" : "home-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: "blue",
				inactiveTintColor: "gray",
			}}
		>
			<Tab.Screen name="HomePage" component={HomeScreen}  options={{headerShown: false}} />
			<Tab.Screen name="Learn" component={Learn} />
			<Tab.Screen name="Settings" component={Settings}  />
			{/* <Tab.Screen name="Home" component={ HomeScreen } /> */}
		</Tab.Navigator>
	);
};

export default Homepage;
