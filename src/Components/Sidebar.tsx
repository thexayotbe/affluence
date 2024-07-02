"use client";
import React from "react";
import { sidebarData } from "../constants";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="w-[290px] h-[100vh] bg-black-1 flex flex-col  items-center py-20 sticky top-0 ">
      <div>
        <h3 className="text-3xl text-white font-code">Affluence</h3>
      </div>
      <ul className="mt-10 ">
        {sidebarData.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`flex gap-5 w-[200px] h-[48px] items-center p-5 cursor-pointer hover:gap-10 transition-all mb-5  rounded-md ${
              pathName === item.link && "bg-green-1"
            } `}
          >
            <img src={item.icon} alt="" width={24} height={24} />
            <h3 className="text-white font-sans"> {item.title}</h3>
          </Link>
        ))}
      </ul>

      <div className="mt-auto">
        <button className=" text-white font-sans flex gap-3 w-[224px] h-[48px] items-center p-5 cursor-pointer hover:gap-10 transition-all mb-5 bg-black-2 rounded-md">
          <img src="/logout.svg" alt="logout" width={24} height={24} />
          Logout
        </button>
        <div className="flex h-[124px] items-center gap-4 border-t-[1px] border-black-2 mt-[50px] cursor-pointer">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-white text-lg font-sans"> John Doe</h3>
            <p className="text-black-4 text-sm">View Profile</p>
          </div>
          <img src="/dots.svg" alt="" className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
