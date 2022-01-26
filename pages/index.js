import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react"

import banner from '../assets/images/banner.jpg'
import loader from '../assets/images/branch-logo.svg'

import TopNav from './components/topNav'
import SideNav from './components/sideNav'
import HomeSection from './components/home_section'
import SkillsSection from './components/skills_section'
import ProjectsSection from './components/projects_section'
import ContactSection from './components/contact_section'

export const Home = () => {

    const [loaderClass, setLoaded] = useState(`${styles.page__loader}`);
    
    useEffect(() => {
        document.title = "Page loaded!";
        setLoaded(`${styles.page__loader} ${styles["fade-out"]}`);
        setTimeout(() => {
            setLoaded(`${styles.page__loader} ${styles.hidden}`);
        }, 4000)
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Caleb Jones</title>
                <meta name="description" content="A multifaceted full stack Software Engineer" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div className={styles.page__wrapper}>
                <div className={loaderClass}>
                    <div className={styles.loader__center}>
                        <div className={styles.loader__header}>
                            CJ
                        </div>
                        <div className={styles.loader__icon}>
                            <Image
                                src={loader}
                                className={styles.loader__image}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.pages}>
                    <div className={styles.banner}>
                        <Image
                            src={banner}
                            layout="fill"
                            objectFit='cover'
                            objectPosition='50% -5rem'
                        />
                        {/* SKELETON -- FIX BACKGROUND IMAGE POSITIONING LATER */}
                    </div>
                    <TopNav />
                    <SideNav />
                    <section className={styles.home}>
                        <HomeSection />
                    </section>
                    <section className={styles.skills}>
                        <SkillsSection />
                    </section>
                    <section className={styles.projects}>
                        <ProjectsSection />
                    </section>
                    <section className={styles.contact}>
                        <ContactSection />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;