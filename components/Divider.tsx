import { View } from "react-native"

export default ({ dashed }: { dashed?: boolean }) => {
  return (
    <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
      <View style={{ borderTopWidth: 1, borderTopColor: "#A09CAB", borderStyle: dashed ? "dashed" : "solid" }} />
    </View>
  )
}
