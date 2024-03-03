import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Pressable, ScrollView, Text, View } from "react-native"
import { Path, Svg } from "react-native-svg"
import { HomeStackParamsList } from "../../types/routes"

export default () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", gap: 12, padding: 16 }}>
        {/* Houses */}
        <Pressable onPress={() => navigation.navigate("Houses")} style={{ minWidth: 64, alignItems: "center" }}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M8 4L2 10V20H14V10L8 4ZM12 18H9V15H7V18H4V10.83L8 6.83L12 10.83V18ZM9 13H7V11H9V13ZM18 20V8.35L13.65 4H10.82L16 9.18V20H18ZM22 20V6.69L19.31 4H16.48L20 7.52V20H22Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, color: "#1C1C1C" }}>Houses</Text>
        </Pressable>

        {/* Rooms */}
        <Pressable onPress={() => navigation.navigate("Rooms")} style={{ minWidth: 64, alignItems: "center" }}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path d="M19 7H17V9H19V7Z" fill="#1C1B1F" />
            <Path d="M19 11H17V13H19V11Z" fill="#1C1B1F" />
            <Path d="M19 15H17V17H19V15Z" fill="#1C1B1F" />
            <Path d="M1 11V21H7V16H9V21H15V11L8 6L1 11ZM13 19H11V14H5V19H3V12L8 8.5L13 12V19Z" fill="#1C1B1F" />
            <Path d="M10 3V4.97L12 6.4V5H21V19H17V21H23V3H10Z" fill="#1C1B1F" />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, color: "#1C1C1C" }}>Rooms</Text>
        </Pressable>

        {/* Farms */}
        <Pressable onPress={() => navigation.navigate("Farms")} style={{ minWidth: 64, alignItems: "center" }}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M20 8.35V19H18V11H6V19H4V8.35L12 5.15L20 8.35ZM22 21V7L12 3L2 7V21H8V13H16V21H22ZM11 19H9V21H11V19ZM13 16H11V18H13V16ZM15 19H13V21H15V19Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, color: "#1C1C1C" }}>Farms</Text>
        </Pressable>

        {/* Saved */}
        <Pressable onPress={() => navigation.navigate("Saved")} style={{ minWidth: 64, alignItems: "center" }}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M24 18L20.14 12H22L15 2L12 6.29L9 2L2 12H3.86L0 18H7V22H11V18H13V22H17V18H24ZM15 5.49L18.16 10H16.48L20.34 16H16.72L14.15 12H16L13.22 8.03L15 5.49ZM3.66 16L7.52 10H5.84L9 5.49L12.16 10H10.48L14.34 16H3.66Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, color: "#1C1C1C" }}>Saved</Text>
        </Pressable>

        {/* Instant */}
        <Pressable onPress={() => navigation.navigate("Instant")} style={{ minWidth: 64, alignItems: "center" }}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M20 8V6C20 4.35 18.65 3 17 3H7C5.35 3 4 4.35 4 6V8C2.35 8 1 9.35 1 11V16C1 17.65 2.35 19 4 19V20C4 20.55 4.45 21 5 21C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V19C21.65 19 23 17.65 23 16V11C23 9.35 21.65 8 20 8ZM6 6C6 5.45 6.45 5 7 5H17C17.55 5 18 5.45 18 6V8.78C17.39 9.33 17 10.12 17 11V13H7V11C7 10.12 6.61 9.33 6 8.78V6ZM21 16C21 16.55 20.55 17 20 17H4C3.45 17 3 16.55 3 16V11C3 10.45 3.45 10 4 10C4.55 10 5 10.45 5 11V15H19V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11V16Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, color: "#1C1C1C" }}>Instant</Text>
        </Pressable>

        {/* Profile */}
        <Pressable onPress={() => navigation.navigate("Profile")} style={{ minWidth: 64, alignItems: "center" }}>
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M19 12.5H22L12 3.5L2 12.5H5V20.5H7V18.5H17V20.5H19V12.5ZM7.21 10.5H16.79L17 10.69V12.5H7V10.69L7.21 10.5ZM14.57 8.5H9.43L12 6.19L14.57 8.5ZM7 16.5V14.5H17V16.5H7Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, color: "#1C1C1C" }}>Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}
