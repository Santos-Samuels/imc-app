import { Button, Input, ScreenContainer } from "@src/components";
import {
  DataProps,
  ImcClassificationType,
  ImcProps,
} from "@src/shared/interface/imc.interface";
import { useState } from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const [data, setData] = useState<DataProps>({});
  const [error, setError] = useState<string>("");

  const calculateImc = (weight: number, height: number) => {
    return weight / (height * height);
  };

  const getImc = () => {
    if (!data.weight || !data.height || !data.age) {
      setError("Preencha todos os campos!");
      return;
    }

    setError("");
    let imc: ImcProps = {
      value: 0,
    };

    imc.value = calculateImc(Number(data.weight!), Number(data.height!));

    if (imc.value < 18.5) imc.classification = "Baixo peso";
    else if (imc.value <= 24.9) imc.classification = "Peso ideal";
    else if (imc.value <= 29.9) imc.classification = "Sobrepeso";
    else imc.classification = "Obesidade";

    setData((prev) => {
      return {
        ...prev,
        imc,
      };
    });
  };

  const clear = () => {
    setData({});
    setError("");
  };

  const getImcStyle = (classification: ImcClassificationType) => {
    let bgColor = "";
    let textColor = "";

    if (classification === "Peso ideal") {
      bgColor = "bg-green-400/25";
      textColor = "text-green-600";
    } else if (classification === "Sobrepeso") {
      bgColor = "bg-yellow-400/25";
      textColor = "text-yellow-600";
    } else {
      bgColor = "bg-red-400/25";
      textColor = "text-red-600";
    }

    return (
      <View className="flex flex-row justify-center items-center">
        <View className="bg-white rounded-l-xl py-2 px-3">
          <Text className="text-zinc-500 text-2xl text-center border-zinc-200">
            {data.imc?.value.toFixed(2)}
          </Text>
        </View>

        <View className={`${bgColor} rounded-r-xl py-2 px-3`}>
          <Text className={`${textColor} text-2xl text-center`}>
            {data.imc?.classification}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScreenContainer>
      <View className="mt-10 flex p-4 h-full">
        <View className="mb-10 flex-1">
          <Text className="text-xl text-center mb-5">Calcule seu IMC</Text>

          <View className="h-[200px]">
            <Input
              placeholder="Peso (Kg)"
              value={data.weight}
              onChangeText={(value) =>
                setData((prev) => {
                  return {
                    ...prev,
                    weight: value.replace(",", ".")
                  };
                })
              }
            />

            <Input
              placeholder="Altura (cm)"
              value={data.height}
              onChangeText={(value) =>
                setData((prev) => {
                  return {
                    ...prev,
                    height: value.replace(",", ".")
                  };
                })
              }
            />

            <Input
              placeholder="Idade"
              value={`${data.age || ""}`}
              onChangeText={(value) =>
                setData((prev) => {
                  return {
                    ...prev,
                    age: Number(value),
                  };
                })
              }
            />
          </View>

          {error ? (
            <Text className="text-base text-center text-red-500 mb-3">
              {error}
            </Text>
          ) : null}
        </View>

        {data.imc ? (
          <View className="flex-1 mx-10">
            <Text className="text-xl text-center mb-3">Seu IMC é:</Text>

            {getImcStyle(data.imc.classification!)}
          </View>
        ) : null}

        <View className="mb-10 flex flex-row justify-center">
          <View className="flex-1 mr-3">
            <Button onPress={clear} title="Limpar" mode="secundary" />
          </View>
          <View className="flex-1">
            <Button onPress={getImc} title="Calcular" />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default HomeScreen;
