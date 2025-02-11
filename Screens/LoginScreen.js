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
// import AppTextInput from "./Component/AppTextInput";
import AppTextInput from "../Component/AppInputText";
import Navigation from "../Navigation/Navigation";

// type Props = NativeStackScreenProps<RootStackParamList, "Login">;

function LoginScreen({ navigation: { navigate } }) {
	return (
		<SafeAreaView style={styles.loginPage}>
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
							color: Colors.background,
							// fontFamily: Font["poppins-bold"],
							marginVertical: Spacing * 3,
						}}
					>
						Sign In
					</Text>
					{/* <Text
						style={{
							// fontFamily: Font["poppins-regular"],
							fontSize: FontSize.large,
							maxWidth: "60%",
							textAlign: "center",
						}}
					>
						Welcome back!
					</Text> */}
				</View>
				<View
					style={{
						marginVertical: Spacing * 3,
					}}
				>
					<AppTextInput placeholder="Email" />
					<AppTextInput placeholder="Password" />
					<AppTextInput placeholder="Role" />
				</View>

				<View>
					<Text
						style={{
							// fontFamily: Font["poppins-regular"],
							fontSize: FontSize.small,
							color: Colors.primary,
							alignSelf: "flex-end",
						}}
					>
						Forgot your password ?
					</Text>
				</View>

				<TouchableOpacity
					style={{
						padding: Spacing * 2,
						backgroundColor: Colors.background,
						marginVertical: Spacing * 3,
						borderRadius: Spacing,
						shadowColor: Colors.primary,
						shadowOffset: {
							width: 0,
							height: Spacing,
						},
						shadowOpacity: 0.3,
						shadowRadius: Spacing,
					}}
					onPress={() => navigate("Home")}
				>
					<Text
						style={{
							// fontFamily: Font["poppins-semiBold"],
							color: Colors.onPrimary,
							textAlign: "center",
							fontSize: FontSize.large,
						}}
					>
						Sign in
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigate("Register")}
					style={{
						padding: Spacing,
					}}
				>
					<Text
						style={{
							// fontFamily: Font["poppins-regular"],
							color: Colors.text,
							textAlign: "center",
							fontSize: FontSize.small,
						}}
					>
						Create new account
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
								backgroundColor: Colors.bluedemo,
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
						{/* <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity> */}
						{/* <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity> */}
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	loginPage: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		backgroundColor: "#fff",
	},
});
