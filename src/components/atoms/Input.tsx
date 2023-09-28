import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  icon?: ReactNode;
  adicionalClass?: string;
}

const Input: React.FC<InputProps> = ({ adicionalClass, icon, ...rest }) => {
  return (
    <View
      className={`flex-1 flex-row items-center bg-white rounded-lg px-3 py-2 ${adicionalClass} mb-3`}
    >
      {icon && <View testID="input-icon">{icon}</View>}
      <TextInput
        keyboardType="numeric"
        className="flex-1 ml-2 text-zinc-700"
        {...rest}
        style={{ fontSize: 17 }}
        testID="input"
      />
    </View>
  );
};

export default Input;
