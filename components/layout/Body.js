import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useMemo, useState } from "react";

export default function Body({ firstSection, secondSection, thirdSection }) {
  const ripHeight1 = 2;
  const ripHeight2 = 5;
  const ripRatio = 1920 / 259;

  const clipPathTop = `0px ${ripHeight1 / 2.3}rem, 50% ${
    ripHeight1 / 6
  }rem, 100% 0px`;
  const clipPathBottom = `100% calc(100% - ${
    ripHeight2 / 3.6
  }rem), 75%  calc(100% - ${ripHeight2 / 5}rem), 50% calc(100% - ${
    ripHeight2 / 3
  }rem), 45% calc(100% - ${ripHeight2 / 7}rem), 40% calc(100% - ${
    ripHeight2 / 11
  }rem), 0px 100%`;

  const [ripHeight, setRipHeight] = useState(0);

  useEffect(() => {
    function FindHeight() {
      setRipHeight(window.innerWidth / ripRatio);
    }
    FindHeight();
    window.addEventListener("resize", FindHeight);

    return () => {
      window.removeEventListener("resize", FindHeight);
    };
  }, []);

  const clipPath = useMemo(() => {
    return `0px ${ripHeight / 2.3}px, 50% ${ripHeight1 / 6}px, 100% 0px`;
  }, [ripHeight]);

  return (
    <>
      <div
        className={`bg-[#DF392E] relative pb-[${
          ripHeight1 / 1.5
        }rem] bg-bottom bg-cover bg-no-repeat`}
        style={{
          backgroundImage: "url('/background_filters/section1.png')",
          paddingBottom: `${ripHeight1 / 1.5}rem`,
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
          clipPath: `polygon(${clipPath}, ${clipPathBottom})`,
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
            top: `-${ripHeight1 / 1.5 + ripHeight2 / 1.5}rem`,
            backgroundImage: "url('/background_filters/section3.png')",
            paddingTop: `${ripHeight1 / 1.5 + ripHeight2 / 1.5}rem`,
          }}
        >
          <>
            <div
              className="absolute w-full top-0 z-[3]"
              style={{
                height: `${ripHeight2}rem`,
              }}
            >
              <Image
                src="/background_filters/ripped2.svg"
                fill={true}
                alt="rip"
                className="object-cover object-center"
              />
            </div>
            {thirdSection}
          </>
        </div>
      )}
      <Footer />
    </>
  );
}
