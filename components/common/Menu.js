import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

function UnderLineText({ text }) {
  return (
    <div className='relative w-fit cursor-pointer [&>div]:hover:w-full'>
      <span>{text}</span>
      <div className='absolute bottom-0 w-0 h-[2px] transition-all duration-100 bg-black'></div>
    </div>
  );
}

export default function Menu() {
  const menuItem =
    'flex-grow-0 flex-shrink-1 basis-[50%] flex justify-center hover:scale-110 hover:rotate-12 transiton-all duration-100 cursor-pointer';
  const scheduleResolution = { width: 181, height: 129 };
  const galleryResolution = { width: 187, height: 109 };
  const contactResolution = { width: 142, height: 156 };
  const virtualTourResolution = { width: 161, height: 127 };
  const offset = scheduleResolution.height / 2;

  const menuLinks = useMemo(
    () => [
      {
        name: 'About Us',
        href: 'https://www.iiitd.ac.in/',
      },
      {
        name: 'Location',
        href: 'https://www.google.com/maps/place/Indraprastha+Institute+of+Information+Technology+Delhi/@28.5458541,77.2731762,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3e564daac1d:0x2c582e340e7bc556!8m2!3d28.5458541!4d77.2731762!16s%2Fg%2F11bc5q5mqf?entry=ttu',
      },
      {
        name: 'FAQs',
        href: 'https://docs.google.com/spreadsheets/d/1w85BGovNseeoUiKojVfF8NYx4NBOw_5UfrIc6ALt4Yo/edit#gid=1213820881',
      },
    ],
    []
  );

  return (
    <div className='w-screen h-full sm:h-auto sm:w-fit p-4 bg-yellow rounded-3xl flex flex-col justify-between'>
      <div>
        <span className='rounded-2xl bg-red text-background p-1 border-4 border-background border-solid text-xs sm:text-sm font-bold w-fit'>
          DISCOVER MORE
        </span>
        <div className='text-6xl sm:text-8xl font-bold'>MENU</div>
      </div>
      <div className='flex items-center'>
        <div className={`${menuItem}`}>
          <Link href='/schedule'>
            <Image
              alt='schedule'
              src='/menu/schedule.png'
              {...scheduleResolution}
            />
          </Link>
        </div>
        <div className={`${menuItem} relative`} style={{ top: `${offset}px` }}>
          <Image alt='gallery' src='/menu/gallery.png' {...galleryResolution} />
        </div>
      </div>
      <div className='flex items-center'>
        <div className={`${menuItem}`}>
          <a href='https://www.youtube.com/watch?v=YY65qJCTfO8&t=43s&ab_channel=IIIT-DelhiOfficial' target='_blank'><Image
            alt='virtual_tour'
            src='/menu/virtual_tour.png'
            {...virtualTourResolution}
          /></a>
        </div>
        <div className={`${menuItem} relative`} style={{ top: `${offset}px` }}>
          <a href='https://www.iiitd.ac.in/contact' target='_blank'><Image alt='contact' src='/menu/contact.png' {...contactResolution} /></a>
        </div>
      </div>
      <div style={{ height: `${offset}px` }}></div>
      <div className='mt-2 flex items-end justify-between'>
        <div className='leading-tight font-bold'>
          <Link href={'/'} className='text-black no-underline'>
            <UnderLineText text='Home' />
          </Link>
          {menuLinks.map((menuItem) => {
            return (
              <a
                key={menuItem.href}
                className='text-black no-underline'
                href={menuItem.href}
                target='_blank'
              >
                <UnderLineText text={menuItem.name} />
              </a>
            );
          })}
        </div>
        <div className='w-10 h-10 rounded-full bg-background'></div>
      </div>
    </div>
  );
}
