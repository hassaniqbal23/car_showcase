export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: () => void;
  btnType?: "button" | "submit";
  icon?: string;
}

export interface SearchManufacturerProps {
  manufacturers: string;
  setManufacturers: (manufacturers: string) => void;
}
