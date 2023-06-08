import { FC } from "react";
import { LoggedInNavbar } from "../components/LoggedInNavbar";
import { Footer } from "../components/Footer";
import { PrimButton } from "../components/Button";
import { Input } from "../components/Input";

const ProfileUser: FC = () => {
  return (
    <div>
      <LoggedInNavbar imageSrc="" />
      <div className="text-@19345E text-4xl ml-36 mt-8">Profile</div>
      <div className="flex flex-row">
        <div>
          <div className="ml-36 mt-8">
            <img src="#" alt="profileImage" className="w-40 h-40" />
          </div>
          <div className="w-40 ml-28 mb-28">
            <PrimButton label="Change Image" />
          </div>
        </div>
        <div className="ml-96">
          <div>
            <div className="text-lg">Name</div>
            <div className="w-96 mb-4">
              <Input />
            </div>
          </div>
          <div>
            <div className="text-lg">Email</div>
            <div className="mb-4">
              <Input />
            </div>
          </div>
          <div className="w-40">
            <PrimButton label="Change Profile" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileUser;
