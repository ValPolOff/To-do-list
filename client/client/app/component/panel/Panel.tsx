"use client"
//import "./styles.css";
import Modal from "../Modal/Modal";
import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './Panel.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { document } from "postcss";



export default function Panel() {

    
   let initialState = ['All']
    const [textTask, setTextTask] = useState(['Task']);
 

    

    
    const { isOpen, toggle } = useModal();
    const [value,setValue] = useState('')

    const [name,setName] = useState('All')
    /*const Rename = (name:string) => {
        setName(name)
    }*/
    //const { isOpen, toggle } = useModal();

    //const [doDont,setDoDont] = useState(false)
    
    let t = textTask.map((text1,index)=>{
        return (
            <div key={index}>
                

                    <div className={s.task}>
                        <Image alt='ok' src='Group.svg' width={25} height={25} />
                        <div className={s.task1}>{text1}</div>
                        <button onClick={() => { toggle(); setValue('4'); /*setDoDont(true)*/ }}>
                            <Image alt='settings'  src='Vector (2).svg' width={4} height={4} />
                        </button>

                    </div>
                    //TODO - vinesti v otdelniy compnent
                
                
            </div>
        )
    })


    return (
        <div>
            <div >

                <button className={s.panelToday}>
                    <Image alt='today' src='Vector.svg' width={22} height={22} />
                    <div>Today</div>
                </button>


                <button className={s.panelAll} onClick={() => { toggle(); setValue('3'); }}>
                    <Image alt='all' src='done 1.svg' width={27} height={27} />
                    {name}
                </button>


                <button className={s.panelData} >
                    <Image alt='data' src='arrows 1.svg' width={27} height={27} />
                    Data
                </button>
                <button className={s.panelAddTask} onClick={() => { toggle(); setValue('1'); }}>
                    <Image alt='Add task' src='Vector (1).svg' width={25} height={25} />
                    Add task
                </button>
                <div className={s.text}>
            {t}
            </div>
            </div>
            


            <Modal isOpen={isOpen} toggle={toggle} butt={value} name = {setName} task={setTextTask}/>
 
        </div>
    )
}