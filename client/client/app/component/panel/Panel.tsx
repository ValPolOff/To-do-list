"use client"
//import "./styles.css";

import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './Panel.module.css'
//import Modal from '../Modal/Modal'
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { document } from "postcss";
import TaskToDo from "../TaskToDo/TaskToDo";
import ModalSave from "../Modal/ModalSave";
import PopUpSort from "../PopUpSort/PopUpSort";
import ModalDelete from "../Modal/ModalDelete";




export default function Panel() {

    const [textTask, setTextTask] = useState(['Task']);
    const { isOpen, toggle } = useModal();
    const [value,setValue] = useState('')
    const [name,setName] = useState('All')

    
    const ToDo = textTask.map((text1,index)=>{
        return (
            <TaskToDo index={index} text1={text1}/>
        )
    })

    return (
        <div>
            <div >

                <button className={s.panelToday}>
                    <Image alt='today' src='Vector.svg' width={22} height={22} />
                    <div>Today</div>
                </button>


                <button className={s.panelAll} onClick={() => {toggle();setValue('2')}}>
                    <Image alt='all' src='done 1.svg' width={27} height={27} />
                    {name}
                </button>


                <button className={s.panelData} >
                    <Image alt='data' src='arrows 1.svg' width={27} height={27} />
                    Data
                </button>
                <button className={s.panelAddTask} onClick={() => {toggle();setValue('1')}}>
                    <Image alt='Add task' src='Vector (1).svg' width={25} height={25} />
                    Add task
                </button>
                <div className={s.text}>
                
                {ToDo}
                
                </div>
            
            </div>
            
            <PopUpSort isOpen={isOpen} toggle={toggle} name={setName} value={value}/>
            <ModalSave isOpen={isOpen} toggle={toggle} task={setTextTask} value={value}/>
            

        </div>
    )
}