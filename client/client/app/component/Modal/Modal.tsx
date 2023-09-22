import React, { ReactNode, useState } from "react";
import s from './Modal.module.css'
import Image from "next/image";
import useModal from "@/app/hook/useModal";
import TexArea from "../content/TextArea";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  butt: string;
  name: (obj:string) => void;
 
}

export default function Modal(props: ModalType) {
  const { isOpen, toggle } = useModal();

  const [value,setValue] = useState('')
  
  //const [name, rename] = useState('All')
  /*const Rename = (event:string) => {
    props.onChange(event.target.value)
  }*/


  const ddd = () => {
    switch (props.butt) {
      case '1':
        return (
          <>
            {props.isOpen && (
              <div className={s.modalOverlay} onClick={props.toggle}>
                <div onClick={(e) => e.stopPropagation()} className={s.modalBox}>
                  {props.children}
                  <div>
                    <div className={s.h1}>Create task</div>
                    <input className={s.interTask} placeholder="    Enter text..." ></input>
                    <div className={s.blockH1}>
                      <button className={s.save}>
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
        
      case '2':
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

        case '3':
          return (
            <>
              {props.isOpen && (
                <div onClick={props.toggle}>
                  <div onClick={(e) => e.stopPropagation()} className={s.modalBox2}>
                    {props.children}

                    <div className={s.all}>
                      <button className={s.allAll}  onClick={() => props.name('All')}>
                        <Image src='done 1 (1).svg' width={25} height={25} alt='yesAll'/>
                        All
                        </button>
                      <button className={s.allDone}  onClick={() => props.name('Done')}>
                       <Image src='done 1 (1).svg' width={25} height={25} alt='yesDone'/>
                       Done
                      </button>
                      <button className={s.allUndone}  onClick={() => props.name('Undone')}>
                        <Image src='done 1 (1).svg' width={25} height={25} alt='yesUndone'/>
                        Undone 
                        </button>
                    </div>

                  </div>
                </div>
              )}
            </>
          )
          case '4':
            return (
              <>
                {props.isOpen && (
                  <div onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={s.modalBox3}>
                      {props.children}

                      <div>
                        <button >
                          <Image src='Group (1).svg' width={20} height={20} alt='yesAll' />
                        </button>
                        <button onClick={() => { toggle(); setValue('2'); }}>
                          <Image src='delete 4.svg' width={20} height={20} alt='yesDone' />

                        </button>

                      </div>

                    </div>
                    {//name no use this component-----------------------------------------------------      
                    }
                    <Modal isOpen={isOpen} toggle={toggle} butt={value} name ={setValue}/>
                  </div>
                )}
              </>
            )

    }
  }
  return (
    <>
      {ddd()}
    </>
  );
}