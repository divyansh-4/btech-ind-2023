import Image from "next/image";

function UnderLineText({ text }) {
  return (
    <div className="relative w-fit cursor-pointer [&>div]:hover:w-full">
      <span>{text}</span>
      <div className="absolute bottom-0 w-0 h-[2px] transition-all duration-100 bg-black"></div>
    </div>
  );
}

export default function Menu() {
  const menuItem =
    "flex-grow-0 flex-shrink-1 basis-[50%] flex justify-center hover:scale-110 hover:rotate-12 transiton-all duration-100 cursor-pointer";
  const scheduleResolution = { width: 181, height: 129 };
  const galleryResolution = { width: 187, height: 109 };
  const contactResolution = { width: 142, height: 156 };
  const virtualTourResolution = { width: 161, height: 127 };
  const offset = scheduleResolution.height / 2;

  return (
    <div className="w-screen h-full sm:h-auto sm:w-fit p-4 bg-yellow rounded-3xl flex flex-col justify-between">
      <div>
        <span className="rounded-2xl bg-red text-background p-1 border-4 border-background border-solid text-xs sm:text-sm font-bold w-fit">
          DISCOVER MORE
        </span>
        <div className="text-6xl sm:text-8xl font-bold">MENU</div>
      </div>

      <div className="flex items-center">
        <div className={`${menuItem}`}>
          <Image
            alt="schedule"
            src="/menu/schedule.png"
            {...scheduleResolution}
          />
        </div>
        <div className={`${menuItem} relative`} style={{ top: `${offset}px` }}>
          <Image alt="gallery" src="/menu/gallery.png" {...galleryResolution} />
        </div>
      </div>
      <div className="flex items-center">
        <div className={`${menuItem}`}>
          <Image
            alt="virtual_tour"
            src="/menu/virtual_tour.png"
            {...virtualTourResolution}
          />
        </div>
        <div className={`${menuItem} relative`} style={{ top: `${offset}px` }}>
          <Image alt="contact" src="/menu/contact.png" {...contactResolution} />
        </div>
      </div>
      <div style={{ height: `${offset}px` }}></div>
      <div className="mt-2 flex items-end justify-between">
        <div className="leading-tight font-bold">
          <UnderLineText text="Home" />
          <UnderLineText text="About Us" />
          <UnderLineText text="Location" />
          <UnderLineText text="FAQs" />
        </div>
        <div className="w-10 h-10 rounded-full bg-background"></div>
      </div>
    </div>
  );
}
