const RoadMap = ({ imagePath }) => {
  return (
    <div
      className='bg-contain bg-center bg-no-repeat -mt-[45rem] h-[200rem] sm:-mt-[100rem] md:mt-0 sm:h-[350rem] md:h-[180rem]'
      style={{
        backgroundImage: `url('${imagePath}')`,
      }}
    ></div>
  );
};

export default RoadMap;
