import { Button, Pressable, ScrollView, Text } from "react-native"
import Search from "../components/Search"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Houses from "./Houses"

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Search />
      <ScrollView style={{ flexDirection: "row" }}>
        <Button onPress={() => navigation.navigate("Houses")} title="Houses" />
      </ScrollView>
    </ScrollView>
  )
}

export default () => {
  const HomeStack = createNativeStackNavigator()

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Houses" component={Houses} />
    </HomeStack.Navigator>
  )
}
