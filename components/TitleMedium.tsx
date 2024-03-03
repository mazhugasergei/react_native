import { View, Text } from "react-native"

export default ({ label }: { label: string }) => {
  return (
    <View style={{ paddingTop: 8, paddingBottom: 4, paddingHorizontal: 16 }}>
      <Text style={{ fontFamily: "semiBold", fontSize: 20, color: "#1C1C1C" }}>{label}</Text>
    </View>
  )
}
