import React from "react";
// import PropTypes from "prop-types";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";

const AppButton = ({ title, onPress }) => {
	return (
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
			onPress={onPress}
		>
			<Text
				style={{
					// fontFamily: Font["poppins-regular"],
					color: Colors.onPrimary,
					textAlign: "center",
					fontSize: FontSize.large,
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

// const styles = StyleSheet.create({
// 	button: {
// 		backgroundColor: "#007bff",
// 		padding: 10,
// 		borderRadius: 5,
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	buttonText: {
// 		color: "#ffffff",
// 		fontSize: 16,
// 		fontWeight: "bold",
// 	},
// });

export default AppButton;
