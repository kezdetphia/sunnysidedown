import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogo } from "react-icons/pi";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black  w-full flex flex-col justify-center sm:gap-y-10 sm:pt-20 gap-y-10 pt-10     ">
      <div className="flex justify-evenly w-full sm:flex-row flex-col  items-center text-center gap-y-4 ">
        <div className="sm:flex-row flex-col  ">
          <p className="text-neutral-400">Follow Me</p>
          <div className="flex justify-center items-center space-x-2">
            <Link
              href="https://www.instagram.com/shenaniwrites?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
            >
              <FaInstagram size={35} color="gray" />
            </Link>
            <Link
              href="https://www.tiktok.com/@shenaniwrites?_t=8kmx8qZpwND&_r=1"
              alt="tiktok"
              target="_blank"
            >
              <PiTiktokLogo size={35} color="gray" />
            </Link>
          </div>
          {/* <p className="text-neutral-400">Logo</p> */}
        </div>
        <div className=" ">
          <p className="text-neutral-400">Email Me</p>
          <a
            href="mailto:shenanisetunga@gmail.com"
            target="_blank"
            className="text-neutral-400"
          >
            shenanisetunga@gmail.com
          </a>
        </div>
        <div>
          <p className="text-neutral-400">Call Me</p>
          <p className="text-neutral-400">89345743975493</p>
        </div>
      </div>
      <div className="w-full flex items-end">
        <p className="text-neutral-100">All Rights Reserved {currentYear}</p>
      </div>
    </div>
  );
};

//TODO: if she wants the number to be callable lets confirm

//npm install react-phone-number-input --save
// import PhoneInput from 'react-phone-number-input';

//         <PhoneInput
//           defaultCountry="US"
//           value="+189345743975493"
//           onChange={value => console.log(value)}
//           inputComponent={React.forwardRef((props, ref) => (
//             <input {...props} ref={ref} className="text-neutral-400" />
//           ))}
//         />
//
