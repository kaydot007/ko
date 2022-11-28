import React from 'react';

const CoreValues = ({ bg, text }: { bg: string; text: string }) => {
  return (
    <div
      className={`bg-[${bg}] rounded-full w-[8.5rem] h-[8.5rem] flex items-center justify-center`}
    >
      <p className="font-medium text-center text-xl">{text}</p>
    </div>
  );
};

export default CoreValues;
