import TitleCard from '../components/common/TitleCard';
import WelcomeCard from '../components/index/WelcomeCard';
import SEO from '../components/common/SEO';
import Body from '../components/layout/Body';
import Image from 'next/image';
import Parallax from '../components/common/Parallax';
import KeynoteSec from '../components/Keynotesec';

export default function Home() {
  return (
    <>
      <SEO />
      <Body
        firstSection={
          <>
            <div className='relative'>
              <Parallax
                className='absolute top-0 left-0 w-full h-full'
                factor={4}
              >
                <div
                  className='bg-repeat-y bg-cover md:bg-[length:100%]   w-full h-full bg-top'
                  // className='bg-top bg-repeat-y bg-top bg-[length:100%] w-full h-full'
                  style={{
                    backgroundImage: "url('/stickerwall.png')",
                  }}
                ></div>
              </Parallax>
              <div className='flex justify-center items-center h-screen'>
                <TitleCard
                  graphic={
                    <Image
                      className='object-contain object-bottom-right'
                      src='/2023.svg'
                      alt='2023'
                      fill={true}
                    />
                  }
                  title={
                    <span>
                      INDUCTION<br></br>BTECH
                    </span>
                  }
                  subtext='AUGUST 2 - 6'
                  variant={1}
                />
              </div>
              <div className='flex justify-center items-center h-screen'>
                <WelcomeCard />
              </div>
            </div>
          </>
        }
        secondSection={
          <>
            <div className='relative h-fit top-[-40vh]  pt-[40vh]'>
              <Parallax
                className='absolute top-0 left-0 w-full h-full z-0 '
                factor={4}
              >
                <div
                  // className="bg-cover md:bg-[length:100%]  w-full h-full bg-top  bg-repeat-y "
                  className='bg-top bg-repeat-y bg-[length:100%] w-full h-full'
                  style={{
                    backgroundImage: "url('/stickerforkeynote.png') ",
                  }}
                ></div>
              </Parallax>
              <KeynoteSec />
            </div>
          </>
        }
        thirdSection={<div className='h-screen'></div>}
      />
    </>
  );
}
