import Image from 'next/image';
import Avt1 from '/public/images/avt1.png';
import Avt2 from '/public/images/avt2.png';
import Avt3 from '/public/images/avt3.png';
import styles from '../styles/Home.module.css';

const NewsLetter = ({ faq }: { faq?: boolean }) => {
  return (
    <div className="bg-[#00C567] rounded-tr-xl rounded-bl-xl pt-10 px-[5.19rem] mt-48 pb-4 mb-24 text-white max-w-[75rem]">
      <div className="flex mb-9">
        <div className="flex">
          <Image src={Avt1} className="h-11 w-12" alt="avt" />
          <Image src={Avt2} className="h-11 w-12 -ml-5" alt="avt" />
          <Image src={Avt3} className="h-11 w-12 -ml-4" alt="avt" />
        </div>
        <p className="text-3xl font-medium text-center">
          Join the first 2,000 APPreciate family members and win exciting
          bonuses on our platform
        </p>
      </div>
      <div
        className={`bg-white justify-between flex mx-auto mb-2 p-[10px] rounded-md max-w-[29rem] ${
          faq && styles.input
        }`}
      >
        <input
          placeholder="Input your mail"
          className="flex-1 px-2 outline-none"
        />
        <button
          className={`bg-[#3F3D56] px-5 py-1 rounded-sm ${
            faq && styles.letter
          }`}
        >
          Submit
        </button>
      </div>
      <p className="text-right -mr-12 -mt-5">#letsappreciate</p>
    </div>
  );
};

export default NewsLetter;
