// app/index.tsx for Output 1

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>Hello World!</Text>
      <Text>Welcome to React Native Project Development.</Text>
    </View>
  );
}
