import React from "react";
import styles from "../styles/library.module.css";
import Sidebar from "./Sidebar";
import Image from "next/image";
import {MdSaveAlt} from "react-icons/md"
import Link from "next/link";

const Library = () => {
  return (
    <div className={styles.library}>
      <Sidebar></Sidebar>
       <div className={styles.main}>
        <div className={styles.top_details}>
        <div className={styles.library_bold}>Library</div>
        </div>
         <div className={styles.grid_container}>
          <div className={styles.book_container}>
            <Image src="/Images/Organic.png" alt="Chemistry" width="270" height="300"></Image>
            <div className={styles.text_container}>Organic Chemistry
             <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
             </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Literature.png" alt="Literature" width="270" height="300"></Image>
             <div className={styles.text_container}>Literature
             <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
             </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Physics.png" alt="Physics" width="270" height="300"></Image>
             <div className={styles.text_container}>New School Physics
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Comprehensive.png" alt="Economics" width="270" height="300"></Image>
             <div className={styles.text_container}>Comprehensie Economics 
             <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
             </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/NewGeneral.png" alt="Mathematics" width="270" height="300"></Image>
             <div className={styles.text_container}>New General Mathematics
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Organic.png" alt="Chemistry" width="270" height="300"></Image>
             <div className={styles.text_container}>Organic Chemistry
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Literature.png" alt="Literature" width="270" height="300"></Image>
             <div className={styles.text_container}>Literature
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
           <div className={styles.book_container}> 
            <Image src="/Images/Physics.png" alt="Physics" width="270" height="300"></Image>
             <div className={styles.text_container}>New School Physics
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Comprehensive.png" alt="Economics" width="270" height="300"></Image>
             <div className={styles.text_container}>Organic Chemistry
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Physics.png" alt="Physics" width="270" height="300"></Image>
             <div className={styles.text_container}>New School Physics
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
           <div className={styles.book_container}>
            <Image src="/Images/NewGeneral.png" alt="Mathematics" width="270" height="300"></Image>
             <div className={styles.text_container}>New General Mathematics
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
          <div className={styles.book_container}>
            <Image src="/Images/Literature.png" alt="Literature" width="270" height="300"></Image>
             <div className={styles.text_container}>Comprehensive Economics
              <MdSaveAlt className={styles.save} size={18}> </MdSaveAlt>
              </div>
          </div>
         </div>
       </div>
    </div>
    );
  };
    export default Library;
