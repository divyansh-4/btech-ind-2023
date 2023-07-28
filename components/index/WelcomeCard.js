import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function WelcomeCard() {
  const [textWidth, setTextWidth] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    function FindWidth() {
      if (!headerRef.current) return;
      let width = headerRef.current.getBoundingClientRect().width;
      setTextWidth(width * (window.innerWidth >= 1280 ? 0.8 : 1));
    }

    FindWidth();
    window.addEventListener("resize", FindWidth);

    return () => {
      window.removeEventListener("resize", FindWidth);
    };
  }, []);

  return (
    <div className="bg-background rounded-xl xl:pr-[30vw] pr-5 pt-5 pb-5 pl-5 relative">
      <div className="flex flex-col items-start">
        <div
          className="text-6xl md:text-7xl lg:text-8xl relative text-red font-bold leading-none"
          ref={headerRef}
        >
          WELCOME<br></br>TO
          <div className="absolute w-0 h-0 bottom-6 right-20 md:bottom-2 lg:bottom-[2rem] md:right-1 lg:right-[5rem] flex items-center justify-end">
            <div className="md:h-[15rem] md:basis-[15rem] sm:basis-[9rem] sm:h-[9rem] basis-[8rem] h-[8rem] relative flex-shrink-[0] flex-grow-[0]">
              <Image
                alt="iiitd-logo"
                src="/iiitd.png"
                fill={true}
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
        <div
          className="text-yellow mt-10 sm:mt-16 md:mt-20 sm:text-center xl:text-left"
          style={{ width: `${textWidth}px` }}
        >
          Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)
          was created by an act of Delhi legislature empowering it to carry out
          R&D, conduct educational programs, and grant degrees. The General
          Council is the apex body of the Institute, chaired by Honble Lt.
          Governor of Delhi and the Board of Governors is the policy and
          decision-making body of the Institute. The Senate is empowered to take
          all academic decisions.
        </div>
      </div>
      <div
        className="h-[80%] 2xl:h-[110%] w-full absolute bottom-0 hidden xl:block"
        style={{ left: `${textWidth * 0.9}px` }}
      >
        <Image
          src="/building.png"
          fill={true}
          alt="building"
          className="object-contain object-left"
        />
      </div>
    </div>
  );
}
