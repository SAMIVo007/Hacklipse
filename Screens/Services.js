import {
	Image,
	ScrollView,
	Text,
	TextInput,
	SafeAreaView,
	View,
	Button,
	TouchableOpacity,
	ImageBackground,
	Modal,
	Pressable,
	TouchableHighlight,
} from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	Feather,
	Octicons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
// import { Carousel, Card } from "react-native-ui-lib";
import Colors from "../Components/Colors";
import FadedView from "../Components/FadeView";
import { Picker } from "react-native-ui-lib";

export default function Services({ route, navigation }) {
	const items = [1, 2, 3, 4];
	const [selectedValue, setSelectedValue] = useState("");


	return (
		<>
			<View className="flex-1 bg-gray-100">
				<View className="p-4 pt-12 flex-row justify-between items-center ">
					<View className="flex-row justify-between items-center">
						<Ionicons
							name="person-circle"
							size={26}
							color={Colors.primaryBlue}
							style={{ marginRight: 6 }}
						/>

						<Text className="text-primaryBlue text-lg text-center font-bold">
							Care Connect
						</Text>
					</View>

					<View className="flex-row justify-between items-center">
						<MaterialIcons
							name="qr-code-scanner"
							size={24}
							color={Colors.primaryBlue}
							style={{ padding: 2, paddingHorizontal: 8 }}
						/>
						<Feather
							name="bell"
							size={24}
							color={Colors.primaryBlue}
							style={{ padding: 2, paddingHorizontal: 8 }}
						/>
					</View>
				</View>

				<View
					className="p-2 border border-gray-300 flex-row bg-white overflow-hidden items-center justify-between mx-4 mt-4 rounded-3xl "
				>
					<Picker
						value={selectedValue}
						onChange={(value) => setSelectedValue(value)}
						placeholder="Find Services..."
						className="flex-1 p-2 px-5"
					>
						<Picker.Item label="Caretaker 1" value=" 1" />
						<Picker.Item label="Caretaker 2" value=" 2" />
						<Picker.Item label="Caretaker 3" value=" 3" />
						<Picker.Item label="Caretaker 4" value=" 4" />
						<Picker.Item label="Caretaker 5" value=" 5" />
					</Picker>
					<Ionicons
						name="search"
						size={24}
						color="#a2a2a2"
						style={{ padding: 2, paddingHorizontal: 18 }}
					/>
				</View>

				<View className="mt-4 ">
					<ScrollView
						className=" space-y-5 "
						showsVerticalScrollIndicator={false}
						// fadingEdgeLength={200}
					>
						<View className=" mt-2 px-5 bg-white overflow-hidden justify-center items-start">
							<Text className=" py-3 text-base text-gray-800 font-bold">
								Day Care & Nursing
							</Text>

							<View className="flex-row space-x-3">
								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 160,
											height: 160,
											borderRadius: 10,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">
										Day care Assist
									</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 160,
											height: 160,
											borderRadius: 10,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">
										Physiotherapist
									</Text>
								</TouchableOpacity>
							</View>

							<View className="flex-row space-x-3">
								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 160,
											height: 160,
											borderRadius: 10,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Trained Nurse</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 160,
											height: 160,
											borderRadius: 10,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Home Care</Text>
								</TouchableOpacity>
							</View>

							<View className="flex-row space-x-3">
								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 160,
											height: 160,
											borderRadius: 10,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">
										Doctor Appointment
									</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 160,
											height: 160,
											borderRadius: 10,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">
										Mental Therapy
									</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View className=" mt-4 px-5 bg-white overflow-hidden justify-center items-start">
							<Text className=" py-3 text-base text-gray-800 font-bold">Shop</Text>

							<View className="flex-row justify-evenly space-x-3">
								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 80,
											height: 80,
											borderRadius: 40,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Thermomenter</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 80,
											height: 80,
											borderRadius: 40,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">BP Apparatus</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 80,
											height: 80,
											borderRadius: 40,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Multivitamins</Text>
								</TouchableOpacity>
							</View>

							<View className="flex-row justify-evenly space-x-8">
								<TouchableOpacity className=" justify-center items-center ml-2 p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 80,
											height: 80,
											borderRadius: 40,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Skin Care</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 80,
											height: 80,
											borderRadius: 40,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Protien</Text>
								</TouchableOpacity>

								<TouchableOpacity className=" justify-center items-center  p-2">
									<Image
										source={require("../assets/Images/supplements.jpeg")}
										style={{
											width: 80,
											height: 80,
											borderRadius: 40,
											borderWidth: 2,
											borderColor: "#8a8a8aff",
										}}
									/>
									<Text className=" py-2 text-center text-gray-800 ">Oximeter</Text>
								</TouchableOpacity>
							</View>
						</View>

						<View className="my-52"></View>
					</ScrollView>
				</View>
			</View>

			<StatusBar style="dark" />

			<View
				className="border border-gray-300 flex-row justify-evenly m-2 bg-white absolute bottom-1 right-1 left-1 overflow-hidden "
				style={{
					borderTopLeftRadius: 16,
					borderBottomLeftRadius: 16,
					borderTopRightRadius: 16,
					borderBottomRightRadius: 16,
					elevation: 10,
				}}
			>
				<TouchableOpacity
					className=" p-2 px-6 items-center"
					onPress={() => {
						navigation.navigate("Home");
					}}
				>
					<Ionicons name="home" size={26} color={"#0062f5"} />
					<Text className="text-primaryBlue text-xs">Home</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className=" p-2 px-6 items-center"
					onPress={() => {
						navigation.navigate("Services");
					}}
				>
					<Octicons name="apps" size={26} color={"#454545"} />
					<Text className="text-[#454545] text-xs">Services</Text>
				</TouchableOpacity>

				<TouchableOpacity  className=" p-2 px-6 items-center">
					<Ionicons name="person" size={26} color={"#454545"} />
					<Text className="text-[#454545] text-xs">Menu</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
