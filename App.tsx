import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import * as NavigationBar from "expo-navigation-bar"
import { useCallback } from "react"
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from "expo-font"
import { NavigationContainer } from "@react-navigation/native"
import TabBar from "./components/TabBar"

NavigationBar.setBackgroundColorAsync("transparent")

export default () => {
  const [fontsLoaded, fontError] = useFonts({
    black: require("./assets/fonts/Inter/Inter-Black.ttf"),
    bold: require("./assets/fonts/Inter/Inter-Bold.ttf"),
    extraBold: require("./assets/fonts/Inter/Inter-ExtraBold.ttf"),
    extraLight: require("./assets/fonts/Inter/Inter-ExtraLight.ttf"),
    light: require("./assets/fonts/Inter/Inter-Light.ttf"),
    medium: require("./assets/fonts/Inter/Inter-Medium.ttf"),
    regular: require("./assets/fonts/Inter/Inter-Regular.ttf"),
    semiBold: require("./assets/fonts/Inter/Inter-SemiBold.ttf"),
    thin: require("./assets/fonts/Inter/Inter-Thin.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync()
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) return

  return (
    <SafeAreaProvider>
      <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <NavigationContainer>
          <TabBar />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
