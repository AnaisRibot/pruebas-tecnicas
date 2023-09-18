import Image from "next/image";
import logo from "@public/logo.png";
import profile from "@public/profile.png";

const NavBar = () => {
  return (
    <div
      className="flex flex-row justify-between bg-black rounded-b-[20px] mb-8

    "
    >
      <Image
        src={logo}
        width={200}
        height={150}
        alt="Logo"
        className="py-1 ml-4"
      />
      <div className="flex flex-row items-center">
        <Image
          src={profile}
          width={80}
          height={80}
          alt="Logo"
          className="py-4"
        />
        <h2 className="text-white mx-4">Reader's Profile</h2>
      </div>
    </div>
  );
};

export default NavBar;
