import Image from 'next/image';
import React, { useMemo, useEffect } from 'react';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from '@mui/icons-material';

function Footer() {
  useEffect(() => {
    const script = document.createElement('script');
    // script.src = 'https://brandingthatslaps.com/wp-content/themes/slaps/dist/js/main.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const infoListTextStyle = useMemo(() => 'text-xs md:text-sm lg:text-md', []);
  const infoList = useMemo(
    () => [
      {
        title: 'Phone',
        content: (
          <p className={infoListTextStyle}>
            +91-011-71985300, +91-011-26907400-7404
          </p>
        ),
        icon: <Phone />,
      },
      {
        title: 'Mail',
        content: (
          <p className={infoListTextStyle}>
            <a
              className={'hover:underline text-red no-underline'}
              href='mailto:enveave@iiitd.ac.in'
            >
              info@iiitd.ac.in
            </a>
          </p>
        ),
        icon: <EmailIcon />,
      },
      {
        title: 'Fax',
        content: <p className={infoListTextStyle}>+91-11-26907405</p>,
        icon: <FaxIcon />,
      },
    ],
    [infoListTextStyle]
  );
  return (
    <div className='w-full bg-[#252525] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row justify-between text-red gap-5'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <Image width={75} height={75} src='/logo.svg' alt='IIITD Logo' />
          <div className='w-1 h-11 bg-red'></div>
          <p className='uppercase font-bold text-xs sm:text-sm md:text-md lg:text-lg my-0.5'>
            indraprashta institute of information technology, delhi
          </p>
        </div>
        <div data-inview-text-shuffle>
          <div data-text-shuffle>
            <p className='text-xs sm:text-sm md:text-md lg:text-lg'>
              Okhla Industrial Area Phase 3, Near Govindpuri Metro Station{' '}
              <br />
              New Delhi, Delhi, 110020
            </p>
          </div>
        </div>
      </div>
      <div>
        {infoList.map((item) => {
          return (
            <div
              key={item.title}
              className='flex justify-between sm:justify-start items-center gap-5 my-2'
            >
              <div className='flex gap-2'>
                {item.icon}
                <p className='font-bold text-xs md:text-sm lg:text-md'>
                  {item.title}
                </p>
              </div>
              <div data-inview-text-shuffle>
                <div data-text-shuffle>{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
