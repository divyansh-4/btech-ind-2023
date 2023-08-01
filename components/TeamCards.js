export default function TeamCards({ bg, teamName, teamMembers }) {
  return (
      <div
        className="w-[70vh] h-[90vh] bg-neutral-800  rounded-[30px] shadow  relative "
        style={{
          backgroundImage: "url('/background_filters/teamCardBg.png') ",
        }}
      >
        <div className=" p-8">
          <div
            className={`Team w-full ${bg} text-center text-black text-3xl font-bold rounded-xl p-2 uppercase `}
            style={{
              backgroundImage: "url('/background_filters/teamCardBg.png') ",
            }}
          >
            {teamName}
          </div>

          <div
            className={`w-full h-[50vh] images flex flex-wrap justify-evenly p-4  ${bg} gap-y-4 gap-x-3 mx-auto mt-2  rounded-xl`}
            style={{
              backgroundImage: "url('/background_filters/teamCardBg.png') ",
            }}
          >
            {teamMembers.map((member, index) => { 
              return (
                <div className="bg-zinc-300 rounded-3xl w-[25%] h-[20%]">
                  <img src={`/members/${member}.png`}  key = {index} alt="" sizes=""   className=""/>
                </div>
              );
            })}
          </div>

          <div
            className={`Names text-center w-full [h-30%] ${bg} rounded-xl flex flex-wrap mt-2 text-black text-base sm:text-lg font-bold py-2 px-4 gap-x-1`}
            style={{
              backgroundImage: "url('/background_filters/teamCardBg.png') ",
            }}
          >
            {teamMembers.map((member) => {
              return <div className="">{member}|</div>;
            })}
          </div>
        </div>
      </div>    
  );
}
