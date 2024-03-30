import {
	Dimensions,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

// import Font from "../constants/Font";
// import SplashScreen from "./SplashScreen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

// type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

function WelcomeScreen({ navigation }) {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignContent: "center",
				backgroundColor: '#fff',
			}}
		>
			<View>
				<ImageBackground
					style={{
						height: height / 2.5,
					}}
					resizeMode="contain"
					// source={require("../assets/images/welcome-img.png")}
					source={require("../assets/images/loginimage.png")}
				/>
				<View
					style={{
						paddingHorizontal: Spacing * 4,
						paddingTop: Spacing * 4,
					}}
				>
					<Text
						style={{
							fontSize: FontSize.xxLarge,
							color: Colors.primary,
							// fontFamily: Font["poppins-bold"],
							textAlign: "center",
						}}
					>
						Dyslexia Support
					</Text>

					<Text
						style={{
							fontSize: FontSize.small,
							color: Colors.text,
							// fontFamily: Font["poppins-regular"],
							textAlign: "center",
							marginTop: Spacing * 2,
						}}
					>
						Smart dyslexia detection and learning support
					</Text>
				</View>
				<View
					style={{
						paddingHorizontal: Spacing * 2,
						paddingTop: Spacing * 6,
						flexDirection: "row",
					}}
				>
					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={{
							backgroundColor: Colors.background,
							paddingVertical: Spacing * 1.5,
							paddingHorizontal: Spacing * 2,
							width: "48%",
							borderRadius: Spacing,
							shadowColor: Colors.primary,
							shadowOffset: {
								width: 0,
								height: Spacing,
							},
							shadowOpacity: 0.3,
							shadowRadius: Spacing,
						}}
					>
						<Text
							style={{
								// fontFamily: Font["poppins-regular"],
								color: Colors.onPrimary,
								fontSize: FontSize.large,
								textAlign: "center",
							}}
						>
							Login
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Register")}
						style={{
							paddingVertical: Spacing * 1.5,
							paddingHorizontal: Spacing * 2,
							width: "48%",
							borderRadius: Spacing,
						}}
					>
						<Text
							style={{
								// fontFamily: Font["poppins-regular"],
								color: Colors.text,
								fontSize: FontSize.large,
								textAlign: "center",
							}}
						>
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({});
