"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './TaskToDo.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { document } from "postcss";
import PopUp from "../PopUp/PopUp";

interface ModalType {
    children?: ReactNode;
    index:number;
    text1:string
    
  }

export default function TaskToDo (props:ModalType) {
    const [value, setValue] = useState('')
    const { isOpen, toggle } = useModal();
    
        return (
            <>
            <div key={props.index}>
                    <div className={s.task}>
                        <Image alt='ok' src='Group.svg' width={25} height={25} />
                        <div className={s.task1}>{props.text1}</div>
                        <button onClick={() => { toggle(); /*setValue('3'); /*setDoDont(true)*/ }}>
                            <Image alt='settings'  src='Vector (2).svg' width={4} height={4} />
                        </button>
                    <PopUp isOpen={isOpen} toggle={toggle} />
                    </div>
                    
            </div>
            
            </>
        ) 
}