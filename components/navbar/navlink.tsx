"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Image from "next/image";
import cslx from "clsx";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const navlink = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2">
<div className="relative hidden md:flex items-center gap-2 text-sm text-gray-800">
  <button
    onClick={() => setShowDropdown(!showDropdown)}
    className="flex items-center gap-2  rounded-full px-2 py-1 focus:ring-4 focus:ring-gray-300 cursor-pointer"
  >
    <Image
      className="size-8 rounded-full"
      alt="avatar"
      src={session?.user?.image || "/avatar.svg"}
      width={32}
      height={32}
    />
    <span>{session.user.name}</span>
  </button>

  {showDropdown && (
    <div className="absolute right-0 top-10 mt-2 w-48 bg-white border rounded shadow-lg z-50">
      <div className="px-4 py-2 text-sm text-gray-700">
        {session.user.name}
      </div>
      <hr />
      <Link
        href="/profile"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Profile
      </Link>
      <button
        onClick={() => signOut()}
        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
      >
        Sign Out
      </button>
    </div>
  )}
</div>


          {/* <div className="flex items-center"> 
            {session?.user?.name} */}
            {/* <button onClick={() => signOut()} className="md:block hidden py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
              Sign Out
            </button> */}
          {/* </div> */}
        </div>
      ) : null}

      <button
        onClick={() => setOpen(!open)}
        className=" inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden
        hover:bg-gray-100"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>
      <div
        className={cslx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul
          className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center
            md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <Link
              href="/"
              className=" block py-2 px-3 text-gray-800 md:hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className=" block py-2 px-3 text-gray-800 hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className=" block py-2 px-3 text-gray-800 hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className=" block py-2 px-3 text-gray-800 hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </Link>
          </li>

          {session && (
            <>
              <li>
                <Link
                  href="/myreservation"
                  className=" block py-2 px-3 text-gray-800 hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
                >
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className=" block py-2 px-3 text-gray-800 hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/room"
                      className=" block py-2 px-3 text-gray-800 hover:text-orange-400 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
                    >
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}

          {session ? (
            <li>
              <button
                onClick={() => signOut()}
                className="md:hidden py-2.5  text-gray-50 bg-red-400 hover:bg-red-600 rounded-sm"
              >
                Signout
              </button>
            </li>
          ) : (
            <li>
              <Link
                href="/signin"
                className=" block py-2 px-3 text-gray-50 bg-orange-400 hover:bg-orange-300 rounded-sm"
              >
                Signin
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default navlink;
