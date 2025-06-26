const Button = ({ selectedBtn, btnName, btnValue, handleClick }) => {
  return (
    <div>
      <button
        className={
          selectedBtn === btnName
            ? "bg-gradient-to-b px-2 py-1 rounded-lg cursor-pointer text-white  from-blue-500 font-bold"
            : "bg-gradient-to-r px-2 py-1 rounded-lg cursor-pointer text-white font-bold"
        }
        onClick={handleClick}
      >
        {btnValue}
      </button>
    </div>
  );
};

export default Button;
