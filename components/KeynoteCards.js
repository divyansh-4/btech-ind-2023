import Image from 'next/image'

export default function KeynoteCards({ name, desc ,image ,color }) {
  return (
    <div className='w-[87%] relative mx-auto'>

      <div className=" h-[35vh]  md:h-[40vh]  lg:h-[50vh] bg-neutral-800 rounded-[30px] relative z-20  pt-1 md:pt-3 lg:pt-4">
        {/* <div className="h-[260px] sm:h-[270px] lg:h-[20vw] bg-neutral-800 rounded-[30px] relative z-20 pt-4"> */}

        <div className='bg-yellow rounded-[14px] border-2 border-black w-[70%] 2xl:w-[60%] m-4 py-1 px-1 mb-2'>
          <div className='text-center text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl ' style={{
          textShadow: '0 3px 4px rgba(0,0,0,0.25)',
        }}>
          {name}
            
          </div>
        </div>
        <div className='text-right text-amber-400 font-normal text-[14px] leading-[3.5vh] md:text-[18px] lg:text-[20px] 2xl:text-3xl lg:leading-10 2xl:leading-[44px] absolute right-6 w-[40%] lg:w-[55%] mt-2'>
          {desc}
        </div>
        <img src={image} className='absolute bottom-0 left-0 h-[90%]' />
      </div>
      <div className={`w-full h-[35vh]  md:h-[40vh] lg:h-[50vh] border-2 border-neutral-800 rounded-[30px] absolute top-6 left-6 bg-${color} z-10`}>
        {/* <div className='w-full h-[260px] sm:h-[270px] lg:h-[20vw] border-2 border-neutral-800 rounded-[30px] absolute top-9 left-8 bg-amber-400 z-10'> */}
      </div>
    </div>
  )
}
