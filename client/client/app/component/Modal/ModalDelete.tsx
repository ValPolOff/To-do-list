import React, { ReactNode, useState } from "react";
import s from './Modal.module.css'
import Image from "next/image";
import useModal from "@/app/hook/useModal";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    //value: (obj:string) => void;
    /*butt: string;//
    name: (obj:string) => void;
    task: (obj:string[]) => void;*/
  }

export default function ModalDelete (props: ModalType) {
    //const { isOpen, toggle } = useModal();

    return (
        <>
          {props.isOpen && (
            <div className={s.modalOverlay} onClick={props.toggle}>
              <div onClick={(e) => e.stopPropagation()} className={s.modalBox}>
                {props.children}
                <div>
                  <div className={s.h1}>Delete task</div>
                  <span className={s.areYou}>Are you sure about deleting this task?</span>
                  <div className={s.blockH1}>
                    <button className={s.delete} >
                      <Image alt='okTask' src='material-symbols_today (1).svg' width={25} height={25} />
                      Delete
                    </button>
                    <button className={s.close} onClick={props.toggle}>
                      <Image alt='noTask' src='material-symbols_today.svg' width={25} height={25} />
                      Close
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </>
        )
}