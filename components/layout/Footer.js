import Image from 'next/image';
import React, { useMemo } from 'react';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from '@mui/icons-material';

function Footer() {
  const infoList = useMemo(
    () => [
      {
        title: 'Phone',
        content: (
          <p className='text-xs sm:text-sm md:text-md'>
            +91-011-71985300, +91-011-26907400-7404
          </p>
        ),
        icon: <Phone />,
      },
      {
        title: 'Mail',
        content: (
          <a
            className='hover:underline text-xs sm:text-sm md:text-md'
            href='mailto:enveave@iiitd.ac.in'
          >
            info@iiitd.ac.in
          </a>
        ),
        icon: <EmailIcon />,
      },
      {
        title: 'Fax',
        content: (
          <p className='text-xs sm:text-sm md:text-md'>+91-11-26907405</p>
        ),
        icon: <FaxIcon />,
      },
    ],
    []
  );
  return (
    <div className='w-full bottom-0 absolute bg-[#252525] p-8 sm:p-10 flex flex-col md:flex-row justify-between text-red gap-5'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <Image width={75} height={75} src='/logo.svg' alt='IIITD Logo' />
          <div className='w-1 h-10 bg-red'></div>
          <p className='uppercase font-bold text-sm sm:text-md md:text-lg'>
            indraprashta insitute of information technology, delhi
          </p>
        </div>
        <p className='text-sm sm:text-md md:text-lg'>
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
                <p className='font-bold text-sm md:text-md'>{item.title}</p>
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
