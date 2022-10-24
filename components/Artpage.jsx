import React from "react";
import styles from "../styles/art.module.css";
import Image from "next/image";
import Link from "next/link";


const Artpage = () => {
  return (
    <div className={styles.art}>
     <div className={styles.department}>Art</div>
     <div className={styles.state}>Welcome to the World of art. Choose your Subject</div>
       
      <div className={styles.grid_container}>
          <div className={styles.box_container}> 
            <div> <Image src="/Images/Law.png" alt="Topic" width="300" height="200"></Image> <div className={styles.topic_text}> Law</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Democracy.png" alt="Topic" width="300" height="200"></Image> <div className={styles.topic_text}>Democracy</div><div className={styles.subject}>Political Science </div></div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Election.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Election</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Judicial.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Judicial System</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Federalism.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Federalism</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Judicial.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Judicial System</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Law.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Law</div><div className={styles.subject}>Political Science</div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Democracy.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Democracy</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Election.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Election</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Democracy.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Democracy</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Judicial.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Judicial System</div><div className={styles.subject}>Political Science </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Law.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Law</div><div className={styles.subject}>Political Science </div></div>
          </div>
      </div>
    </div>

  );
};

export default Artpage;
