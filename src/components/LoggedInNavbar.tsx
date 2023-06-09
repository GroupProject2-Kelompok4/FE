import { FC, useState } from "react";
import logo from "../assets/logo.png";

interface NavbarProps {
  imageSrc: string;
}
export const LoggedInNavbar: FC<NavbarProps> = ({imageSrc}) => {
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const handlePictureClick = () => {
    setDropDownOpen(!dropdownOpen);
  };

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
          <ul
            className="flex flex-row item-center gap-5 justify-end text-white mt-5"
            id="menu"
          >
            <li>
              <a href="#" className="text-@EBF2FA">
                Users
              </a>
            </li>
            <li>
              <a href="#" className="text-@EBF2FA">
                Mentees
              </a>
            </li>
            <li>
              <a href="#" className="text-@EBF2FA">
                Classes
              </a>
            </li>
            <li className="relative" id="nav-profile-picture">
              <div onClick={handlePictureClick}>
                <img
                  src={imageSrc}
                  alt="profile-picture"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu absolute right-0 mt-2 bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-@19345E  dark:text-white hover:bg-white dark:hover:bg-gray-700"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-@19345E dark:text-white hover:bg-white dark:hover:bg-gray-700"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
