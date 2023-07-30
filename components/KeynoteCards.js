export default function KeynoteCards({ name, desc, image, color, height }) {
  return (
    <div className='w-full relative mx-auto   basis-[80%] md:basis-[45%] lg:basis-[30%]'>
      <div className=' h-[35vh]    lg:h-[50vh] bg-neutral-800 rounded-[30px] relative z-20  pt-1 md:pt-3 lg:pt-4'>
        <div className=' bg-yellow rounded-[14px] border-2 border-black  min-w-[10%] my-4 py-1 px-1 mb-2 ml-4 mr-[30%]'>
          <div
            className='text-center text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl '
            style={{
              textShadow: '0 3px 4px rgba(0,0,0,0.25)',
            }}
          >
            {name}
          </div>
        </div>
        <div className='text-right text-amber-400 font-normal text-base leading-[3.5vh] md:text-lg lg:text-xl 2xl:text-3xl lg:leading-10 2xl:leading-[44px] absolute right-4 w-[45%] lg:w-[56%] mt-2 '>
          {desc}

        </div>
        <img src={image} className={`absolute bottom-0 left-0 ${height}  max-w-[75%]  lg:max-w-[100%] rounded-[30px] `} />
      </div>
      <div
        className={`w-full h-[35vh]   lg:h-[50vh] border-2 border-neutral-800 rounded-[30px] absolute top-4 left-4 md:top-6 md:left-6 ${color} z-10 shadow-2xl`}
      ></div>
    </div>
  );
}
