import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';

const HomeCard = ({
  img,
  text,
  style,
}: {
  text: string;
  img: any;
  style: string;
}) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`absolute top-0 ${style}`}>
        <Image src={img} alt="img" />
      </div>
      <p className="max-w-[11.9rem] font-medium text-3xl">{text}</p>
    </div>
  );
};

export default HomeCard;
