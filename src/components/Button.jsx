function Button({
  label,
  borderColor,
  backgroundColor,
  textColor,
  adjustWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center font-poppins border h-16 font-medium
    leading-none text-xl rounded-md transition-colors duration-300 tracking-wide ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor} hover:bg-orange-400 hover:text-white`
        : `bg-orange-400 text-white ${
            borderColor ? borderColor : "border-slate-gray"
          }  hover:bg-transparent hover:text-orange-400`
    } ${adjustWidth ? "w-2/6" : "w-3/6"}`}
    >
      {label}
    </button>
  );
}

export default Button;
