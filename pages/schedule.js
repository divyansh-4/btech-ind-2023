import React, { useCallback, useState } from "react";
import Image from "next/image";
import SEO from "../components/common/SEO";
import Parallax from "../components/common/Parallax";
import RoadMap from "../components/svg/svg1"; // Make sure this import points to the correct path
import TitleCard from "../components/common/TitleCard";
import Body from "../components/layout/Body";

const SchedulePage = () => {
  const [activeRoadmap, setActiveRoadmap] = useState("/schedule/path1.svg"); // Set the default active roadmap here

  const handleButtonClick = useCallback((roadmapImage) => {
    setActiveRoadmap(roadmapImage);
  }, []);

  return (
    <>
      <SEO title="Schedule" />
      <Body
        variant={2}
        firstSection={
          <>
            <div className="relative">
              <Parallax
                className="absolute top-0 left-0 w-full h-full"
                factor={4}
              >
                <div
                  className="bg-repeat-y bg-top bg-cover md:bg-[length:100%] w-full h-full"
                  style={{
                    backgroundImage: "url('/Group 314.png')",
                  }}
                ></div>
              </Parallax>
              <div className="flex justify-center items-center h-screen">
                <TitleCard
                  graphic={
                    <Image
                      className="mx-20 my-1 object-contain object-bottom-right"
                      src="/2023_red.svg"
                      alt="2023"
                      fill={true}
                    />
                  }
                  graphic2={
                    <Image
                      className="object-contain object-bottom-left"
                      src="/jptr.svg"
                      alt="jupiter"
                      fill={true}
                    />
                  }
                  title="BTECH INDUCTION"
                  subtitle="SCHEDULE"
                  subtext="AUGUST 2 - 6"
                  variant={2}
                />
              </div>
            </div>
          </>
        }
        secondSection={
          <div>
            <div className="flex justify-center items-start h-30">
              {/* Add buttons in the second section */}
              <button
                className=" px-20 py-20 bg-yellow-500 rounded text-white"
                onClick={() => handleButtonClick("/schedule/path1.svg")}
              >
                Day 1
              </button>
              <button
                className=" px-20 py-20 bg-yellow-500 rounded text-white"
                onClick={() => handleButtonClick("/schedule/path2.svg")}
              >
                Day 2
              </button>
              <button
                className=" px-20 py-20 bg-yellow-500 rounded text-white"
                onClick={() => handleButtonClick("/schedule/path3.svg")}
              >
                Day 3
              </button>
              <button
                className=" px-20 py-20 bg-yellow-500 rounded text-white"
                onClick={() => handleButtonClick("/schedule/path4.svg")}
              >
                Day 4
              </button>
              <button
                className=" px-20 py-20 bg-yellow-500 rounded text-white"
                onClick={() => handleButtonClick("/schedule/path5.svg")}
              >
                Day 5
              </button>
            </div>
            <RoadMap imagePath={activeRoadmap} />
          </div>
        }
      />
    </>
  );
};

export default SchedulePage;
