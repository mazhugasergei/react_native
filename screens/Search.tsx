import { ScrollView, Text } from "react-native"
import Search from "../components/Search/Search"
import Divider from "../components/Divider"
import TitleMedium from "../components/TitleMedium"
import Categories from "../components/Search/Categories"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeStackParamsList } from "../types/routes"
import Houses from "./Houses"
import Rooms from "./Rooms"
import Apartments from "./Apartments"
import Instant from "./Instant"

const SearchScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Search />
      <Divider dashed />
      <TitleMedium label="Medium Title" />
      <Categories />
    </ScrollView>
  )
}

export default () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamsList>()
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
      <HomeStack.Screen name="Houses" component={Houses} />
      <HomeStack.Screen name="Rooms" component={Rooms} />
      <HomeStack.Screen name="Apartments" component={Apartments} />
      <HomeStack.Screen name="Instant" component={Instant} />
    </HomeStack.Navigator>
  )
}
