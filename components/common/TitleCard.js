export default function TitleCard({
  title,
  subtitle,
  subtext,
  graphic,
  graphic2,
  variant = 1,
}) {
  return (
    <div
      className={`relative bg-background pl-4 sm:pl-8 pr-20 pt-4 sm:pt-6 rounded-2xl ${
        variant === 1 ? "pb-12" : "pb-20"
      }`}
      style={{
        boxShadow: `0 4px 4px 0 rgba(0,0,0,0.25), 18px 20px 0 0 ${
          variant === 1 ? "#FAC018" : "#E44F44"
        }, 19px 21px 0 0 black, 19px 19px 0 0 black, 17px 21px 0 0 black`,
      }}
    >
      <div
        className="bg-yellow rounded-2xl p-2 md:p-4 w-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold"
        style={{
          textShadow: "0 3px 4px rgba(0,0,0,0.25)",
        }}
      >
        {subtext}
      </div>
      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red font-bold mt-6 whitespace-nowrap">
        {title}
      </div>
      {variant === 2 ? (
        <div className="text-9xl text-red font-bold">{subtitle}</div>
      ) : null}
      <div className="absolute -bottom-10 -right-5 overflow-visible w-1/2 h-1/2">
        {graphic}
      </div>
      <div className="absolute bottom-0 left-[10%] w-0 h-0 flex items-center justify-center">
        <div className="overflow-visible w-[15rem] h-[15rem] basis-[15rem] md:w-[25rem] md:h-[25rem] md:basis-[25rem] flex-shrink-0 flex-grow-0 min-w-0 relative">
          {graphic2}
        </div>
      </div>
    </div>
  );
}
