const SkillsIcon = ({ icon, name, fill }) => {
  return (
    <div className="w-30 bg-blue-950 flex flex-col items-center p-4 text-white mx-4 rounded-lg hover:bg-gradient-to-b from-blue-500 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
      <img className="w-12 h-12" src={icon} alt={name} />
      <h1 className="text-md font-bold my-2">{name}</h1>
    </div>
  );
};

export default SkillsIcon;
