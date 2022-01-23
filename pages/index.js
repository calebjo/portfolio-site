import Head from 'next/head'
import Image from 'next/image'
import banner from '../assets/images/banner.jpg'
import styles from '../styles/Home.module.css'

import TopNav from './components/topNav'
import SideNav from './components/sideNav'

import HomeSection from './components/home_section'
import SkillsSection from './components/skills_section'
import ProjectsSection from './components/projects_section'
import ContactSection from './components/contact_section'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Caleb Jones</title>
            <meta name="description" content="A multifaceted full stack Software Engineer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.page__wrapper}>
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

            <div className={styles.pages}>
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
