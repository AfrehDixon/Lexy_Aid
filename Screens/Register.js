import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
// import AppTextInput from "../Component/AppTextInput";
import AppTextInput from "../Component/AppInputText";

// type Props = NativeStackScreenProps<RootStackParamList, "Register">;

function RegisterScreen({ navigation }) {
	return (
		<SafeAreaView style={ {
			flex: 1,
			justifyContent: "center",
			alignContent: 'center',
			backgroundColor: Colors.white
		}}>
			<View
				style={{
					padding: Spacing * 2,
				}}
			>
				<View
					style={{
						alignItems: "center",
					}}
				>
					<Text
						style={{
							fontSize: FontSize.xLarge,
							color: Colors.primary,
							// fontFamily: Font["poppins-bold"],
							marginVertical: Spacing * 3,
						}}
					>
						Create account
					</Text>
					<Text
						style={{
							fontFamily: Font["poppins-regular"],
							fontSize: FontSize.small,
							maxWidth: "80%",
							textAlign: "center",
						}}
					>
						Create an account so you can explore!
					</Text>
				</View>
				<View
					style={{
						marginVertical: Spacing * 3,
					}}
				>
					<AppTextInput placeholder="Email" />
					<AppTextInput placeholder="Password" />
					<AppTextInput placeholder="Confirm Password" />
				</View>
				<TouchableOpacity
					style={{
						padding: Spacing * 2,
						backgroundColor: Colors.primary,
						marginVertical: Spacing * 3,
						borderRadius: Spacing,
						shadowColor: Colors.primary,
						shadowOffset: {
							width: 0,
							height: Spacing,
						},
						shadowOpacity: 0.3,
						shadowRadius: Spacing,
					} }
					onPress={()=> navigation.navigate("Home")}
				>
					<Text
						style={{
							// fontFamily: Font["poppins-regular"],
							color: Colors.onPrimary,
							textAlign: "center",
							fontSize: FontSize.large,
						}}
					>
						Sign up
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Login")}
					style={{
						padding: Spacing,
					}}
				>
					<Text
						style={{
							// fontFamily: Font["poppins-semiBold"],
							color: Colors.text,
							textAlign: "center",
							fontSize: FontSize.small,
						}}
					>
						Already have an account
					</Text>
				</TouchableOpacity>

				<View
					style={{
						marginVertical: Spacing * 3,
					}}
				>
					<Text
						style={{
							// fontFamily: Font["poppins-regular"],
							color: Colors.primary,
							textAlign: "center",
							fontSize: FontSize.small,
						}}
					>
						Or continue with
					</Text>

					<View
						style={{
							marginTop: Spacing,
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
						<TouchableOpacity
							style={{
								padding: Spacing,
								backgroundColor: Colors.gray,
								borderRadius: Spacing / 2,
								marginHorizontal: Spacing,
							}}
						>
							<Ionicons
								name="logo-google"
								color={Colors.text}
								size={Spacing * 2}
							/>
						</TouchableOpacity>
					</View>
					{/* <Text onPress={() => navigation.navigate("RegisterChild")}>
						Register Child
					</Text> */}
				</View>
			</View>
		</SafeAreaView>
	);
}

export default RegisterScreen;
