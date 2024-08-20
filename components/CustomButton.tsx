import React from "react";
import { CustomButtonProps } from "@/types";
function CustomButton({
  title,
  containerStyle,
  handleClick,
  icon,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
