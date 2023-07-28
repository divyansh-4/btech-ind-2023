import React, { useCallback, useState, useEffect, useMemo } from 'react';
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

  const buttonStyle = useMemo(
    () =>
      'text-white font-bold border-yellow border-2 px-10 sm:px-14 py-2 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-2xl',
    []
  );

  const buttonArr = useMemo(
    () => [
      {
        label: 'Day 1',
        path: '/schedule/path1.svg',
      },
      {
        label: 'Day 2',
        path: '/schedule/path2.svg',
      },
      {
        label: 'Day 3',
        path: '/schedule/path3.svg',
      },
      {
        label: 'Day 4',
        path: '/schedule/path4.svg',
      },
      {
        label: 'Day 5',
        path: '/schedule/path5.svg',
      },
    ],
    []
  );

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
              {buttonArr.map((button) => {
                return (
                  <button
                    key={button.path}
                    className={
                      activeRoadmap === button.path
                        ? 'text-white font-bold border-2 border-yellow bg-yellow px-10 sm:px-14 py-2 text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-2xl'
                        : buttonStyle
                    }
                    onClick={() => handleButtonClick(button.path)}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>
            <RoadMap imagePath={activeRoadmap} />
          </>
        }
      />
    </>
  );
};

export default SchedulePage;
