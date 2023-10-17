"use client"
import React, { useState } from "react";
import NavTile from "./NavTile";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu, BiTask, BsCalendarCheck, CgProfile, MdOutlineAnalytics,MdOutlineIntegrationInstructions, MdOutlineLogout, MdOutlineMoreHoriz, MdOutlineSettings, m } from "@/utility/Icons";

function Navbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200" >
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              EffiDo
            </h1>
            {/* Basic Requirements */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <NavTile icon={<BiTask />} title='Tasks'/>
              <NavTile icon={<BsCalendarCheck />} title='Calendar'/>
              <NavTile icon={<MdOutlineAnalytics />} title='Analytics'/>
              <NavTile icon={<CgProfile />} title='Profile'/>
              <NavTile icon={<MdOutlineIntegrationInstructions />} title='Categories'/>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <NavTile icon={<MdOutlineSettings />} title='Settings'/>
              <NavTile icon={<MdOutlineMoreHoriz />} title='More'/>
            </div>
            {/* logout */}
            <div className=" my-4">
              <NavTile icon={<MdOutlineLogout />} title='Logout'/>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default Navbar