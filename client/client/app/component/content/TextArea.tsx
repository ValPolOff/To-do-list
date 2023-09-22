"use client"
import Image from 'next/image'
import s from './TextArea.module.css'
import useModal from '@/app/hook/useModal';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function TexArea () {
    const { isOpen, toggle } = useModal();
    const [value,setValue] = useState('');
    const [textTask, setTextTask] = useState();

    return (
        <div>
        <div className={s.text}>
            
            <div className={s.task}>
                <Image alt='ok' src='Group.svg' width={25} height={25}/>
                <div className={s.task1}>Task</div>
                <button onClick={() => { toggle(); setValue('4'); }}>
                    <Image alt='settings' src='Vector (2).svg' width={4} height={4}/>
                </button>
                
            </div>
        </div>
                    {//name no use this component-----------------------------------------------------      
                    }
                <Modal isOpen={isOpen} toggle={toggle} butt={value} name={setValue}/>
        </div>
    )
}