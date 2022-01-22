import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Hamburger from './hamburger'

export default function TopNav() {
    return(
        <div className={styles.topNav}>
            <div className={styles.topLogo}>
                CJ
            </div>
            <Hamburger />
        </div>
    )
}