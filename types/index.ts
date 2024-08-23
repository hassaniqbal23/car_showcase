export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit";
  icon?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturers: string) => void;
}

export interface CarProps {
  city_mpg: number; // Example: 23
  combination_mpg: number; // Example: 24
  cylinders: number; // Example: 4
  displacement: number; // Example: 1.6
  drive: string; // Example: "fwd" (front-wheel drive)
  fuel_type: string; // Example: "gas"
  highway_mpg: number; // Example: 26
  make: string; // Example: "toyota"
  model: string; // Example: "corolla"
  transmission: string; // Example: "a" (automatic)
  year: number; // Example: 1993
}
