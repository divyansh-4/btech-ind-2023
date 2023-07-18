import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

function MarqueeComponent() {
  return (
    <div className='flex flex-col gap-2'>
      <Marquee>
        <Image
          src='/marquee/left.png'
          width={1000}
          height={1000}
          alt={'left-marquee'}
        />
      </Marquee>
      <Marquee direction='right'>
        <Image
          src='/marquee/left.png'
          width={1000}
          height={1000}
          alt={'left-marquee'}
        />
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
