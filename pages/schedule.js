import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import SEO from '../components/common/SEO';
import Parallax from '../components/common/Parallax';
import RoadMap from '../components/svg/svg1'; // Make sure this import points to the correct path
import TitleCard from '../components/common/TitleCard';
import Body from '../components/layout/Body';

const SchedulePage = () => {
  const [activeRoadmap, setActiveRoadmap] = useState('/schedule/path1.svg');
  const [lastClickedButtonIndex, setLastClickedButtonIndex] = useState(0); // Initialize with the index of the first button (Day 1).

  const handleButtonClick = useCallback((roadmapImage, buttonIndex) => {
    setActiveRoadmap(roadmapImage);
    setLastClickedButtonIndex(buttonIndex);
  }, []);

  return (
    <>
      <SEO title='Schedule' />
      <Body
        firstSection={
          <>
            <div className='relative'>
              <Parallax className='absolute top-0 left-0 w-full h-full' factor={4}>
                <div
                  className='bg-repeat-y bg-top bg-cover md:bg-[length:100%] w-full h-full'
                  style={{
                    backgroundImage: "url('/Group 314.png')",
                  }}
                ></div>
              </Parallax>
              <div className='flex justify-center items-center h-screen'>
                <TitleCard
                  graphic={
                    <Image
                      className='object-contain object-bottom-right'
                      src='/2023_red.svg'
                      alt='2023'
                      fill={true}
                    />
                  }
                  graphic2={
                    <Image
                      className='object-contain object-bottom-left'
                      src='/jptr.svg'
                      alt='jupiter'
                      fill={true}
                    />
                  }
                  title='BTECH INDUCTION'
                  subtitle='SCHEDULE'
                  subtext='AUGUST 2 - 6'
                  variant={2}
                />
              </div>
            </div>
          </>
        }
        secondSection={
          <div>
            <div className='flex flex-wrap justify-center items-start z-10'>
              {/* Add buttons in the second section */}
              <button
                className={`w-full md:w-auto md:mx-10 mb-5  px-10 pb-2  rounded-xl text-white font-bold text-4xl bg-yellow-500 ${
                  lastClickedButtonIndex === 0 ? '' : 'bg-opacity-40 text-opacity-40'
                }`}
                onClick={() => handleButtonClick('/schedule/path1.svg',0)}
              >
                Day 1
              </button>
              <button
                className={`w-full md:w-auto md:mx-10 mb-5  px-10 pb-2  rounded-xl text-white font-bold text-4xl bg-yellow-500  ${
                  lastClickedButtonIndex === 1 ? '' : 'bg-opacity-40 text-opacity-40'
                }`}
                onClick={() => handleButtonClick('/schedule/path2.svg',1)}
              >
                Day 2
              </button>
              <button
                className={`w-full md:w-auto md:mx-10 mb-5  px-10 pb-2  rounded-xl text-white font-bold text-4xl bg-yellow-500 ${
                  lastClickedButtonIndex === 2 ? '' : 'bg-opacity-40 text-opacity-40 '
                }`}
                onClick={() => handleButtonClick('/schedule/path3.svg',2)}
              >
                Day 3
              </button>
              <button
                className={`w-full md:w-auto md:mx-10 mb-5  px-10 pb-2  rounded-xl text-white font-bold text-4xl bg-yellow-500 ${
                  lastClickedButtonIndex === 3 ? '' : 'bg-opacity-40 text-opacity-40'
                }`}
                onClick={() => handleButtonClick('/schedule/path4.svg',3)}
              >
                Day 4
              </button>
              <button
                className={`w-full md:w-auto md:mx-10 mb-5  px-10 pb-2  rounded-xl text-white font-bold text-4xl bg-yellow-500 ${
                  lastClickedButtonIndex === 4 ? '' : 'bg-opacity-40 text-opacity-40'
                }`}
                onClick={() => handleButtonClick('/schedule/path5.svg',4)}
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
