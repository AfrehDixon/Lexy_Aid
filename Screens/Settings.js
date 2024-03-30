import React from "react";
import {
	Alert,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import SettingsPageComponent from "../Component/SettingsPageComponent";
import CircleAvatar from "../Component/Avater";

import Colors from "../constants/Colors";
import AppButton from "../Component/AppButton";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

export default function Settings() {
	return (
		<View>
			<View>
				<CircleAvatar
					size={50}
					backgroundColor="#ffdde8"
					borderWidth={2}
					borderColor="#fff"
					style={{ marginRight: 20, marginBottom: 30 }}
				/>
			</View>
			<View>
				<SettingsPageComponent
					style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
				>
					<Text style={{ color: Colors.white }}>Language Preferance</Text>
				</SettingsPageComponent>
				<SettingsPageComponent>
					<Text style={{ color: Colors.white }}>Notification Settings</Text>
				</SettingsPageComponent>
				<SettingsPageComponent>
					<Text style={{ color: Colors.white }}>App settings</Text>
				</SettingsPageComponent>
				<SettingsPageComponent
					style={{ borderButtomLeftRadius: 20, borderButtomRightRadius: 20 }}
				>
					<Text style={{ color: Colors.white }}>Help & Support</Text>
				</SettingsPageComponent>
				<View
					style={{
						justifyContent: "center",
						alignContent: "center",
						marginLeft: 20,
						marginRight: 20,
					}}
				>
					<AppButton
						title="logout "
						onPress={() => Alert("Do you want to Log out")}
					/>
				</View>
			</View>
			{/* <TouchableOpacity
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
				}}
				// onPress={onPress}
			>
				<Text
					style={{
						// fontFamily: Font["poppins-regular"],
						color: Colors.onPrimary,
						textAlign: "center",
						fontSize: FontSize.large,
					}}
				>
					Logout
				</Text>
			</TouchableOpacity> */}
		</View>
	);
}
