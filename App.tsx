import HomeScreen from "@src/screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  return (
        <View className="flex-1">
          <StatusBar style="auto" />
          <HomeScreen />
        </View>
  );
}
