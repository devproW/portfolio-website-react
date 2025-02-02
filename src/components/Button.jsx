function Button({
  label,
  borderColor,
  backgroundColor,
  textColor,
  adjustWidth,
  hoverBgColor,
  hoverTextColor,
  buttontype,
  resumeLink,
}) {
  return (
    <button
      onClick={resumeLink}
      type={buttontype}
      className={`flex justify-center items-center font-poppins border h-16 font-medium leading-none text-xl rounded-md 
      transition-colors duration-300 tracking-wide w-full ${backgroundColor}  ${borderColor} ${textColor} ${hoverBgColor} 
      ${hoverTextColor} ${adjustWidth}`}
    >
      {label}
    </button>
  );
}

export default Button;
