import React from "react";
import styles from "./index.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <div className={styles.mainDesk}>
      <div className={styles.top}>
        <div className={styles.left}>
          <text className={styles.tag}>
            Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
            aliquam{" "}
          </text>
          <div className={styles.icons}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.row}>
            <text className={styles.head}>Product</text>
            <ul className={styles.ul}>
              <li className={styles.li}>Features</li>
              <li className={styles.li}>Pricing</li>
              <li className={styles.li}>Case studies</li>
              <li className={styles.li}>Reviews</li>
              <li className={styles.li}>Updates</li>
            </ul>
          </div>
          <div className={styles.row}>
            <text className={styles.head}>Company</text>
            <ul className={styles.ul}>
              <li className={styles.li}>About</li>
              <li className={styles.li}>Contact us</li>
              <li className={styles.li}>Careers</li>
              <li className={styles.li}>Culture</li>
              <li className={styles.li}>Blog</li>
            </ul>
          </div>
          <div className={styles.row}>
            <text className={styles.head}>Support</text>
            <ul className={styles.ul}>
              <li className={styles.li}>Getting started</li>
              <li className={styles.li}>Help center</li>
              <li className={styles.li}>Server status</li>
              <li className={styles.li}>Report a bug</li>
              <li className={styles.li}>Chat support</li>
            </ul>
          </div>
          <div className={styles.row}>
            <text className={styles.head}>Contact us</text>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <MailOutlineIcon /> contact@company.com
              </li>
              <li className={styles.li}>
                <PhoneIcon /> (414) 687 - 5892
              </li>
              <li className={styles.li}>
                <LocationOnIcon />
                <text className={styles.location}>
                  794 Mcallister St <br /> San Francisco, 94102
                </text>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.bottom}>
        <text className={styles.b_text_left}>
          Copyright © 2022 BRIX Templates
        </text>
        <div className={styles.b_text_right}>
          <text className={styles.t}>All Rights Reserved</text>
          <div className={styles.vrl}></div>
          <text className={styles.t_link}>Terms and Condition</text>
          <div className={styles.vrl}></div>
          <text className={styles.t_link}>Privacy Policy</text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
