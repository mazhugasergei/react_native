import { ScrollView, View } from "react-native"
import TitleSmall from "../TitleSmall"

export default () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", gap: 12, paddingHorizontal: 16 }}>
        <View style={{ paddingTop: 8, paddingBottom: 12, gap: 8 }}>
          <View style={{ width: 264, height: 188, backgroundColor: "#EFF1F5", borderRadius: 16 }} />
          <TitleSmall label="Section title" />
        </View>

        <View style={{ paddingTop: 8, paddingBottom: 12, gap: 8 }}>
          <View style={{ width: 264, height: 188, backgroundColor: "#EFF1F5", borderRadius: 16 }} />
          <TitleSmall label="Section title" />
        </View>

        <View style={{ paddingTop: 8, paddingBottom: 12, gap: 8 }}>
          <View style={{ width: 264, height: 188, backgroundColor: "#EFF1F5", borderRadius: 16 }} />
          <TitleSmall label="Section title" />
        </View>
      </View>
    </ScrollView>
  )
}
