import { useState } from "react"
import { Text, TextInput, View } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"
import { Path, Svg } from "react-native-svg"

const SearchIcon = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <Svg {...{ style }} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
        fill="#A09CAB"
      />
    </Svg>
  )
}

export default () => {
  const [search, setSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  return (
    <View style={{ paddingVertical: 12, paddingHorizontal: 16 }}>
      <View
        style={{
          overflow: "hidden",
          paddingVertical: 10,
          paddingHorizontal: 16,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#EFF1F5",
          borderRadius: 100,
        }}
      >
        <SearchIcon style={{ opacity: search ? 0 : 1 }} />
        <TextInput
          placeholder="Search"
          onFocus={() => setSearch(true)}
          onBlur={() => !searchValue && setSearch(false)}
          onChangeText={(text) => setSearchValue(text)}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: search ? "left" : "center",
            fontFamily: "regular",
            fontSize: 16,
            paddingHorizontal: search ? 16 : 0,
          }}
          placeholderTextColor="#A09CAB"
        />
      </View>
    </View>
  )
}
