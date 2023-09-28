export type ImcClassificationType =
  | "Baixo peso"
  | "Peso ideal"
  | "Sobrepeso"
  | "Obesidade";

export interface ImcProps {
  value: number;
  classification?: ImcClassificationType;
}

export interface DataProps {
  weight?: string;
  height?: string;
  age?: number;
  imc?: ImcProps;
}
