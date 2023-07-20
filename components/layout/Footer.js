import Image from 'next/image';
import React, { useMemo } from 'react';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from '@mui/icons-material';

function Footer() {
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
          <a
            className={`hover:underline ${infoListTextStyle}`}
            href='mailto:enveave@iiitd.ac.in'
          >
            info@iiitd.ac.in
          </a>
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
    <div className='w-full bottom-0 absolute bg-[#252525] p-4 sm:p-8 md:p-10 flex flex-col md:flex-row justify-between text-red gap-5'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <Image width={75} height={75} src='/logo.svg' alt='IIITD Logo' />
          <div className='w-1 h-10 bg-red'></div>
          <p className='uppercase font-bold text-xs sm:text-sm md:text-md lg:text-lg'>
            indraprashta insitute of information technology, delhi
          </p>
        </div>
        <p className='text-xs sm:text-sm md:text-md lg:text-lg'>
          Okhla Industrial Area Phase 3, Near Govindpuri Metro Station <br />
          New Delhi, Delhi, 110020
        </p>
      </div>
      <div>
        {infoList.map((item) => {
          return (
            <div
              key={item.title}
              className='flex justify-between sm:justify-start items-center gap-5 my-2'
            >
              <div className='flex items-center gap-2'>
                {item.icon}
                <p className='font-bold text-xs md:text-sm lg:text-md'>
                  {item.title}
                </p>
              </div>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
