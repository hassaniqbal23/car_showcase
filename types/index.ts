export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit";
  rightIcon?: string;
  textStyle?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturers: string) => void;
}

export interface CarProps {
  city_mpg: number;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
