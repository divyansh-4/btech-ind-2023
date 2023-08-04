const TeamFlipcard = ({teamName, bg}) => {
    return (
    <div className="relative m-8">
        <div
          className="w-[50vh] h-[60vh] bg-neutral-800  rounded-[30px] shadow  bg-cover relative z-20"
          style={{
            backgroundImage: "url('/background_filters/teamCardBg.png') ",
          }}
        >
            <img src="/bubble.png" alt="" srcset="" className=' absolute top-[15%] w-full h-3/4' />
            <div className="absolute w-1/2 top-[40%] left-[25%]
            h-fit text-center ">
                <span className='font-bold text-3xl sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase'>{teamName}</span>
            </div>
          
        </div>
        <div
          className={` absolute w-[50vh] h-[60vh] ${bg}  rounded-[30px] bg-cover top-6 left-6 z-10 shadow`} 
        >
        </div>
    </div>
  )
}

export default TeamFlipcard;