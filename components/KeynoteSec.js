import KeynoteCards from './KeynoteCards';

export default function KeynoteSec() {
  
  return (
    <div className='h-fit relative'>
      <div className='flex flex-col justify-center items-center w-full my-8 sm:my-16 h-fit'>
        {/* <div className='uppercase bg-amber-400 rounded-[40px] text-center sm:rounded-[100px] border-2 border-black w-fit p-4 '> */}
        <div className='uppercase bg-amber-400 rounded-[40px] text-center sm:rounded-[100px] border-2 border-black w-[60%] sm:w-[55%] lg:w-[50%] p-3 md:p-4 '>
          <p
            className='text-neutral-800 text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tighter uppercase'
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
          className='max-w-[55%] mt-4 h-fit sm:mt-12 flex justify-center items-center text-center mx-auto text-neutral-800 px-4 sm:px-[10%] text-[1.4vh] sm:text-xl md:text-2xl lg:text-3xl font-medium'
          style={{
            backgroundImage: "url('/redTornPaper.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
        >
          <div className='w-full py-[20%] px-[10%]'>
            Meet our beloved and most respected keynote speakers, here to
            welcome you with wise words and the best possible advice for your
            college experience and academic endeavors.
          </div>
        </div>
      </div>
      <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-20 my-4 sm:my-4 mx-auto'>
     
       <KeynoteCards
             
              name='Pankaj Jalote'
              desc={
                <>
                  Distinguished <br /> Professor <br /> IIIT-Delhi <br />{' '}
                  (Founding Director <br />
                  2008 - 2018)
                </>
              }
              image='/pankajJalote.png'
              color={'bg-red'}
              height={'h-[90%]'}
            />
        {Array.from({ length: 8 }).map((keynote) => {
          return (
            <KeynoteCards
              key={keynote}
              name='Coming Soon'
              desc={
                <>
                  Designation<br/>Institution<br/>Sub-Title and <br/>other info
                </>
              }
              image='/speakerPlaceholder.png'
              color={'bg-yellow'}
              height={'h-[70%]'}
            />
          );
        })} 
      </div>
    </div>
  );
}
