import Header from "./Header";
import Footer from "./Footer";

import { useEffect, useMemo, useState } from "react";

export default function Body({
  firstSection,
  secondSection,
  thirdSection,
  variant = 1,
}) {
  const ripRatio = useMemo(() => 1920 / 259, []);
  const [ripHeight, setRipHeight] = useState(0);
  const [ripHeight2, setRipHeight2] = useState(0);

  useEffect(() => {
    function FindHeight() {
      setRipHeight((0.001 * window.innerWidth) / ripRatio);
      setRipHeight2((window.innerWidth) / ripRatio);
    }
    FindHeight();
    window.addEventListener("resize", FindHeight);

    return () => {
      window.removeEventListener("resize", FindHeight);
    };
  }, []);

  const clipPathTop = useMemo(() => {
    return `0px ${ripHeight2 / 5}px, 25% ${ripHeight2 / 10}px, 100% 0px`;
  }, [ripHeight2]);

  return (
    <>
      <div className="relative">
        <div
          className={`${
            variant === 1 ? "bg-[#DF392E]" : "bg-yellow"
          } relative bg-bottom bg-cover bg-no-repeat`}
          style={{
            backgroundImage: "url('/background_filters/section1.png')",
            paddingBottom: `${ripHeight2 / 1.5}px`,
          }}
        >
          <Header />
          {firstSection}
          <div
            className={`absolute w-full h-[${ripHeight}px] bottom-0 left-0 z-[2]`}
            style={{ 
              height: `${ripHeight2/1.5}px`}}
          > 
          <div
            style={{
              width: "100%",
              height: "220px",
              backgroundImage: `url('/background_filters/ripped1.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: `-${ripHeight2/18}px`, 
            }}
          />
          </div>
        </div>
        <div
          className={`${
            variant === 1 ? "bg-[#32BD6C]" : "bg-purple9"
          } relative z-[1] bg-bottom bg-cover bg-no-repeat`}
          style={{
            top: `-${ripHeight / 1.5}px`,
            clipPath: `polygon(${clipPathTop}, 100% 100%, 0px 100%)`,
            backgroundImage: "url('/background_filters/section2.png')",
            paddingTop: `${ripHeight2 / 4}px`,
            paddingBottom: `${ripHeight}px`,
            marginTop: `-25px`,
          }}
        >
          {secondSection}
        </div>
        {thirdSection && (
          <>
          <div
            className={`absolute w-full h-[${ripHeight}px] bottom-0 left-0 z-[4]`}
            style={{ 
              height: `${ripHeight2/1.5}px`, 
            }}
          > 
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundImage: `url('/background_filters/ripped1.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: `-${ripHeight2 * 4.8}px`,
            }}
          />
          </div>
          <div
            className="bg-[#DF392E] z-[3] relative bg-bottom bg-cover bg-no-repeat"
            style={{
              top: `-${ripHeight}px`,
              backgroundImage: "url('/background_filters/section3.png')",
              clipPath: `polygon(${clipPathTop}, 100% 100%, 0px 100%)`,
              paddingTop: `${ripHeight / 3}px`,
              marginTop: `-24px`,
            }}
          >            
          {thirdSection}
          </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
