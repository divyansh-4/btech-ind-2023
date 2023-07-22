export default function TitleCard({
  title,
  subtitle,
  subtext,
  graphic,
  variant = 1,
}) {
  return (
    <div>
      <div
        className={`relative bg-[#252525] pl-[1.5rem] pr-[5rem] pt-[1.5rem] pb-[${
          variant === 1 ? "3rem" : "5rem"
        }] rounded-2xl`}
        style={{
          boxShadow: `0 4px 4px 0 rgba(0,0,0,0.25), 18px 20px 0 0 ${
            variant === 1 ? "#FAC018" : "#E44F44"
          }, 19px 21px 0 0 black, 19px 19px 0 0 black, 17px 21px 0 0 black`,
          paddingBottom: variant === 1 ? "3rem" : "5rem",
        }}
      >
        <div
          className="bg-[#FAC018] rounded-2xl py-0.5 px-2 w-fit text-lg sm:text-xl font-bold"
          style={{
            textShadow: "0 3px 4px rgba(0,0,0,0.25)",
          }}
        >
          {subtext}
        </div>
        <div className="text-3xl sm:text-5xl text-[#E44F44] font-bold mt-6">
          {title}
        </div>
        {variant !== 1 ? (
          <div className="text-7xl text-[#E44F44] font-bold">{subtitle}</div>
        ) : null}
        <div className="absolute -bottom-10 -right-5 overflow-visible w-1/2 h-1/2">
          {graphic}
        </div>
      </div>
    </div>
  );
}
