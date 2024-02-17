import Image from "next/image";
import loading from "../public/loading.gif";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Image src={loading} alt="loading gif" height={800} width={700} />
    </div>
  );
};

export default Loading;
