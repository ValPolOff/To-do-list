import React, { ReactNode } from "react";
import s from './Modal.module.css'

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className={s.modalOverlay} onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className={s.modalBox}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}