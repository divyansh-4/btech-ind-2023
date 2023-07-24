import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useMemo, useState } from "react";

export default function Body({ firstSection, secondSection, thirdSection }) {
  const ripRatio = useMemo(() => 1920 / 259, []);
  const [ripHeight, setRipHeight] = useState(0);

  useEffect(() => {
    function FindHeight() {
      setRipHeight((2 * window.innerWidth) / ripRatio);
    }
    FindHeight();
    window.addEventListener("resize", FindHeight);

    return () => {
      window.removeEventListener("resize", FindHeight);
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
          className={`bg-[#DF392E] relative bg-bottom bg-cover bg-no-repeat`}
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
          className="bg-[#32BD6C] relative z-[1] bg-bottom bg-cover bg-no-repeat"
          style={{
            top: `-${ripHeight / 1.5}px`,
            clipPath: `polygon(${clipPathTop}, ${clipPathBottom})`,
            backgroundImage: "url('/background_filters/section2.png')",
            paddingTop: `${ripHeight / 1.5}px`,
          }}
        >
          {secondSection}
        </div>
        {thirdSection && (
          <div
            className="bg-[#DF392E] relative bg-bottom bg-cover bg-no-repeat"
            style={{
              top: `-${ripHeight + 36}px`,
              backgroundImage: "url('/background_filters/section3.png')",
              paddingTop: `${ripHeight / 3}px`,
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
          className={`absolute w-full bg-background`}
          style={{ height: `${ripHeight + 36}px`, bottom: `0` }}
        ></div>
      </div>
      <Footer />
    </>
  );
}
