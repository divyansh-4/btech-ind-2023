import React, { useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import SEO from '../components/common/SEO';
import Parallax from '../components/common/Parallax';
import RoadMap from '../components/svg/svg1';
import TitleCard from '../components/common/TitleCard';
import Body from '../components/layout/Body';

const SchedulePage = () => {
  const [activeRoadmap, setActiveRoadmap] = useState('/schedule/path1.svg');
  const [breakWord, setBreakWord] = useState(false);

  useEffect(() => {
    function FindBreak() {
      setBreakWord(window.innerWidth < 720);
    }
    FindBreak();

    window.addEventListener('resize', FindBreak);
    return () => {
      window.removeEventListener('resize', FindBreak);
    };
  }, []);

  const handleButtonClick = useCallback((roadmapImage) => {
    setActiveRoadmap(roadmapImage);
  }, []);

  const buttonStyle =
    'text-white font-bold bg-yellow px-10 py-2 text-lg sm:text-xl md:text-2xl lg:text-4xl rounded-2xl';

  return (
    <>
      <SEO title='Schedule | IIITD Induction 2023' />
      <Body
        variant={2}
        firstSection={
          <>
            <div className='relative'>
              <Parallax
                className='absolute top-0 left-0 w-full h-full'
                factor={4}
              >
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
                    <div className='relative w-3/4 h-3/4 md:w-full md:h-full sm:-right-20 md:bottom-0 -bottom-10'>
                      <Image
                        className='object-contain object-bottom-right'
                        src='/2023_red.svg'
                        alt='2023'
                        fill={true}
                      />
                    </div>
                  }
                  graphic2={
                    <Image
                      className='object-contain object-bottom-left'
                      src='/jptr.svg'
                      alt='jupiter'
                      fill={true}
                    />
                  }
                  title={
                    !breakWord ? (
                      'BTECH INDUCTION'
                    ) : (
                      <span>
                        BTECH<br></br>INDUCTION
                      </span>
                    )
                  }
                  subtitle='SCHEDULE'
                  subtext='AUGUST 2 - 6'
                  variant={2}
                />
              </div>
            </div>
          </>
        }
        secondSection={
          <>
            <div className='flex flex-wrap justify-center items-start gap-10'>
              <button
                className={buttonStyle}
                onClick={() => handleButtonClick('/schedule/path1.svg')}
              >
                Day 1
              </button>
              <button
                className={buttonStyle}
                onClick={() => handleButtonClick('/schedule/path2.svg')}
              >
                Day 2
              </button>
              <button
                className={buttonStyle}
                onClick={() => handleButtonClick('/schedule/path3.svg')}
              >
                Day 3
              </button>
              <button
                className={buttonStyle}
                onClick={() => handleButtonClick('/schedule/path4.svg')}
              >
                Day 4
              </button>
              <button
                className={buttonStyle}
                onClick={() => handleButtonClick('/schedule/path5.svg')}
              >
                Day 5
              </button>
            </div>
            <RoadMap imagePath={activeRoadmap} />
          </>
        }
      />
    </>
  );
};

export default SchedulePage;
