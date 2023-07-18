import React from 'react';

function Footer() {
  const infoList = [
    {
      title: 'Phone',
      content: <p>+91-011-71985300, +91-011-26907400-7404</p>,
    },
    {
      title: 'Mail',
      content: <a href='mailto:enveave@iiitd.ac.in'>info@iiitd.ac.in</a>,
    },
    {
      title: 'Fax',
      content: <p>+91-11-26907405</p>,
    },
  ];
  return (
    <div className='w-full bottom-0 absolute bg-black px-10 py-5 flex justify-between text-red-600 h-36'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <img src='/logo.svg' alt='IIITD Logo' className='h-10' />
          <div className='w-1 h-10 bg-red-600'></div>
          <p className='uppercase'>
            indraprashta insitute of information technology, delhi
          </p>
        </div>
        <p>
          Okhla Industrial Area Phase 3, Near Govindpuri Metro Station New
          Delhi, Delhi, 110020
        </p>
      </div>
      <div>
        {infoList.map((item) => {
          return (
            <div key={item.title} className='flex items-center gap-2'>
              <p>{item.title}</p>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
