import React from "react";
import styles from "../styles/commercial.module.css";
import Image from "next/image";
import Link from "next/link";

const Commercialpage = () => {
  return (
    <div className={styles.commercial}>
     <div className={styles.department}>Commercial</div>
     <div className={styles.state}>Welcome to the World of commerce. Choose your Subject</div>
      <div className={styles.grid_container}>
          <div className={styles.box_container}> 
            <div> <Image src="/Images/Accounting.png" alt="Topic" width="300" height="200"></Image> <div className={styles.topic_text}> Accounting</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/account.png" alt="Topic" width="300" height="200"></Image> <div className={styles.topic_text}>Partnership accounting</div><div className={styles.subject}>Accounting </div></div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Sector.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Public Sector</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Finance.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Finance</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Sector.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Public Sector</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Finance.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Finance</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/Accounting.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Accounting</div><div className={styles.subject}>Accounting</div> </div>
          </div>
          <div className={styles.box_container}>
            <div> <Image src="/Images/account.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Partnership Accounting</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Accounting.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Accounting</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/account.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Partnership Accounting</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Finance.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Finance</div><div className={styles.subject}>Accounting </div> </div>
          </div>
          <div  className={styles.box_container}>
            <div> <Image src="/Images/Accounting.png" alt="Topic" width="300" height="200"></Image><div className={styles.topic_text}>Accounting</div><div className={styles.subject}>Accounting </div></div>
          </div>
      </div>
    </div>

  );
};

export default Commercialpage;
