import Image from "next/image";

const RoadMap = ({ imagePath }) => {
  return (
    <>
      <div
        className="right-10 bg-contain bg-center bg-no-repeat h-[800px] md:h-[2500px] w-full"
        // className="bg-contain bg-center bg-no-repeat h-[1000px] md:h-[3050px] w-full bg-cover"
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
