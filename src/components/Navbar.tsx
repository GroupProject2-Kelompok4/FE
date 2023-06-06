import { FC } from "react";
import logo from "../assets/logo.png";

export const Navbar: FC = () => {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-@19345E text-xl py-5 dark:bg-@264653">
      <nav
        className="max-w-[85rem] flex w-full mx-auto px-4"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <a>
              <img src={logo} width={150} height={150} alt="" />
            </a>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="duration-300 basis-full grow "
        >
          <div className="flex  gap-4  flex-row items-center justify-end mt-0 pl-5">
            <div className="flex gap-5">
              <a>
                <button
                  id="button-update-users"
                  type="submit"
                  className="py-2 px-4 m-2 w-full justify-center items-center gap-2 rounded-md border text-lg bg-@EBF2FA text-@19345E font-bold shadow-sm align-middle hover:scale-105 focus:outline-none   transition-all text-md dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  Login
                </button>
              </a>
              <div></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
