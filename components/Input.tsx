import React from 'react';

const InputField = ({ label }: { label: string }) => {
  return (
    <div className="mb-12 flex flex-col">
      <label className="text-xl mb-3">{label}</label>
      <input className="p-3 outline-none bg-[#F0F1F1] rounded-lg w-[35.9rem]" />
    </div>
  );
};

export default InputField;
