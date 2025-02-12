import React from 'react'
import styles from '../styles/Categories.module.css'
import Card from './Card'
import Image from 'next/image'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Categories = () => {


  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, [])



  return (
    <div className={styles.categories}>
        <div className={styles.category_container}>
            <div className={styles.category_head} data-aos="fade-right">
                <h1>DEPARTMENTS</h1>
                <p>We have videos on topics across the different departments.</p>
                <div className={styles.y_head_img}>
                   <Image src='/Images/Ellipse23.png' width={25} height={25} alt='ellipse.png'  ></Image> 
                </div>
                
            </div>
            <div className={styles.category_body} data-aos="fade-left">
                <Card src={'/Images/microscope.png'} background={'#F55376'} department='Science' alt='microscope.png'></Card>
                <Card src={'/Images/market1.png'} background={'#64B4BF'} department='Commercial' alt='market.png'></Card>
                <Card src={'/Images/art-studies.png'} background={'#FABD17'} department='Art' alt='art.png'></Card>

            </div>
        </div>
    </div>
  )
}

export default Categories