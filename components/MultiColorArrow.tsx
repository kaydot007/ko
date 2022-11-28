import Image from 'next/image';
import React from 'react';
import arrow from './assets/vectors/arrow.svg';

const MultiColorArrow = ({ text, arr }: { text: string; arr?: boolean }) => {
  return (
    <div className="flex justify-center">
      <p className="font-medium text-4xl">
        Our <span className="text-[#00C567]">{text}</span>
        {arr && ','}
      </p>
      {!arr && <Image alt="/" width={40.4} height={24} src={arrow} />}
    </div>
  );
};

export default MultiColorArrow;
