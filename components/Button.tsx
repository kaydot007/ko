import React from 'react';
import styles from '../styles/Home.module.css';

const Button = ({
  text,
  iconn,
  style,
  onClick = () => {},
}: {
  text: string;
  iconn?: any;
  style?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${style} bg-[#00C567] mb-[3.125rem] flex gap-2 items-center rounded-[32px] text-white text-2xl p-2`}
    >
      <p>{text}</p>
      {iconn}
    </button>
  );
};

export default Button;
