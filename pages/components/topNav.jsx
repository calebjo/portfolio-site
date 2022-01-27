import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Hamburger from './hamburger'

export default function TopNav() {
    return(
        <div className={styles.topnav}>
            <div className={styles.topnav__links}>
                <p>Home</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <Hamburger />
        </div>
    )
}