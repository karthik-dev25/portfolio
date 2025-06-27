import Skills from "../skills/Skills";
import MyProfile from "./MyProfile";
import MyTitle from "./MyTitle";

const ProfileContainer = () => {
  return (
    <div className="w-full flex justify-evenly h-full">
      <MyTitle />
      <MyProfile />
    </div>
  );
};

export default ProfileContainer;
