import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";



import Navigation from "./Navigation/Navigation";
import FontSize from "./constants/FontSize";
import Colors from "./constants/Colors";
// import { ImageBackground } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const[appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync( Entypo.font );
				await new Promise((resolve)=> setTimeout(resolve, 5000))
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(!appIsReady);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return (
			<TouchableOpacity style={styles.container}>
				<View style={{flex:1,flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
					<Image
						style={{
							height: 100,
							width: 100,
							borderRadius:50
						}}
						// resizeMode="contain"
						// source={require("../assets/images/welcome-img.png")}
						source={require("./assets/images/bookreadinf3.png")}
					/>

					<Text style={{fontSize: FontSize.xLarge,color:Colors.white ,marginLeft:20}}>Lexy Aid</Text>
				

				</View>
			</TouchableOpacity>
		);
	}
	return (
		<SafeAreaProvider  onLayout={onLayoutRootView}>
			<Navigation />
			{/* <Entypo name='rocket' sixe={30} /> */}
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.background
	},
	logo: {
		fontSize:FontSize.xxLarge
	}
});
