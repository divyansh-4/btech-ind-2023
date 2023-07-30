
export default function TeamFlipcard({teamName, bg}) {
  return (
    <div className="relative  m-10">
        <div
          className="w-[340px] h-[490px] bg-neutral-800  rounded-[30px] shadow  bg-cover relative z-20"
          style={{
            backgroundImage: "url('/background_filters/teamCardBg.png') ",
          }}
        >
            <img src="/bubble.png" alt="" srcset="" className=' absolute top-20 w-full h-3/4' />
            <div className="absolute w-1/2 top-[42%] left-[27%]
            h-fit text-center ">
                <span className='font-bold text-3xl uppercase'>{teamName}</span>
            </div>
          
        </div>
        <div
          className={` absolute w-[340px] h-[490px] ${bg}  rounded-[30px] bg-cover top-6 left-6 z-10 shadow`}
          
        >
          
        </div>

        </div>
  )
}
