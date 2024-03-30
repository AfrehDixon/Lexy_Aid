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

function RegisterChild({ navigation }) {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				justifyContent: "center",
				alignContent: "center",
			}}
		>
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
						Register You Children
					</Text>
					<Text
						style={{
							fontFamily: Font["poppins-regular"],
							fontSize: FontSize.small,
							maxWidth: "80%",
							textAlign: "center",
						}}
					>
						Create an account for your Child!
					</Text>
				</View>
				<View
					style={{
						marginVertical: Spacing * 3,
					}}
				>
					<AppTextInput placeholder="Name" />
					<AppTextInput placeholder="Age" />
					<AppTextInput placeholder="Grade" />
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
					} }
					onPress={()=> navigation.navigate('Home')}
				>
					<Text
						style={{
							// fontFamily: Font["poppins-regular"],
							color: Colors.onPrimary,
							textAlign: "center",
							fontSize: FontSize.large,
						}}
					>
						Register
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

export default RegisterChild;
