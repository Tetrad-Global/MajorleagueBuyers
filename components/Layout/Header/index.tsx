import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import humb from "../../../public/images/humb.svg";
import logo from "../../../public/images/logo.svg";


const Header = () => {
  const clickHum = () => {
    console.log("click");
  };

  return (
    <>
      <div className={styles.mainDesk}>
      <Image src={logo} alt="logo"></Image>
        <ul className={styles.links}>
          <li className={styles.s_li}>Home</li>
          <li className={styles.li}>Why</li>
          <li className={styles.li}>How</li>
          <li className={styles.li}>About</li>
          <li className={styles.li}>Testimonials</li>

        </ul>
        <div className={styles.s_listingBtn}>Sell Your Home</div>
      </div>

      <div className={styles.mobNav}>
        
        <div className={styles.humCol}>
      <Image src={logo} alt="logo"></Image>

          <Image
            src={humb}
            alt="humberger"
            className={styles.icon}
            onClick={clickHum}
          ></Image>
        </div>
        <div className={styles.humMenu}>
          <ul className={styles.links}>
            <li className={styles.s_li}>Home</li>
            <li className={styles.li}>Properties</li>
            <li className={styles.li}>Agents</li>
            <li className={styles.li}>Blog</li>
          </ul>
          <div className={styles.s_listingBtn}>Select Listing</div>
        </div>
      </div>
    </>
  );
};

export default Header;
