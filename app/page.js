import Image from "next/image";
import des from "../public/des.png";
import desi from "../public/desi.jpg";

export default async function Home() {
  return (
    <div className="relative flex flex-col justify-center  min-h-screen  bg-neutral-950 text-gray-200">
      <div className="sm:w-1/3 sm:absolute sm:top-36 sm:left-36 flex justify-center items-center   ">
        <h1 className="sm:text-2xl p-5   z-10 relative bg-neutral-950  tracking-wider rounded-3xl  ">
          Welcome to my kaleidoscope of words,
          <br /> where poems dance between light and shadow,
          <br />
          painting emotions with every stroke of my pen.
        </h1>
      </div>

      <Image
        className="rounded-bl-full absolute top-0 right-0 w-[300px] md:w-[400px] lg:w-[500px]  "
        src={des}
        width={400}
        height={400}
      />
      <Image
        className="rounded-tr-full absolute bottom-0 left-0 w-[300px] md:w-[400px] lg:w-[500px]  "
        src={desi}
        width={400}
        height={400}
      />
    </div>
  );
}
