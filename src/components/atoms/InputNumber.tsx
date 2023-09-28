import { Ionicons } from "@expo/vector-icons";
import { colors } from "@src/shared/themes/colors";
import { Text, TouchableOpacity, View } from "react-native";

interface InputNumberProps {
  value: number;
  isBordered?: boolean;
  setValue: (value: number) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  value,
  setValue,
  isBordered,
}) => {
  const handleIncrement = () => {
    if (value < 10) setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) setValue(value - 1);
  };

  return (
    <View
      className={`flex-row items-center justify-between bg-white rounded-lg px-3 py-2 ${
        isBordered && "border border-zinc-200"
      }`}
    >
      <TouchableOpacity testID="decrease" onPress={handleDecrement}>
        <Ionicons
          name="remove"
          size={24}
          color={
            value > 1 ? colors.tabMenuIcons_active : colors.iconColor_light
          }
        />
      </TouchableOpacity>

      <Text
        className="font-semibold mx-2 text-zinc-700"
        style={{ fontSize: 17 }}
        testID="counter"
        aria-valuenow={value}
      >
        {value}
      </Text>

      <TouchableOpacity testID="increase" onPress={handleIncrement}>
        <Ionicons name="add" size={24} color={colors.tabMenuIcons_active} />
      </TouchableOpacity>
    </View>
  );
};

export default InputNumber;
