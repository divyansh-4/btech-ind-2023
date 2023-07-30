import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useMemo, useState } from "react";
import { MarginTwoTone } from "@mui/icons-material";

export default function Body({
  firstSection,
  secondSection,
  thirdSection,
  variant = 1,
}) {
  const [ripHeight, setRipHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    function calculateRipHeight() {
      const screenWidth = window.innerWidth;
      let ripRatio = 13.6; 
      if (screenWidth < 768) {
        ripRatio = 9.6; 
      } else if (screenWidth >= 1200) {
        ripRatio = 16;
      }
      setRipHeight((2 * screenWidth) / ripRatio);

      setScreenWidth(screenWidth);
    }

    calculateRipHeight();
    window.addEventListener("resize", calculateRipHeight);

    return () => {
      window.removeEventListener("resize", calculateRipHeight);
    };
  }, []);

  const clipPathTop = useMemo(() => {
    return `0px ${ripHeight / 2.3}px, 50% ${ripHeight / 6.5}px, 100% 0px`;
  }, [ripHeight]);

  const clipPathBottom = useMemo(() => {
    return `100% calc(100% - ${ripHeight / 3}px), 50% calc(100% - ${
      ripHeight / 6.5
    }px), 0px 100%`;
  }, [ripHeight]);

  return (
    <>
      <div className="relative">
        <div
          className={`${
            variant === 1 ? "bg-[#DF392E]" : "bg-yellow"
          } relative bg-bottom bg-cover bg-no-repeat`}
          style={{
            backgroundImage: "url('/background_filters/section1.png')",
            paddingBottom: `${ripHeight / 1.5}px`,
          }}
        >
          <Header />
          {firstSection}
          <div
            className={`absolute w-full h-[${ripHeight}px] bottom-0 left-0 z-[2]`}
            style={{ height: `${ripHeight}px` }}
          >
            <Image
              src="/background_filters/ripped1.svg"
              fill={true}
              alt="rip"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div
          className={`${
            variant === 1 ? "bg-[#32BD6C]" : "bg-purple9"
          } relative z-[1] bg-bottom bg-cover bg-no-repeat`}
          style={{
            top: `-${ripHeight / 1.5}px`,
            clipPath: `polygon(${clipPathTop}, ${clipPathBottom})`,
            backgroundImage: "url('/background_filters/section2.png')",
            paddingTop: `${ripHeight / 1.5}px`,
            paddingBottom: `${ripHeight}px`,
          }}
        >
          {secondSection}
        </div>
        {thirdSection && (
          <div
            className="bg-[#DF392E] relative bg-bottom bg-cover bg-no-repeat"
            style={{
              top: `-${ripHeight}px`,
              backgroundImage: "url('/background_filters/section3.png')",
              paddingTop: `${ripHeight / 3}px`,
              paddingBottom: `${screenWidth < 768 ? ripHeight * 5 : ripHeight/2}px`,
            }}
          >
            <div
              className="absolute w-full z-[3]"
              style={{
                height: `${ripHeight}px`,
                top: `-${ripHeight / 3}px`,
              }}
            >
              <Image
                src="/background_filters/ripped1.svg"
                fill={true}
                alt="rip"
                className="object-cover object-center"
              />
            </div>
            {thirdSection}
          </div>
        )}
        <div
          className={`absolute w-full bg-background z-[5]`}
          style={{ 
            marginTop: `-${ripHeight}px`, 
            bottom: `0`,
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
