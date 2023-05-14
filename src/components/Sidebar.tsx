import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlinePersonalInjury } from "react-icons/md";
import {
  AiOutlineSafety,
  AiOutlineHome,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between ">
      <div className="flex flex-col items-center">
        <Link href="/">
          <div className="bg-indigo-700 text-white p-3 rounded-lg inline-block">
            <AiOutlineSafety className="w-5 h-5 cursor-pointer" />
          </div>
        </Link>
        <span className="w-full p-2"></span>
        <Link href="/">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer mt-5 p-3 rounded-lg inline-block">
            <AiOutlineHome className="w-5 h-5 cursor-pointer" />
          </div>
        </Link>
        <Link href="/accidents">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer mt-3 p-3 rounded-lg inline-block">
            <AiOutlineUnorderedList className="w-5 h-5 cursor-pointer" />
          </div>
        </Link>
        <Link href="/utilisateurs">
          <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer mt-3 p-3 rounded-lg inline-block">
            <HiOutlineUsers className="w-5 h-5 cursor-pointer" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
