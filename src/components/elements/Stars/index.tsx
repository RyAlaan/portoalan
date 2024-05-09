import Image from "next/image";

const Stars = () => {
  return (
    <div className="absolute bottom-0 left-10 hidden md:grid grid-flow-col grid-rows-2 lg:gap-4">
      <Image
        src="/star.svg"
        alt="star"
        className="-scale-75 lg:scale-100"
        width={40}
        height={40}
      />
      <Image
        src="/star.svg"
        alt="star"
        className="-scale-75  lg:scale-100"
        width={40}
        height={40}
      />
      <Image
        src="/star.svg"
        alt="star"
        className="-scale-75  lg:scale-100"
        width={40}
        height={40}
      />
      <Image
        src="/star.svg"
        alt="star"
        className="-scale-75  lg:scale-100"
        width={40}
        height={40}
      />
      <Image
        src="/star.svg"
        alt="star"
        className="-scale-75  lg:scale-100"
        width={40}
        height={40}
      />
      <Image
        src="/star.svg"
        alt="star"
        className="-scale-75  lg:scale-100"
        width={40}
        height={40}
      />
    </div>
  );
};

export default Stars;
