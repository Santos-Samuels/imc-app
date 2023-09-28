import React, { PropsWithChildren } from "react";
import { SafeAreaView, View } from "react-native";

interface ScreenContainerProps extends PropsWithChildren {
  justifyContent?: "justify-center" | "justify-start" | "justify-end";
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  justifyContent,
}) => {
  return (
    <SafeAreaView
      className={`flex-1 items-center bg-zinc-200/50 ${
        justifyContent ?? "justify-start"
      }`}
    >
      <View className="p-3 w-full flex-1">{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;
