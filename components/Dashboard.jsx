import React from "react";
import styles from "../styles/dashboard.module.css";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar></Sidebar>
       <div className={styles.main}>
        <div className={styles.dashboard_bold}>Dashboard</div>
          <div className={styles.box_container}>
            <div className={styles.emoji}>
              <Image src="/Images/Emoji.png" alt="Emoji" width="100" height="100"></Image>
            </div>
           <div className={styles.text_container}> Welcome, Captain Comfort 
           <div className={styles.line1}> <div className={styles.line2}></div></div>
          </div>
          </div>
          <div className={styles.grid_container}>
              <div className={styles.calendar_container}>Oct <p>1</p></div>
              <div className={styles.calendar_container}>Oct <div>2</div></div>
              <div className={styles.calendar_container}>Oct <div>3</div></div>
              <div className={styles.calendar_container}>Oct <div>4</div></div>
              <div className={styles.calendar_container}>Oct <div>5</div></div>
              <div className={styles.calendar_container}>Oct <div>6</div></div>
              <div className={styles.yellow_border}>
               <div className={styles.booking} > Book a session with a tutor </div>
               </div>
            </div>
          </div>
        </div>
    );
  };
    export default Dashboard;
