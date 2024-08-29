import React from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
function CustomButton({
  title,
  containerStyle,
  handleClick,
  btnType,
  textStyle,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      <div>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="icon" className="object-contain" fill />
          </div>
        )}
      </div>
    </button>
  );
}

export default CustomButton;
