import { ScrollView } from "react-native"
import Search from "../components/Home/Search"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import Houses from "./Houses"
import { HomeStackParamsList } from "../types/routes"
import Rooms from "./Rooms"
import Saved from "./Saved"
import Instant from "./Instant"
import Profile from "./Profile"
import Divider from "../components/Divider"
import TitleMedium from "../components/TitleMedium"
import Categories from "../components/Home/Categories"
import PostsHorizontal from "../components/Home/PostsHorizontal"
import PostsVertical from "../components/Home/PostsVertical"
import Apartments from "./Apartments"

type HomeProps = NativeStackScreenProps<HomeStackParamsList>

const HomeScreen = ({ navigation }: HomeProps) => {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <Search />
      <Categories />
      <Divider />
      <TitleMedium label="Medium Title" />
      <PostsHorizontal />
      <Divider />
      <TitleMedium label="Medium Title" />
      <PostsVertical />
    </ScrollView>
  )
}

export default () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamsList>()
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="Houses" component={Houses} />
      <HomeStack.Screen name="Rooms" component={Rooms} />
      <HomeStack.Screen name="Apartments" component={Apartments} />
      <HomeStack.Screen name="Saved" component={Saved} />
      <HomeStack.Screen name="Instant" component={Instant} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  )
}
