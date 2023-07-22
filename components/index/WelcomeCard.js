import Image from 'next/image';

export default function WelcomeCard() {
  return (
    <div className='bg-[#252525] rounded md:p-[3rem] p-[2rem] max-w-[70%] h-3/5 xl:pr-[30%] relative'>
      <div className='max-w-[100%] xl:max-w-[80%]'>
        <div className='lg:text-[5rem] md:text-[4rem] sm:text-[3.5rem] text-[2.5rem] relative text-red font-bold leading-none w-fit'>
          WELCOME<br></br>TO
          <div className='absolute w-0 h-0 bottom-[1rem] right-[0rem] flex items-center justify-end'>
            <div className='md:h-[15rem] md:basis-[15rem] sm:basis-[9rem] sm:h-[9rem] basis-[7rem] h-[7rem] relative flex-shrink-[0] flex-grow-[0]'>
              <Image
                alt='building'
                src='/iiitd.png'
                fill={true}
                className='object-contain object-center'
              />
            </div>
          </div>
        </div>
        <div className='w-[100%] xl:w-[90%] text-[#FAC018] mt-[4rem] text-center sm:text-left'>
          Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)
          was created by an act of Delhi legislature empowering it to carry out
          R&D, conduct educational programs, and grant degrees. The General
          Council is the apex body of the Institute, chaired by Honble Lt.
          Governor of Delhi and the Board of Governors is the policy and
          decision-making body of the Institute. The Senate is empowered to take
          all academic decisions.
        </div>
      </div>
      <div className='h-[100%] w-[100%] absolute bottom-0 right-[-40%] hidden xl:block'>
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
