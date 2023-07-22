import Image from 'next/image';

export default function WelcomeCard() {
  return (
    <div className='bg-[#252525] rounded-xl p-5 sm:p-10 w-11/12 sm:max-w-[70%] xl:pr-[30%] relative'>
      <div className='max-w-full xl:max-w-[80%]'>
        <div className='text-6xl md:text-7xl lg:text-8xl relative text-red font-bold leading-none w-fit'>
          WELCOME<br></br>TO
          <div className='absolute w-0 h-0 bottom-6 right-20 md:bottom-2 lg:bottom-[2rem] md:right-1 lg:right-[5rem] flex items-center justify-end'>
            <div className='md:h-[15rem] md:basis-[15rem] sm:basis-[9rem] sm:h-[9rem] basis-[7rem] h-[7rem] relative flex-shrink-[0] flex-grow-[0]'>
              <Image
                alt='iiitd-logo'
                src='/iiitd.png'
                fill={true}
                className='object-contain object-center'
              />
            </div>
          </div>
        </div>
        <div className='w-full xl:w-11/12 text-yellow mt-10 sm:mt-16 md:mt-20 text-center sm:text-left'>
          Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)
          was created by an act of Delhi legislature empowering it to carry out
          R&D, conduct educational programs, and grant degrees. The General
          Council is the apex body of the Institute, chaired by Honble Lt.
          Governor of Delhi and the Board of Governors is the policy and
          decision-making body of the Institute. The Senate is empowered to take
          all academic decisions.
        </div>
      </div>
      <div className='h-full w-full absolute bottom-0 right-[-40%] hidden xl:block'>
        <Image
          src='/building.png'
          fill={true}
          alt='building'
          className='object-contain object-left'
        />
      </div>
    </div>
  );
}
