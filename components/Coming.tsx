import Image from 'next/image';
import React from 'react';
import styles from '../styles/Coming.module.css';
import phone from '/public/images/phone.png';
import Button from './Button';
import Bell from './assets/Bell';
import ComingSoon from './ComingSoon';

const Coming = ({ home }: { home?: boolean }) => {
  return (
    <>
      <section
        className={`${styles.container} relative text-center flex justify-end p-12`}
      >
        <Image className="absolute left-5 -top-28" src={phone} alt="/" />
        <div className="bg-white rounded-tr-xl rounded-bl-xl py-5 px-48">
          <ComingSoon />
        </div>
      </section>
      <div className="w-fit mt-4 mx-auto">
        {home && <Button text="Remind me!" iconn={<Bell />} />}
      </div>
    </>
  );
};

export default Coming;
