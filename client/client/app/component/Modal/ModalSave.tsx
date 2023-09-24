import React, { ReactNode, useState } from "react";
import s from './Modal.module.css'
import Image from "next/image";
import useModal from "@/app/hook/useModal";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    task: (obj:string[]) => void;
    value:string;
  }

export default function ModalSave (props: ModalType) {
    const { isOpen, toggle } = useModal();

    const [value,setValue] = useState('')
    
    const [taskN, setTask] = useState('')

    const [textTask, setTextTask] = useState(['Task']);
    let pushText = () => {
    setTextTask([...textTask, taskN])
    //textTask.push(taskN)
    console.log(textTask)
    //props.task(textTask)
    props.task([...textTask,taskN])
  }
    return (
        <>
          {props.isOpen && props.value === '1' && (
            <div className={s.modalOverlay} onClick={props.toggle}>
              <div onClick={(e) => e.stopPropagation()} className={s.modalBox}>
                {props.children}
                <div>
                  <div className={s.h1}>Create task</div>
                  <input className={s.interTask} placeholder="    Enter text..." value={taskN} onChange={(event) => setTask(event.target.value)}></input>
                  <div className={s.blockH1}>
                    <button className={s.save} onClick={pushText}>
                      <Image alt='okTask' src='Check_ring.svg' width={25} height={25} />
                      Save
                    </button>
                    <button className={s.close}>
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