import React, { useState } from "react";
import Image from "next/image";
import { BsLightning } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState("");
  const [showDropDown, setShowDropDown] = useState(null);

  const handleDropDownClick = () => {
    setShowDropDown(!showDropDown);
  };
  const router = useRouter();
  console.log(router);
  return (
    <div className="relative h-full">
      <div className="bg-white h-full flex full justify-center px-8">
        <div className="sticky top-0 h-100vh">
          <div>
            <Link href={"/dashboard"}>
              <div className="pt-10 mb-10">
                <Image
                  src="logo.svg"
                  alt="Logo"
                  width={300}
                  height={300}
                  className="max-w-[190px]"
                />
              </div>
            </Link>
            <div>
              {navItems.map((item, index) => {
                return (
                  <div key={index} className="py-1 w-full">
                    <Link href={item.url} passHref>
                      <button
                        className={`${router.pathname === item.url
                          ? "login-btn text-white "
                          : "text-[#445C6D]"
                          } rounded-xl min-w-[234px] flex py-[18px] pl-5 cursor-pointer w-full text-center items-center gap-2 hover:shadow duration-200 font-medium `}
                      >
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div>
              <div>
                <div
                  className={`thomas-bg max-w-[230px] mx-auto absolute bottom-4 flex justify-between items-center w-full gap-2 py-2 px-3 cursor-pointer  text-[#445C6D] ${showDropDown ? "rounded-b-2xl" : "rounded-2xl"
                    }`}
                  onClick={() => handleDropDownClick()}
                >
                  <div>
                    <Image src="thomas.svg" alt="thomas" width={40} height={0} />
                  </div>
                  <div>
                    <h6 className="text-[16px] leading-3 pt-2 pb-1">Thomas M.</h6>
                    <span className="text-sm">@ thomas</span>
                  </div>
                  <span className="text-4xl">
                    <IoMdArrowDropdown
                      className={`${showDropDown ? "rotate" : "rotate2"}`}
                    />
                  </span>
                </div>
                <div >
                  {showDropDown && (
                    <div className="bg-bgprimary absolute bottom-[81px] left-1/2 transform -translate-x-1/2  w-[230px] rounded-t-2xl transition-all duration-1000">
                      <ul className="py-2">
                        <li
                          className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? "text-[#445C6D]" : ""
                            }`}
                        >
                          <a className="block" href="#">
                            Profile
                          </a>
                        </li>
                        <li
                          className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? "text-[#445C6D]" : ""
                            }`}
                        >
                          <a className="block" href="#">
                            Log In
                          </a>
                        </li>{" "}
                        <li
                          className={`px-4 py-2 hover:bg-gray-100 ${showDropDown ? "text-[#445C6D]" : ""
                            }`}
                        >
                          <a className="block" href="#">
                            Sign Up
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const navItems = [
  {
    icon: <MdOutlineDashboardCustomize />,
    text: "Dashboard",
    url: "/dashboard",
  },
  {
    icon: <BsLightning />,
    text: "Auto - Tweet",
    url: "/auto-tweet",
  },
  {
    icon: <IoCalendarOutline />,
    text: "Scheduler",
    url: "/schedular",
  },
];
