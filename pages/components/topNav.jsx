import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function TopNav() {
    function toggleDropdown(event){
        console.log("In toggleDropdown()")
        event.currentTarget.classList.toggle(styles.change)
    }
    
      function hoverDropdown(event){
        console.log("In hoverDropdown()")
        event.currentTarget.classList.toggle("hoverChange")
    }

    return(
        <div className={styles.topNav}>
            <div className={styles.topLogo}>
                CJ
            </div>
            <div className={styles.hamburger} onClick={toggleDropdown} onHover={hoverDropdown}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
        </div>
    )
}