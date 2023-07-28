import { Menu, Close } from "@mui/icons-material";
import Image from "next/image";
import React, { useMemo, useState, useRef, useEffect } from "react";
import MenuComponent from "../common/Menu";
import Link from "next/link";

function Header() {
  const iconStyle = useMemo(() => "w-4 sm:w-5 md:w-6 lg:w-7", []);
  const [menu, setMenuState] = useState(false);
  const headerRef = useRef(null);

  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    function calculateHeight() {
      if (!headerRef.current) return;
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      setMenuHeight(window.innerHeight - headerHeight);
    }

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <div className="w-full bg-white bg-opacity-10 sticky z-50" ref={headerRef}>
      <div className="flex items-center justify-between py-2 px-5 md:px-5 lg:px-10 pt-3 pb-3">
        {!menu ? (
          <Menu
            className={`text-white text-2xl md:text-3xl lg:text-4xl cursor-pointer`}
            onClick={() => {
              setMenuState(!menu);
            }}
          />
        ) : (
          <Close
            className={`text-white text-2xl md:text-3xl lg:text-4xl cursor-pointer`}
            onClick={() => {
              setMenuState(!menu);
            }}
          />
        )}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              width={125}
              height={125}
              src="/induction.svg"
              alt="IIITD Logo"
              className="w-20 sm:w-24 md:w-28 lg:w-32"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          {/* <Link href='/' className='text-white no-underline'>
            Home
          </Link>
          <Link href='/schedule' className='text-white no-underline'>
            Schedule
          </Link> */}
          <a
            href="https://instagram.com/sc.iiitd?igshid=MmU2YjMzNjRlOQ=="
            target="_blank"
          >
            <Image
              width={25}
              height={25}
              src="/icons/instagram.svg"
              alt="IIITD Logo"
              className={iconStyle}
            />
          </a>
          <a href="https://www.linkedin.com/school/iiit-delhi/" target="_blank">
            <Image
              width={25}
              height={25}
              src="/icons/linkedin.svg"
              alt="IIITD Logo"
              className={iconStyle}
            />
          </a>
          <a href="https://twitter.com/IIITDelhi" target="_blank">
            <Image
              width={25}
              height={25}
              src="/icons/twitter.svg"
              alt="IIITD Logo"
              className={iconStyle}
            />
          </a>
        </div>
      </div>
      <div className="absolute top-[100%] left-0">
        <div
          className={`relative duration-100 transition-all ${
            menu ? "left-0" : "left-[-100%]"
          }`}
          style={{ height: `${menuHeight}px` }}
        >
          <MenuComponent />
        </div>
      </div>
    </div>
  );
}

export default Header;
