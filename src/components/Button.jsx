function Button({
  label,
  borderColor,
  backgroundColor,
  textColor,
  adjustWidth,
  hoverBgColor,
  hoverTextColor,
}) {
  return (
    <button
      className={`flex justify-center items-center font-poppins border h-16 font-medium leading-none text-xl rounded-md 
      transition-colors duration-300 tracking-wide ${backgroundColor}  ${borderColor} ${textColor} ${hoverBgColor} 
      ${hoverTextColor} ${adjustWidth}`}
    >
      {label}
    </button>
  );
}

export default Button;
