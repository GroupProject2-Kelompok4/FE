import { FC } from "react";

interface ProfileProps {
  id: string;
  fullName: string;
  classes: string;
  prevSchool: string;
  phoneNum: number;
  telegram: string;
  discord: string;
  email: string;
}
const Profile: FC<ProfileProps> = (props) => {
  const {
    id,
    fullName,
    classes,
    prevSchool,
    phoneNum,
    telegram,
    discord,
    email,
  } = props;

  return (
    <div className="flex flex-row gap-32" id={id}>
      <div className="my-8 ml-8">
        <p className="text-4xl">{fullName}</p>
        <p>{classes}</p>
        <p>{prevSchool}</p>
      </div>
      <div className="mt-10">
        <p>Phone : {phoneNum}</p>
        <p>Telegram: {telegram}</p>
        <p>Discord: {discord}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default Profile;
