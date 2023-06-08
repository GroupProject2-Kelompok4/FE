import { FC } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  onLogout?: React.MouseEventHandler;
}
export const Navbar: FC<Props> = ({ onLogout }) => {
  return (
    <header className="relative flex flex-wrap text-white sm:justify-start sm:flex-nowrap z-50 w-full bg-@primary text-xl py-5">
      <nav
        className="max-w-[85rem] flex w-full mx-auto px-4"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <a>
              <img src={logo} width={100} height={100} alt="" />
            </a>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="duration-300 basis-full grow "
        >
          <div className="flex  gap-4  flex-row items-center justify-end mt-0 pl-5">
            <div className="flex gap-1">
              <Link to={"/userlist"}>User</Link>
            </div>
            <div className="flex gap-1">
              <Link to={"/classlist"}>Class</Link>
            </div>
            <div className="flex gap-1">
              <Link to={"/menteelist"}>Mentee</Link>
            </div>
            <button
              onClick={onLogout}
              className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 bg-white"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
