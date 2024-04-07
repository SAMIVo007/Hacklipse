import _ from "lodash";
import {
	Image,
	ScrollView,
	Text,
	TextInput,
	SafeAreaView,
	View,
	Button,
	TouchableOpacity,
	Modal,
	Dimensions,
} from "react-native";
import {
	Ionicons,
	MaterialIcons,
	AntDesign,
	Feather,
	Octicons,
	MaterialCommunityIcons,
	FontAwesome5,
} from "@expo/vector-icons";
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";
// import Card from "../Components/card";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
// import { logoutUser, fetchUserDetails, isSessionValid } from "../util/Api";
import FadedView from "../Components/FadeView";
import { FetchUser } from "../api";
import { Picker } from "react-native-ui-lib";
// import { BlurView } from "expo-blur";
// import { getSessionToken } from "../util/tokenStore";

export default function Home({ route, navigation }) {
	const [myuser, setMyUser] = useState(null); 

	const [selectedValue, setSelectedValue] = useState("");

	const items = [
		{
			uri: "https://etimg.etb2bimg.com/thumb/msid-94596496,width-1200,resizemode-4/.jpg",
		},
		{
			uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4165wdhH1bfCY5csVjCtjt77LxCLc3wU6_9GoI7E9A&s",
		},
		{
			uri: "https://www.manchesterspecialty.com/wp-content/uploads/2019/07/An-Inside-Look-at-Adult-Day-Care-Services-e1546535402214.jpg",
		},
		{
			uri: "https://kauveryhospital.com/blog/wp-content/uploads/2022/01/Importance-of-Day-care-services-in-a-hospital.jpg",
		},
		{
			uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nBsND-YIN21N9ADxI1RGi-zFiPebhtzm4OMQRAY46MzYlG9MurHLu5Ed4rMYRMN7EMU&usqp=CAU",
		},
	];

	const renderItem = (item, index) => {
		return (
			<View className="justify-center items-center" key={index}>
				<Image
					source={item}
					style={{
						width: 380,
						height: 200,
						borderRadius: 15,
						// borderWidth: 0.5,
						// borderColor: "black",
					}}
				/>
			</View>
		);
	};

	const width = Dimensions.get("window").width;
	const progressValue = useSharedValue(0);

	return (
		<>
			<StatusBar style="light" />

			<FadedView>
				<View className="flex-1">
					<View className="p-4 pt-12 flex-row justify-between items-center ">
						<View className="flex-row justify-between items-center">
							{/* <Image
								source={require("../assets/Images/Emblem_of_India.png")}
								className="w-[12%] h-[100%]"
								tintColor={"#0062f5"}
							/> */}
							<Ionicons
								name="person-circle-outline"
								size={26}
								color={"white"}
								style={{ marginRight: 6 }}
							/>

							<Text className="text-white text-lg text-center font-bold">
								Care Connect
							</Text>
						</View>

						<View className="flex-row justify-between items-center">
							<MaterialIcons
								name="qr-code-scanner"
								size={24}
								color={"white"}
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
							<Feather
								name="bell"
								size={24}
								color={"white"}
								style={{ padding: 2, paddingHorizontal: 8 }}
							/>
						</View>
					</View>

					<ScrollView
						showsVerticalScrollIndicator={false}
						fadingEdgeLength={300}
						className="flex-1"
					>
						<View className=" p-1 ml-4 ">
							<Text className="text-white text-xl font-bold  pb-1">
								Welcome, {myuser}
							</Text>
						</View>

						<View className=" mt-3 ">
							<ScrollView
								horizontal={true}
								showsHorizontalScrollIndicator={false}
								className="px-5"
							>
								<View className="mr-4 bg-white items-center justify-center rounded-2xl p-5 px-6">
									<View className="flex-row justify-start ">
										<Image
											source={require("../assets/Images/modi.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<View className="py-3">
											<Text className=" text-xl font-bold ml-4">Rahul Goyal</Text>
											<Text className=" text-gray-600 text-xs ml-4">Physiotherapist</Text>
											<Text className=" text-gray-600 text-xs ml-4 mt-2">
												Apr 6, 2024 - Jun 1, 2024
											</Text>
										</View>
									</View>

									<View className="mt-4  justify-evenly flex-row space-x-2">
										<TouchableOpacity className="flex-1 border p-2 px-4 rounded-full">
											<View className="flex-row justify-center items-center space-x-2">
												<Ionicons name="call" size={16} color="#454545" />
												<Text className="text-md">Call</Text>
											</View>
										</TouchableOpacity>
										<TouchableOpacity className="flex-1 border p-2 px-3 rounded-full">
											<View className="flex-row justify-center items-center space-x-2">
												<Feather name="more-horizontal" size={18} color="#454545" />
												<Text className="text-md">More</Text>
											</View>
										</TouchableOpacity>
									</View>
								</View>

								<View className="mr-4 bg-white items-center justify-center rounded-2xl p-5 px-6">
									<View className="flex-row justify-start ">
										<Image
											source={require("../assets/Images/modi.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<View className="py-3">
											<Text className=" text-xl font-bold ml-4">Rahul Goyal</Text>
											<Text className=" text-gray-600 text-xs ml-4">Physiotherapist</Text>
											<Text className=" text-gray-600 text-xs ml-4 mt-2">
												Apr 6, 2024 - Jun 1, 2024
											</Text>
										</View>
									</View>

									<View className="mt-4  justify-evenly flex-row space-x-2">
										<TouchableOpacity className="flex-1 border p-2 px-4 rounded-full">
											<View className="flex-row justify-center items-center space-x-2">
												<Ionicons name="call" size={16} color="#454545" />
												<Text className="text-md">Call</Text>
											</View>
										</TouchableOpacity>
										<TouchableOpacity className="flex-1 border p-2 px-3 rounded-full">
											<View className="flex-row justify-center items-center space-x-2">
												<Feather name="more-horizontal" size={18} color="#454545" />
												<Text className="text-md">More</Text>
											</View>
										</TouchableOpacity>
									</View>
								</View>

								<TouchableOpacity onPress={()=>{navigation.navigate("Services")}} className="mx-3 mr-12 items-center justify-center">
									<AntDesign
										name="pluscircle"
										size={50}
										color="#ffffff"
										style={{
											padding: 2,
											paddingHorizontal: 18,
											alignItems: "center",
											justifyContent: "center",
										}}
									/>
								</TouchableOpacity>
							</ScrollView>

							<View
								className="border border-gray-300 flex-row bg-white overflow-hidden items-center justify-between mx-4 mt-4 rounded-3xl "
								style={{ elevation: 10 }}
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
						</View>

						<View
							style={{
								borderTopRightRadius: 32,
								borderTopLeftRadius: 32,
								padding: 10,
								paddingTop: 3,
								paddingBottom: 50,
								overflow: "hidden",
								marginTop: 18,
								backgroundColor: "#ffffffe4",
							}}
						>
							<Text className=" text-base font-bold p-4">Services</Text>

							<View className=" space-4 space-y-4 px-3 pt-1">
								<View className="flex-row space-x-4 ">
									<TouchableOpacity className="flex-1">
										<View className="bg-primaryBlue  justify-center items-center rounded-lg p-4 ">
											<FontAwesome5
												name="user-nurse"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Nurse on Demand</Text>
									</TouchableOpacity>
									<TouchableOpacity className="flex-1">
										<View className="bg-primaryBlue justify-center items-center rounded-lg p-4 ">
											<FontAwesome5
												name="hand-holding-medical"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Physiotherapy</Text>
									</TouchableOpacity>
								</View>

								<View className="flex-row space-x-4 ">
									<TouchableOpacity className="flex-1">
										<View className="bg-primaryBlue  justify-center items-center rounded-lg p-4 ">
											<MaterialCommunityIcons
												name="truck-delivery"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Medication Delivery</Text>
									</TouchableOpacity>
									<TouchableOpacity className="flex-1">
										<View className="bg-primaryBlue justify-center items-center rounded-lg p-4 ">
											<Feather
												name="bookmark"
												size={24}
												color="white"
												style={{ padding: 2, paddingHorizontal: 8 }}
											/>
										</View>
										<Text className="text-center p-1">Book Appointments</Text>
									</TouchableOpacity>
								</View>
							</View>

							<Text className=" text-base font-bold p-4 mt-5">Updates</Text>

							<View className=" mt-[-8] justify-center items-center">
								<Carousel
									loop
									width={width}
									height={width * 0.58}
									pagingEnabled={true}
									snapEnabled={true}
									autoPlay={true}
									autoPlayInterval={4000}
									onProgressChange={(_, absoluteProgress) =>
										(progressValue.value = absoluteProgress)
									}
									mode="parallax"
									modeConfig={{
										parallaxScrollingScale: 0.9,
										parallaxScrollingOffset: 50,
									}}
									data={items}
									scrollAnimationDuration={700}
									renderItem={({ item }) => (
										<View>
											<Image
												source={{ uri: item.uri }}
												style={{
													width: "100%",
													height: "100%",
													borderRadius: 15,
													padding: 4,
												}}
											/>
										</View>
									)}
								/>
							</View>

							<Text className=" text-base font-bold p-4 mb-1">Explore</Text>

							<View className="mb-14">
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									className="space-x-8 pl-4 "
								>
									<TouchableOpacity className="mr-[-8] flex-1 items-center justify-center">
										<Image
											source={require("../assets/Images/bp.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<Text className="text-center p-1">Medical Apparatus</Text>
									</TouchableOpacity>
									<TouchableOpacity className="flex-1 items-center justify-center">
										<Image
											source={require("../assets/Images/supplements.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<Text className="text-center p-1">Supplements</Text>
									</TouchableOpacity>
									<TouchableOpacity className="flex-1 items-center justify-center">
										<Image
											source={require("../assets/Images/medicines.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<Text className="text-center p-1">Medicines</Text>
									</TouchableOpacity>
									<TouchableOpacity className="flex-1 items-center justify-center">
										<Image
											source={require("../assets/Images/multivitamin.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<Text className="text-center p-1">Multivitamins</Text>
									</TouchableOpacity>
									<TouchableOpacity className="flex-1 items-center justify-center">
										<Image
											source={require("../assets/Images/personal.jpeg")}
											style={{
												width: 100,
												height: 100,
												borderRadius: 60,
												borderWidth: 2,
												borderColor: "#696969ff",
											}}
										/>
										<Text className="text-center p-1">Personal Care</Text>
									</TouchableOpacity>

									<TouchableOpacity className=" px-6 mx-6 rounded-3xl flex-row justify-center items-center">
										<Text>More {">"}</Text>
									</TouchableOpacity>
								</ScrollView>
							</View>
						</View>
					</ScrollView>
				</View>
			</FadedView>

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

				<TouchableOpacity className=" p-2 px-6 items-center">
					<Ionicons name="person" size={26} color={"#454545"} />
					<Text className="text-[#454545] text-xs">Menu</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
