import React from "react";
import { View,StyleSheet } from "react-native";

const CircleAvatar = ({ size, backgroundColor, borderColor, borderWidth ,style}) => {
	const styles = StyleSheet.create({
		avatar: {
			width: size,
			height: size,
			borderRadius: size / 2, // Ensure perfect circle
			backgroundColor: backgroundColor || "gray", // Default gray
			alignItems: "center",
			justifyContent: "center", // Center content within circle
			borderWidth: borderWidth || 0, // Default no border
			borderColor: borderColor || "transparent", // Default transparent border
		},
	});

	return <View style={[styles.avatar,style ]} />;
};

export default CircleAvatar;
