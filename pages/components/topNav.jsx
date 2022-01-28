import React, { useState, useEffect } from "react"
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Hamburger from './hamburger'

export default function TopNav(props) {

    const classList = props.pastTop ? (
        `${styles.topnav} scrolled`
    ) : (
        `${styles.topnav}`
    )

    return(
        <div className={classList}>
            <div className={styles.topnav__links}>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <Hamburger />
        </div>
    )
}