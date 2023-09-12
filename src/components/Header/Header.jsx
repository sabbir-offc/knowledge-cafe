import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between mt-10 items-center p-2 border-b ">
      <h1 className="text-3xl text-center font-semibold text-white">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
