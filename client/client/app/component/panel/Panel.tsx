"use client"
//import "./styles.css";
import Modal from "../Modal/Modal";
import useModal from "../../hook/useModal";

import Image from 'next/image'
import s from './Panel.module.css'
//import Modal from '../Modal/Modal'
import { useState } from 'react';
import { document } from "postcss";

/*function sortData() {
    return(
        <button className={s.panel2}></button>
    )
}*/

export default function Panel() {
    const { isOpen, toggle } = useModal();

    const [value,setValue] = useState()
    //const { isOpen, toggle } = useModal();

    return (
        <div>
        <div >
                
                <button className={s.panelToday}>
                    <Image alt='today' src='Vector.svg' width={19} height={19}/>
                    <div>Today</div>
                </button>
            
            
                <button className={s.panelAll} onClick={toggle}>
                    <Image alt='all' src='done 1.svg' width={19} height={19}/>
                    All
                </button>

                <Modal isOpen={isOpen} toggle={toggle}>
                    <div className={s.panelAddTask}>
                        <button>All</button>
                        <button>Done</button>
                        <button>Undone</button>
                    </div>
                </Modal>
               
                <button className={s.panelData} >
                    <Image alt='data' src='arrows 1.svg' width={19} height={19}/>
                    Data
                </button>
                <button className={s.panelAddTask} onClick={toggle}>
                    <Image alt='Add task' src='Vector (1).svg' width={19} height={19}/>
                    Add task
                </button>

            
        </div>
                <Modal isOpen={isOpen} toggle={toggle}>
                    <div>
                        <div className={s.h1}>Create task</div>
                        <input className={s.interTask} placeholder="    Enter text..." ></input>
                        
                        <div className={s.blockH1}>
                            
                            <button className={s.save} >
                                <Image alt='okTask' src='Check_ring.svg' width={25} height={25}/>
                                Save
                            </button>
                            <button className={s.close}>
                                <Image alt='noTask' src='material-symbols_today.svg' width={25} height={25}/>
                                Close
                            </button>
                        </div>
                        
                    </div>
                </Modal>

                <Modal isOpen={isOpen} toggle={toggle}>
                    <div>
                        <div className={s.h1}>Delete task</div>
                        <span className={s.areYou}>Are you sure about deleting this task?</span>
                        
                        <div className={s.blockH1}>
                            
                            <button className={s.delete} >
                                <Image alt='okTask' src='material-symbols_today (1).svg' width={25} height={25}/>
                                Delete
                            </button>
                            <button className={s.close}>
                                <Image alt='noTask' src='material-symbols_today.svg' width={25} height={25}/>
                                Close
                            </button>
                        </div>
                        
                    </div>
                </Modal>
        </div>

    )
}