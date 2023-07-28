const RoadMap = ({ imagePath }) => {
  return (
    <div
      className='bg-contain bg-center bg-no-repeat -mt-[40rem] h-[150rem] sm:-mt-[100rem] md:mt-0 sm:h-[300rem] md:h-[100rem]'
      style={{
        backgroundImage: `url('${imagePath}')`,
      }}
    ></div>
  );
};

export default RoadMap;
