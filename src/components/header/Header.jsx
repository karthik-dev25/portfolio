import { useState } from "react";
import Button from "../button/Button";
import { buttonText } from "../../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeHeaderButtons } from "../../store/configSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const buttonState = useSelector((store) => store.config.headerButton);

  const handleButtonClick = (e) => {
    dispatch(changeHeaderButtons(e));
  };

  return (
    <div className="w-full p-2 m-2 fixed z-1">
      <div className="w-[40%] mx-auto flex text-black justify-between backdrop-blur-sm bg-blue-950 p-2 rounded-lg">
        {buttonText.map((btn) => (
          <Button
            selectedBtn={buttonState}
            key={btn.name}
            btnName={btn.name}
            btnValue={btn.value}
            handleClick={() => handleButtonClick(btn.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
