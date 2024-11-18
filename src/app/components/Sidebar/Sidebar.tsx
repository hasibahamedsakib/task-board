"use client";
import { useState } from "react";
import { AiOutlineBars, AiOutlineLogout } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FcHome, FcReading } from "react-icons/fc";

import Logo from "../../assets/logo.png";
import userAvatar from "../../assets/avatar.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosStarOutline } from "react-icons/io";

const Sidebar = () => {
  const [isActive, setActive] = useState(true);
  const navItems = [
    { name: "My Day", href: "/", icon: <FcReading className="w-5 h-5" /> },
    {
      name: "Important",
      href: "/",
      icon: <IoIosStarOutline className="w-5 h-5" />,
    },
    { name: "Planned", href: "/", icon: <FaUsers className="w-5 h-5" /> },
    {
      name: "Assigned To Me",
      href: "/",
      icon: <FaUsers className="w-5 h-5" />,
    },
  ];
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100  text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link href="/">
              <div className="flex items-center">
                <Image width={30} height={30} src={Logo} alt="Logo" />
                <h1 className="text-xl font-bold">
                  Task <span className="text-pink-500">Board</span>
                </h1>
              </div>
            </Link>
          </div>
        </div>

        <button
          onClick={() => setActive(!isActive)}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed   flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-left p-3 items-left ">
              <Link href="/">
                <div className="flex items-center">
                  <Image width={30} height={30} src={Logo} alt="Logo" />
                  <h1 className="text-xl font-bold">
                    Task <span className="text-pink-500">Board</span>
                  </h1>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Image
                width={100}
                height={100}
                src={userAvatar}
                className="w-24 h-24 rounded-full border-4 border-hotPink object-cover"
                alt="avatar"
              />
              <h4 className="mx-2 mt-2 text-xl font-medium text-gray-800  hover:underline">
                User
              </h4>
            </div>
          </div>

          {/* conditional Side NavBar   */}
          <div className="flex flex-col justify-between flex-1 mt-6 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-2 mt-2  transition-colors duration-300 transform space-x-3  font-semibold  hover:text-gray-700"
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="">
          <hr />
          <Link
            href="/"
            className={`flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`}
          >
            <FcHome className="w-5 h-5" />

            <span className="mx-4 font-medium">Home</span>
          </Link>
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300  hover:text-gray-700 transition-colors duration-300 transform group-hover:text-gray-700">
            <AiOutlineLogout className="w-6 h-6 " />

            <span className="mx-4 font-medium ">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
