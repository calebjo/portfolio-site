import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function SideNav() {
    function hoverSideNav(event) {
        console.log("In hoverSideNav()")
    }

    function clickSideNav(event) {
        console.log("In clickSideNav()")
    }

    return(
        <div className={styles.sideNav}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}