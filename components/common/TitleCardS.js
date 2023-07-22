export default function TitleCardS({
  title,
  subtitle,
  subtext,
  graphic1,
  graphic2,
  variant = 1,
}) {
  return (
    <div
      className={`relative bg-background pl-4 sm:pl-8 pr-20 pt-4 sm:pt-6 rounded-2xl ${
        variant === 1 ? 'pb-12' : 'pb-20'
      }`}
      style={{
        boxShadow: `0 4px 4px 0 rgba(0,0,0,0.25), 18px 20px 0 0 ${
          variant === 1 ? '#FAC018' : '#E44F44'
        }, 19px 21px 0 0 black, 19px 19px 0 0 black, 17px 21px 0 0 black`,
        paddingBottom: variant === 1 ? '3rem' : '5rem',
      }}
    >
      <div
        className='bg-yellow rounded-2xl p-2 md:p-4 w-fit text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold'
        style={{
          textShadow: '0 3px 4px rgba(0,0,0,0.25)',
        }}
      >
        {subtext}
      </div>
      <div className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-red font-bold mt-6'>
        {title}
      </div>
      {variant !== 1 && (
        <div className='text-xl text-red font-bold'>{subtitle}</div>
      )}
      <div className='absolute -bottom-10 -right-5 overflow-visible w-1/2 h-1/2'>
        {graphic1}
      </div>
      <div className='absolute -bottom-10 -left-80 overflow-visible w-5/6 h-5/6'>
        {graphic2}
      </div>
    </div>
  );
}
