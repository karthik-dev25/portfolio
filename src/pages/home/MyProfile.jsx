import React from "react";
import { MY_PROFILE } from "../../utility/constants";

const MyProfile = () => {
  return (
    <div className="flex flex-col justify-center mt-20">
      <img
      className="rounded-2xl w-72"
        src={MY_PROFILE}
        alt="my-profile"
      />
    </div>
  );
};

export default MyProfile;
