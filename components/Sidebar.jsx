import React from 'react'
import styles from '../styles/Sidebar.module.css'
import {FaGraduationCap} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineDashboard } from 'react-icons/md'
import { GiNotebook } from 'react-icons/gi'
import { MdOutlineFormatListBulleted } from 'react-icons/md'
import {ImLibrary } from 'react-icons/im'
import {CgProfile} from 'react-icons/cg'
import {MdSchedule } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col border border-dashed'>
    <div className={styles.sidebar}>
        <div className={styles.sidebar_active}></div>
         <div className={styles.logo}>
        <div className={styles.logo_icon}>
            <Link href="/"><a > <FaGraduationCap size={40}></FaGraduationCap></a></Link>
        </div>

        <div className={styles.logo_text}>
          
            <Link href="/"><a href=""><p>GO<span>2</span>UNI</p></a></Link> 
        </div>
        </div>
        <div className={styles.sidebar_text}>
          <div className={styles.align}><MdOutlineDashboard className={styles.icon} size={24} ></MdOutlineDashboard>Dashboard</div>
          <div className={styles.align}><GiNotebook className={styles.icon} size={24}></GiNotebook>My Courses</div>
          <div className={styles.align}>< MdOutlineFormatListBulleted className={styles.icon} size={24}></MdOutlineFormatListBulleted>Category</div>
          <div className={styles.align}> <ImLibrary className={styles.icon} size={24}> </ImLibrary>Library</div>
          <div className={styles.align}> <CgProfile className={styles.icon} size={24}></CgProfile>My profile</div>
          <div className={styles.align}><MdSchedule className={styles.icon} size={24}></MdSchedule>Schedule</div>
          </div>
    </div>

    </div>
  )
}


export default Sidebar