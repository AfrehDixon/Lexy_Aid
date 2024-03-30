import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../Screens/WelcomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/Register";
import HomePage from "../Screens/HomePage";
import RegisterChild from "../Screens/RegisterChild";


export default function Navigation() {
	return (
		<NavigationContainer>
			<Rootnavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator();

function Rootnavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Register"
				component={RegisterScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Home"
				component={HomePage}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="RegisterChild"
				component={RegisterChild}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
