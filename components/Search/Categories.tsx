import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Pressable, Text, View } from "react-native"
import { Path, Svg } from "react-native-svg"
import { HomeStackParamsList } from "../../types/routes"

export default () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>()

  return (
    <View style={{ gap: 8, paddingHorizontal: 16, paddingVertical: 12 }}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {/* Houses */}
        <Pressable
          onPress={() => navigation.navigate("Houses")}
          style={{ flex: 1, backgroundColor: "#EFF1F5", borderRadius: 16, padding: 16 }}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M8 4L2 10V20H14V10L8 4ZM12 18H9V15H7V18H4V10.83L8 6.83L12 10.83V18ZM9 13H7V11H9V13ZM18 20V8.35L13.65 4H10.82L16 9.18V20H18ZM22 20V6.69L19.31 4H16.48L20 7.52V20H22Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, marginTop: 4 }}>Houses</Text>
        </Pressable>

        {/* Rooms */}
        <Pressable
          onPress={() => navigation.navigate("Rooms")}
          style={{ flex: 1, backgroundColor: "#EFF1F5", borderRadius: 16, padding: 16 }}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path d="M19.5 7H17.5V9H19.5V7Z" fill="#1C1B1F" />
            <Path d="M19.5 11H17.5V13H19.5V11Z" fill="#1C1B1F" />
            <Path d="M19.5 15H17.5V17H19.5V15Z" fill="#1C1B1F" />
            <Path
              d="M1.5 11V21H7.5V16H9.5V21H15.5V11L8.5 6L1.5 11ZM13.5 19H11.5V14H5.5V19H3.5V12L8.5 8.5L13.5 12V19Z"
              fill="#1C1B1F"
            />
            <Path d="M10.5 3V4.97L12.5 6.4V5H21.5V19H17.5V21H23.5V3H10.5Z" fill="#1C1B1F" />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, marginTop: 4 }}>Rooms</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        {/* Apartments */}
        <Pressable
          onPress={() => navigation.navigate("Apartments")}
          style={{ flex: 1, backgroundColor: "#EFF1F5", borderRadius: 16, padding: 16 }}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M20 8V6C20 4.35 18.65 3 17 3H7C5.35 3 4 4.35 4 6V8C2.35 8 1 9.35 1 11V16C1 17.65 2.35 19 4 19V20C4 20.55 4.45 21 5 21C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V19C21.65 19 23 17.65 23 16V11C23 9.35 21.65 8 20 8ZM6 6C6 5.45 6.45 5 7 5H17C17.55 5 18 5.45 18 6V8.78C17.39 9.33 17 10.12 17 11V13H7V11C7 10.12 6.61 9.33 6 8.78V6ZM21 16C21 16.55 20.55 17 20 17H4C3.45 17 3 16.55 3 16V11C3 10.45 3.45 10 4 10C4.55 10 5 10.45 5 11V15H19V11C19 10.45 19.45 10 20 10C20.55 10 21 10.45 21 11V16Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, marginTop: 4 }}>Apartments</Text>
        </Pressable>

        {/* Instant */}
        <Pressable
          onPress={() => navigation.navigate("Instant")}
          style={{ flex: 1, backgroundColor: "#EFF1F5", borderRadius: 16, padding: 16 }}
        >
          <Svg width="24" height="24" viewBox="0 0 24 24">
            <Path
              d="M24 18L20.14 12H22L15 2L12 6.29L9 2L2 12H3.86L0 18H7V22H11V18H13V22H17V18H24ZM15 5.49L18.16 10H16.48L20.34 16H16.72L14.15 12H16L13.22 8.03L15 5.49ZM3.66 16L7.52 10H5.84L9 5.49L12.16 10H10.48L14.34 16H3.66Z"
              fill="#1C1B1F"
            />
          </Svg>
          <Text style={{ fontFamily: "semiBold", fontSize: 13, marginTop: 4 }}>Instant</Text>
        </Pressable>
      </View>
    </View>
  )
}
