const RoadMap = ({ imagePath }) => {
  return (
    <div
      className='bg-contain bg-center bg-no-repeat h-[3000px] md:h-[1000px] w-200% md:w-200%'
      style={{
        backgroundImage: `url('${imagePath}')`,
      }}
    ></div>
  );
};

export default RoadMap;
