import Image from 'next/image'
import s from './TextArea.module.css'

export default function TexArea () {
    return (
        <div className={s.text}>
            
            <div className={s.task}>
                <Image alt='ok' src='Group.svg' width={19} height={19}/>
                <div className={s.task1}>Task</div>
                <button>
                    <Image alt='settings' src='Vector (2).svg' width={4} height={4}/>
                </button>
            </div>
        </div>
    )
}