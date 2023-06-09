import { FC, useCallback, useState } from "react";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";
import { logout } from "../store/features/userSlice";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  imageSrc: string;
}
export const LoggedInNavbar: FC<NavbarProps> = ({ imageSrc }) => {
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const handlePictureClick = () => {
    setDropDownOpen(!dropdownOpen);
  };

  const handleLogout = useCallback(() => {
    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(logout());
        removeCookie("userToken");
        navigate("/");
      }
    });
  }, []);

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-@primary text-xl py-5 dark:bg-@264653">
      <nav
        className="max-w-[85rem] flex w-full mx-auto px-4"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Link to={"/dashboard"}>
              <img src={logo} width={150} height={150} />
            </Link>
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
              <Link to={"/userlist"} className="text-@EBF2FA">
                Users
              </Link>
            </li>
            <li>
              <Link to={"/menteelist"} className="text-@EBF2FA">
                Mentees
              </Link>
            </li>
            <li>
              <Link to={"/classlist"} className="text-@EBF2FA">
                Classes
              </Link>
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
                      <Link
                        to={"/profile"}
                        className="block px-4 py-2 text-@19345E  dark:text-white hover:bg-white dark:hover:bg-gray-700"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 text-@19345E dark:text-white hover:bg-white dark:hover:bg-gray-700"
                        onClick={handleLogout}
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
function dispatch(_arg0: any) {
  throw new Error("Function not implemented.");
}

function removeCookie(_arg0: string) {
  throw new Error("Function not implemented.");
}
