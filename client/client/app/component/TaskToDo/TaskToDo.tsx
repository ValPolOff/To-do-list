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
    const [doIt, setDoIt] = useState(false)
    const { isOpen, toggle } = useModal();
    

        return (
            <>
            <div key={props.index}>
                    <div className={s.task}>
                        <button onClick={() => {setDoIt(doIt ? false: true)}}>
                            {doIt ? (<Image alt='ok' src='Check_ring.svg' width={25} height={25} />):(<Image alt='ok' src='Group.svg' width={25} height={25} />)}
                            

                        </button>
                        <div className={s.task1}>{props.text1}</div>
                        <button onClick={() => { toggle(); /*setValue('3'); /*setDoDont(true)*/ }}>
                            <Image alt='settings'  src='Vector (2).svg' width={4} height={4} />
                        </button>
                        
                    </div>
                    <PopUp isOpen={isOpen} toggle={toggle} />
            </div>
            
            </>
        ) 
}