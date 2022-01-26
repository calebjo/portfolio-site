import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Hamburger from './hamburger'

export default function TopNav() {
    return(
        <div className={styles.topnav}>
            <Hamburger />
        </div>
    )
}