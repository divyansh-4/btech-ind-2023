import Image from "next/image";

const RoadMap = ({ imagePath }) => {
  return (
    <>
      <div
        className="bg-contain bg-center bg-no-repeat h-[3000px] md:h-[1000px] w-200% md:w-200%"
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
