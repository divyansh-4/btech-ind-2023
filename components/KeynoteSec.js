import KeynoteCards from './KeynoteCards';

export default function KeynoteSec() {
  return (
    <div className='h-fit relative'>
      <div className='flex flex-col justify-center items-center w-full my-8 sm:my-16 h-fit'>
        <div className='uppercase bg-amber-400 rounded-[40px] text-center sm:rounded-[100px] border-2 border-black w-[60%] sm:w-[55%] lg:w-[50%] p-4 '>
          <p
            className='text-neutral-800 text-[35px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-bold leading-[1.1] tracking-tighter'
            style={{
              textShadow: '0 6px 8px rgba(0,0,0,0.25)',
            }}
          >
            Keynote
            <br />
            Speakers
          </p>
        </div>
        <div
          className='max-w-[55%] mt-4 h-fit sm:mt-12  flex  justify-center items-center text-center mx-auto text-neutral-800 px-4 sm:px-[10%] text-[1.4vh] sm:text-[22px] md:text-[26px] lg:text-[32px]  font-medium'
          style={{
            backgroundImage: "url('/redTornPaper.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        >
          <div className='w-full py-[20%]'>
            Meet our beloved and most respected keynote speakers, here to
            welcome you with wise words and the best possible advice for your
            college experience and academic endeavors.
          </div>
        </div>
      </div>
      <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-20 my-4 sm:my-4 mx-auto'>
        {Array.from({ length: 10 }).map((keynote) => {
          return (
            <KeynoteCards
              key={keynote}
              name='Pankaj Jalote'
              desc={
                <>
                  Distinguished <br /> Professor <br /> IIIT-Delhi <br />{' '}
                  (Founding Director <br />
                  2008 - 2018)
                </>
              }
              image='/pankajJalote.png'
              color={'yellow'}
            />
          );
        })}
      </div>
    </div>
  );
}
