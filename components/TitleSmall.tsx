import { View, Text } from "react-native"

export default ({ label }: { label: string }) => {
  return <Text style={{ fontFamily: "semiBold", fontSize: 16, color: "#1C1C1C" }}>{label}</Text>
}
