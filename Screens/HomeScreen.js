import React, { useState, useEffect } from "react";
import {
	Button,
	Text,
	View,
	StyleSheet,
	FlatList,
	Alert,
	Modal,
} from "react-native";
import {
	ImageBackground,
	SafeAreaView,
	TouchableOpacity,
} from "react-native-web";

import Card from "../Component/Card";
import CircleAvatar from "../Component/Avater";
import AppButton from "../Component/AppButton";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
export default function HomeScreen({ navigation }) {
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPopup(true);
		}, 10000); // 10 seconds delay

		return () => clearTimeout(timer); // Clean up timer on unmount
	}, []);

	return (
		<SafeAreaView style={{ backgroundColor: "#6c63ff" }}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={showPopup}
				onRequestClose={() => setShowPopup(false)}
			>
				<View style={styles.popupContainer}>
					<Text style={styles.popupText}>
						Would you like to register children?
					</Text>
					<Button
						title="Register Children"
						onPress={() => {
							setShowPopup(false);
							navigation.navigate("RegisterChild");
						}}
					/>
				</View>
			</Modal>

			<View style={styles.homeheader}>
				<Text
					style={{
						color: "#fff",
						marginLeft: 20,
						justifyContent: "center",
						textAlign: "start",
						fontSize: 20,
					}}
				>
					Welcome Samuel
				</Text>

				<CircleAvatar
					size={50}
					backgroundColor="#ffdde8"
					borderWidth={2}
					borderColor="#fff"
					style={{ marginRight: 20, marginBottom: 30 }}
				/>
			</View>
			<View style={styles.content}>
				<Text
					style={{
						margin: 20,
						paddingLeft: 20,
						fontSize: 15,
						fontWeight: "bold",
					}}
				>
					Dyslexia Test
				</Text>
				<View
					style={{
						// color
						backgroundColor: "#e6e6ff",
						marginLeft: 20,
						marginRight: 20,
						borderRadius: 20,
						paddingBottom: 10,
						flex: 1,
						justifyContent: "flex-start",
						alignContent: "flex-start",
						alignItems: "flex-start",
					}}
				>
					<View>
						<Text
							style={{
								marginLeft: 20,
								paddingTop: 20,
								fontWeight: "bold",
								fontSize: FontSize.large,
							}}
						>
							Personlaised
						</Text>
						<Text
							style={{
								marginLeft: 20,
								paddingTop: 20,
								paddingBottom: 20,
							}}
						>
							1,700 children tested in Ghana
						</Text>
						<TouchableOpacity
							style={{
								backgroundColor: Colors.background,
								padding: 20,
								marginLeft: 20,
								borderRadius: 20,
								// borderBottomRightRadius: 20,
							}}
						>
							<Text style={{ color: "#fff", textAlign: "center" }}>
								Start Test!
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View
					style={{
						// justifyContent: "center",
						// color
						// marginHorizontal: 30,
						marginTop: 20,
						marginLeft: 20,
						marginRight: 20,
						borderRadius: 10,
					}}
				>
					<Text>Learning Categories</Text>
					{/* <FlatList> */}
					{/* <Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card /> */}
					<View style={styles.container}>
						<View style={styles.box}>
							<Text>Box 1</Text>
						</View>
						<View style={styles.box}>
							<Text>Box 2</Text>
						</View>
					</View>
					{/* </FlatList> */}
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	homeheader: {
		marginTop: 40,
		backgroundColor: "#6c63ff",
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	content: {
		backgroundColor: "#fff",
		maxHeight: "100",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	},
	container: {
		// flexDirection: "row",
		flexWrap: "wrap",
		width: "80%",
		// gap:10,// Assuming the screen width fills the entire device width
	},
	box: {
		width: "45%", // Two boxes will fit in a row on most phone screens
		backgroundColor: "lightblue",
		padding: 10,
		borderRadius: 10,
		height: 200,
		marginTop: 20,
		marginRight: 20,
	},
	popupContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
	},
	popupText: {
		fontSize: 20,
		marginBottom: 20,
		color: "white",
	},
});
