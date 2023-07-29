import Image from "next/image";

const RoadMap = ({ imagePath }) => {
  return (
    <>
      <div
        // className="right-10 bg-contain bg-center bg-no-repeat h-[800px] md:h-[2500px] w-full"
        className="bg-contain bg-center bg-no-repeat -mt-[45rem] h-[150rem] sm:-mt-[100rem] md:mt-0 sm:h-[300rem] md:h-[180rem]"
        style={{
          backgroundImage: `url('${imagePath}')`,
        }}
      >
        {/* Add any other content or elements you want to display within the RoadMap component */}
      </div>
    </>
  );
};

export default RoadMap;
