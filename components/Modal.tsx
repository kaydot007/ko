import React, { MutableRefObject, ReactNode, useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

type ModalProps = {
  openModal: boolean;
  children: ReactNode;
  closeModal: Function;
};

const Modal = ({ openModal, closeModal, children }: ModalProps) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (openModal && ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    };
    document.body.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.body.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [openModal]);

  return (
    <div>
      {openModal && (
        <div className={styles.modalOverlay}>
          <div ref={ref} className={styles.modalBox}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
