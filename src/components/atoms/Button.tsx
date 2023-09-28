import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  size?: "sm" | "md" | "lg";
  mode?: "primary" | "secundary";
}

const sizesStyle = {
  sm: "py-2 px-4",
  md: "py-3 px-6",
  lg: "py-4 px-8",
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  size,
  mode = "primary",
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center justify-center bg-zinc-800 rounded-lg ${
        sizesStyle[size || "md"]
      } ${mode === "primary" ? "bg-zinc-800" : "bg-white"}`}
    >
      <Text
        className={`font-semibold text-lg ${
          mode === "primary" ? "text-white" : "text-zinc-800"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
