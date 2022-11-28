import Image from 'next/image';
import React from 'react';
import line from '/public/images/line.png';
import line2 from '/public/images/line2.png';

const Doing = () => {
  return (
    <section className="py-24 px-56">
      <h2 className="text-center font-medium text-3xl py-12 text-[#2D2D2D]">
        What we are doing
      </h2>
      <div className="flex flex-col gap-[2.4rem]">
        <div className="absolute z-30 left-[15.5rem]">
          <Image alt="/" src={line} width={2} height={342} />
        </div>
        <aside className="flex gap-6 items-center relative">
          <div className="w-[3.0625rem] h-[3.0625rem] bg-[#00C567] text-white flex items-center justify-center rounded-full z-50">
            <p>1</p>
          </div>
          <p className="font-normal text-[1.3rem]">
            Creating a whole different wealth building experience.
          </p>
          <div className="absolute right-[37%] bottom-1">
            <Image alt="/" src={line2} width={297} height={2} />
          </div>
        </aside>
        <aside className="flex gap-6 items-center relative">
          <div className="w-[3.0625rem] h-[3.0625rem] bg-[#00C567] text-white flex items-center justify-center rounded-full z-50">
            <p>2</p>
          </div>
          <p className="font-normal text-[1.3rem]">
            Creating a whole new wealth building experience.
          </p>
          <div className="absolute right-[41%] bottom-1">
            <Image alt="/" src={line2} width={297} height={2} />
          </div>
        </aside>
        <aside className="flex gap-6 items-center relative">
          <div className="w-[3.0625rem] h-[3.0625rem] bg-[#00C567] text-white flex items-center justify-center rounded-full z-50">
            <p>3</p>
          </div>
          <p className="font-normal text-[1.3rem]">
            Delivering wealth in the simplest way.
          </p>
          <div className="absolute right-[53%] bottom-1">
            <Image alt="/" src={line2} width={297} height={2} />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Doing;
