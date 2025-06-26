import MyProfile from "./MyProfile";
import MyTitle from "./MyTitle";

const ProfileContainer = () => {
  return (
    <div className="flex justify-evenly h-full">
      <MyProfile />
      <MyTitle />
    </div>
  );
};

export default ProfileContainer;
