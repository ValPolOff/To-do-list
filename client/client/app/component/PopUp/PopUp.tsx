"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './PopUp.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { document } from "postcss";
import ModalDelete from "../Modal/ModalDelete";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    
  }

export default function PopUp (props:ModalType) {
    
    const { isOpen, toggle } = useModal();



    return (
    <>
      {props.isOpen && (
        <div onClick={props.toggle} >
          <div onClick={(e) => e.stopPropagation()} className={s.modalBox3}>
            {props.children}
              
            <div >
              <button>
                <Image src='Group (1).svg' width={20} height={20} alt='yesAll' />
              </button>
              <button onClick={() => { toggle();}}>
                <Image src='delete 4.svg' width={20} height={20} alt='yesDone' />
                
              </button>
                
            </div>
              
          </div>
              
         
          
        </div>
        
      )}
       <ModalDelete isOpen={isOpen} toggle={toggle} />
    </>
  )
}