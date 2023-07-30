import TitleCard from "../components/common/TitleCard";
import WelcomeCard from "../components/index/WelcomeCard";
import SEO from "../components/common/SEO";
import Body from "../components/layout/Body";
import Image from "next/image";
import Parallax from "../components/common/Parallax";
import KeynoteSec from "../components/KeynoteSec";
import Gallery from "../components/layout/Gallery";

export default function Home() {
  return (
    <>
      <SEO />
      <Body
        firstSection={
          <>
            <div className="relative">
              <Parallax
                className="absolute top-0 left-0 w-full h-full"
                factor={4}
              >
                <div
                  className="bg-repeat-y bg-[length:500%] md:bg-[length:100%] w-full h-full bg-top"
                  style={{
                    backgroundImage: "url('/stickerwall.png')",
                  }}
                />
              </Parallax>
              <div className="flex justify-center items-center h-screen">
                <TitleCard
                  graphic={
                    <Image
                      className="object-contain object-bottom-right"
                      src="/2023.svg"
                      alt="2023"
                      fill={true}
                    />
                  }
                  title={
                    <span>
                      INDUCTION<br></br>BTECH
                    </span>
                  }
                  subtext="AUGUST 2 - 6"
                  variant={1}
                />
              </div>
              <div className="flex justify-center items-center h-[120vh]">
                <WelcomeCard />
              </div>
            </div>
          </>
        }
        secondSection={
          <>
            <div className="relative h-fit ">
              <Parallax
                className="absolute top-0 left-0 w-full h-full z-0 "
                factor={4}
              >
                <div
                  className="bg-top bg-repeat-y bg-[length: 500%] md:bg-[length:100%]  w-full h-full top-[-40vh] absolute"
                  style={{
                    backgroundImage: "url('/Group 339.png') ",
                  }}
                ></div>
              </Parallax>
              <KeynoteSec />
            </div>
          </>
        }
        thirdSection={<Gallery />}
        fourthSection={
          <div className="h-screen overflow-y-hidden relative">
            <Parallax
              className="absolute w-full h-full top-0 left-0"
              factor={4}
            >
              <div
                className="bg-repeat-y bg-[length:500%] md:bg-[length:100%] w-full h-full bg-top"
                style={{
                  backgroundImage: "url('/stickerwall.png')",
                }}
              />
            </Parallax>
          </div>
        }
      />
    </>
  );
}
