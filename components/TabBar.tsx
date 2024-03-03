import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Profile from "../screens/Profile"
import { Path, Svg } from "react-native-svg"
import { Text, View } from "react-native"
import Search from "../screens/Search"
import Saved from "../screens/Saved"
import { RootStackParamList } from "../types/routes"

export default () => {
  const Tab = createBottomTabNavigator<RootStackParamList>()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => {
          const icon =
            // Home
            route.name === "Home" ? (
              <Path
                d="M9.99778 19.3275V14.3275H13.9978V19.3275C13.9978 19.8775 14.4478 20.3275 14.9978 20.3275H17.9978C18.5478 20.3275 18.9978 19.8775 18.9978 19.3275V12.3275H20.6978C21.1578 12.3275 21.3778 11.7575 21.0278 11.4575L12.6678 3.92749C12.2878 3.58749 11.7078 3.58749 11.3278 3.92749L2.96778 11.4575C2.62778 11.7575 2.83778 12.3275 3.29778 12.3275H4.99778V19.3275C4.99778 19.8775 5.44778 20.3275 5.99778 20.3275H8.99778C9.54778 20.3275 9.99778 19.8775 9.99778 19.3275Z"
                fill={focused ? "#1C1B1F" : "#A09CAB"}
              />
            ) : // Search
            route.name === "Search" ? (
              <Path
                d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                fill={focused ? "#1C1B1F" : "#A09CAB"}
              />
            ) : // Saved
            route.name === "Saved" ? (
              <Path
                d="M19.6602 4.1672C17.0202 2.3672 13.7602 3.2072 12.0002 5.2672C10.2402 3.2072 6.98021 2.3572 4.34021 4.1672C2.94021 5.1272 2.06021 6.7472 2.00021 8.4572C1.86021 12.3372 5.30021 15.4472 10.5502 20.2172L10.6502 20.3072C11.4102 20.9972 12.5802 20.9972 13.3402 20.2972L13.4502 20.1972C18.7002 15.4372 22.1302 12.3272 22.0002 8.4472C21.9402 6.7472 21.0602 5.1272 19.6602 4.1672ZM12.1002 18.7272L12.0002 18.8272L11.9002 18.7272C7.14021 14.4172 4.00021 11.5672 4.00021 8.6772C4.00021 6.6772 5.50021 5.1772 7.50021 5.1772C9.04021 5.1772 10.5402 6.1672 11.0702 7.5372H12.9402C13.4602 6.1672 14.9602 5.1772 16.5002 5.1772C18.5002 5.1772 20.0002 6.6772 20.0002 8.6772C20.0002 11.5672 16.8602 14.4172 12.1002 18.7272Z"
                fill={focused ? "#1C1B1F" : "#A09CAB"}
              />
            ) : // Settings
            route.name === "Profile" ? (
              <>
                <Path
                  d="M18.39 14.56C16.71 13.7 14.53 13 12 13C9.47 13 7.29 13.7 5.61 14.56C4.61 15.07 4 16.1 4 17.22V20H20V17.22C20 16.1 19.39 15.07 18.39 14.56ZM18 18H6V17.22C6 16.84 6.2 16.5 6.52 16.34C7.71 15.73 9.63 15 12 15C14.37 15 16.29 15.73 17.48 16.34C17.8 16.5 18 16.84 18 17.22V18Z"
                  fill={focused ? "#1C1B1F" : "#A09CAB"}
                />
                <Path
                  d="M9.78 12H14.22C15.43 12 16.36 10.94 16.2 9.74L15.88 7.29C15.57 5.39 13.92 4 12 4C10.08 4 8.43 5.39 8.12 7.29L7.8 9.74C7.64 10.94 8.57 12 9.78 12ZM10.1 7.59C10.26 6.67 11.06 6 12 6C12.94 6 13.74 6.67 13.9 7.59L14.22 10H9.78L10.1 7.59Z"
                  fill={focused ? "#1C1B1F" : "#A09CAB"}
                />
              </>
            ) : null

          return <Svg viewBox="0 0 24 24">{icon}</Svg>
        },
        tabBarStyle: {
          height: 56.6,
          borderTopWidth: 0,
          shadowColor: "transparent",
          paddingTop: 8,
          paddingBottom: 8,
          paddingHorizontal: 18,
        },
        tabBarIconStyle: {
          minWidth: 24,
          minHeight: 24,
          marginBottom: 3,
        },
        tabBarActiveTintColor: "#1C1B1F",
        tabBarInactiveTintColor: "#A09CAB",
        tabBarLabelStyle: {
          fontFamily: "semiBold",
          fontSize: 11,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
