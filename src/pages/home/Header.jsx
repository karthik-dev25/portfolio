import { useState } from "react";
import Button from "../../components/button/Button";
import { buttonText } from "../../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { changeHeaderButtons } from "../../store/configSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const buttonState = useSelector((store) => store.config.headerButton);

  const handleButtonClick = (e) => {
    dispatch(changeHeaderButtons(e));
    if(e === "home") navigate("/")
    else navigate("/" + e);
  };

  return (
    <div className="p-2 m-2 ">
      <div className="w-[40%] mx-auto flex justify-between bg-black p-2 rounded-lg">
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
