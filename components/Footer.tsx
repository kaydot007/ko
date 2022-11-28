import Image from 'next/image';
import React from 'react';
import logo from './assets/vectors/logo.svg';

const footerArr = [
  ['APPreciate', 'Home', 'About Us', 'FAQs', 'Contact Us'],
  ['Product', 'Android', 'IOS'],
  ['Socials', 'Instagram', 'Facebook', 'Twitter', 'Youtube', 'Linked In'],
  ['Reach Out', '+234-888-8888-888', 'askus@appreciate.com'],
];

const Foot = ({ data }: { data: any }) => (
  <div className="flex flex-col gap-[1.7rem]">
    {data.map((item: string, indx: number) => (
      <p className={`${indx === 0 && 'font-medium text-black text-[1.31rem]'}`}>
        {item}
      </p>
    ))}
  </div>
);

export const Footer = () => {
  return (
    <footer>
      <aside className="flex justify-between text-[#666] mt-14 py-20 font-medium">
        <div className="-mt-6">
          <Image width={295} height={72} src={logo} alt="logo" />
          <p className="text-[#00C567] ">Appreciating your investment...</p>
          <p className="max-w-[16.687rem] mt-12">
            APPreciate is dedicated to making Africans succeed in their
            long-term wealth building goals.
          </p>
          <p className="mt-28 mb-6">Terms and Condition</p>
          <p>Privacy Policy</p>
        </div>
        {footerArr.map((item) => (
          <Foot data={item} />
        ))}
      </aside>
      <p className="border-t-[1px] font-medium border-[#aaa] text-center max-w-[68.43rem] mx-auto py-8">
        Copyright © ZEDEF Technologies Global 2022- All rights reserved
      </p>
    </footer>
  );
};
