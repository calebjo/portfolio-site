import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function SideNav() {

    function clickSideNav(event) {
        // reset all other side nav items
        let children = event.currentTarget.children
        for (let i = 0; i < children.length; i++){
            children[i].classList = ""
        }
        // change color and animate selected item
        event.target.classList.toggle(styles.selected)
    }

    return(
        <div className={styles.sideNav} onClick={clickSideNav}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}