import Image from 'next/image'
import s from './Panel.module.css'

/*function sortData() {
    return(
        <button className={s.panel2}></button>
    )
}*/

export default function Panel() {
    return (
        <div >
            
                <button className={s.panel1}>
                    <Image alt='today' src='Vector.svg' width={19} height={19}/>
                    <div>Today</div>
                </button>
            
            
                <button className={s.panel2}>
                    <Image alt='all' src='done 1.svg' width={19} height={19}/>
                    All
                </button>
                <button className={s.panel2} >
                    <Image alt='data' src='arrows 1.svg' width={19} height={19}/>
                    Data
                </button>
                <button className={s.panel1}>
                    <Image alt='Add task' src='Vector (1).svg' width={19} height={19}/>
                    Add task
                </button>
            
        </div>

    )
}