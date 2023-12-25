import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import house2 from "../../public/images/house2.png";
import caretaker from "../../public/images/caretaker.png";
import img1 from "../../public/images/img1.png";
import img2 from "../../public/images/img2.png";
import img3 from "../../public/images/img3.png";
import right from "../../public/images/right.png";
import h1 from "../../public/images/h1.png";
import h2 from "../../public/images/h2.png";
import h3 from "../../public/images/h3.png";
import h4 from "../../public/images/h4.png";
import h5 from "../../public/images/h5.png";
import h6 from "../../public/images/h6.png";
import h7 from "../../public/images/h7.png";
import h8 from "../../public/images/h8.png";
import slide1Img from "../../public/images/slide1Img.jpeg";
import slide2Img from "../../public/images/slide2Img.jpeg";
import slide3Img from "../../public/images/slide3Img.jpeg";

import ReactSimplyCarousel from "react-simply-carousel";

// const testimonials = [
//   {
//     name: "David R.",
//     position: "Marketing Director",
//     text: "Choosing Major League Buyers was the best decision we made for our property sale. The speed at which we received a competitive offer was impressive, but it was their dedication to client satisfaction that stood out. The team's communication and personalized approach made the entire process stress-free. Major League Buyers exceeded our expectations, and we highly recommend their services.",
//     image: slide1Img,
//   },
//   {
//     name: "Sarah M.",
//     position: "South Canton Architecture",
//     text: "Selling our property with Major League Buyers was a game-changer. Their team's professionalism and expertise made the entire process seamless. We received a competitive offer promptly, and the attention to detail in closing the deal exceeded our expectations. Major League Buyers truly delivers on their commitment to excellence!",
//     image: slide2Img,
//   },
//   {
//     name: "Emily P.",
//     position: "Operations Manager",
//     text: "Major League Buyers turned our real estate goals into reality. From the moment we requested an offer, their team demonstrated transparency and efficiency. We were impressed with the tailored offer we received, and the seamless journey from acceptance to closing. Trustworthy, reliable, and results-driven, Major League Buyers is our go-to in the world of real estate.",
//     image: slide3Img,
//   },
// ];

const HomeIndex = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className={styles.main}>
      <div className={styles.page1}>
        <text className={styles.head}>
          Find Your <br /> <span className={styles.purple}>Home</span> With Us
        </text>
        <div className={styles.f1}>
          <form className={styles.form}>
            <div className={styles.top}>
              <text className={styles.t1}>step 1 of 2</text>
              <div className={styles.loaderBack}>
                <div className={styles.loader}>
                  <text>50%</text>
                </div>
              </div>
            </div>
            <label htmlFor="name" className={styles.label}>
              Name *
            </label>
            <input type="text" className={styles.inputB1} />

            <label htmlFor="phone" className={styles.label}>
              Phone *
            </label>
            <input type="text" className={styles.inputB1} />

            <label htmlFor="location" className={styles.label}>
              Property Address *
            </label>
            <input
              type="text"
              placeholder="Enter a location"
              className={styles.inputB1}
            />

            <label htmlFor="street" className={styles.labelB}>
              Street Address
            </label>
            <div className={styles.i_i}>
              <div className={styles.i1}>
                <input type="text" className={styles.inputB2} />
                <text className={styles.c1}>City</text>
              </div>
              <div className={styles.i1}>
                <input type="text" className={styles.inputB2} />
                <text className={styles.c1}>State</text>
              </div>
            </div>
          </form>
          <button className={styles.submit}>Submit</button>
        </div>
      </div>

      <div className={styles.page2}>
        <div className={styles.p2top}>
          <text className={styles.p2head}>Why You Should Sell Now?</text>
        </div>
        <div className={styles.p2cent}>
          <Image src={house2} alt="house2" className={styles.house2}></Image>
          <div className={styles.p2cent_right}>
            <text className={styles.par}>
              In the dynamic landscape of real estate, seizing the opportune
              moment is key to maximizing the value of your property. Major
              League Buyers invites you to embark on a journey of lucrative
              possibilities. Selling now opens doors to unprecedented
              opportunities, ensuring a seamless process guided by our seasoned
              professionals. Don't miss out on the chance to elevate your real
              estate portfolio—discover the advantages of selling with Major
              League Buyers today.
            </text>
            <div className={styles.box3}>
              <div className={styles.box}>
                <Image
                  src={caretaker}
                  alt="icon"
                  className={styles.icon}
                ></Image>
                <text className={styles.btext}>
                  Optimize returns in booming market
                </text>
              </div>
              <div className={styles.box}>
                <Image
                  src={caretaker}
                  alt="icon"
                  className={styles.icon}
                ></Image>
                <text className={styles.btext}>
                  Seize peak market value today.
                </text>
              </div>
              <div className={styles.box}>
                <Image
                  src={caretaker}
                  alt="icon"
                  className={styles.icon}
                ></Image>
                <text className={styles.btext}>
                  Unlock profits with strategic selling.
                </text>
              </div>
            </div>
            <div className={styles.lm_btn}>Learn More</div>
          </div>
        </div>

        <div className={styles.p2bot}>
          <div className={styles.hrBox}>
            <div className={styles.bss}>
              <text className={styles.bhead}>2,652</text>
              <text className={styles.btag}>Cash Offers Made</text>
            </div>
            <div className={styles.bss}>
              <text className={styles.bhead}>98%</text>
              <text className={styles.btag}>Satisfied Customers</text>
            </div>
            <div className={styles.bss}>
              <text className={styles.bhead}>98%</text>
              <text className={styles.btag}>Satisfied Customers</text>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.page3}>
        <div className={styles.p3top}>
          <text className={styles.p3head}>How It Works</text>
        </div>
        <div className={styles.p3cent}>
          <div className={styles.boxCont}>
            <text className={styles.number}>01</text>
            <div className={styles.container}>
              <text className={styles.contHead}>Request Offer</text>
              <Image src={img1} alt="banner" className={styles.banner}></Image>
              <text className={styles.contPara}>
                Navigating the real estate market is simplified with Major
                League Buyers. When you request an offer, our efficient and
                transparent process kicks into gear. Begin by submitting
                essential details about your property, and our expert team will
                swiftly assess its value.
              </text>
            </div>
          </div>
          <div className={styles.boxCont}>
            <text className={styles.number}>02</text>
            <div className={styles.container}>
              <text className={styles.contHead}>Receive Your Offer</text>
              <Image src={img2} alt="banner" className={styles.banner}></Image>
              <text className={styles.contPara}>
                Experience a seamless process with Major League Buyers. Submit
                your property details and swiftly receive a tailored,
                competitive offer. Take the next step in maximizing your real
                estate value.
              </text>
            </div>
          </div>
          <div className={styles.boxCont}>
            <text className={styles.number}>03</text>
            <div className={styles.container}>
              <text className={styles.contHead}>Seal The Deal</text>
              <Image src={img3} alt="banner" className={styles.banner}></Image>
              <text className={styles.contPara}>
                Congratulations on reaching the final step with Major League
                Buyers. Our dedicated team ensures a smooth transition from
                offer to closure. As you finalize the deal, rest assured we're
                your trusted partner in securing the best outcome for your real
                estate transaction.
              </text>
            </div>
          </div>
        </div>

        <div className={styles.p3bot}>
          <div className={styles.callBtn}>Call (123) 456-7890</div>
        </div>
      </div>

      <div className={styles.frame18}>
        <div className={styles.logo}>
          <text className={styles.log}>
            LOGO <br /> GOES <br /> HERE
          </text>
        </div>
        <div className={styles.fRight}>
          <ul className={styles.rList}>
            <li className={styles.rLi}>
              <Image src={right} alt="right" className={styles.right}></Image>
              <text className={styles.lText}>We Can Sell Your House Fast</text>
            </li>
            <li className={styles.rLi}>
              <Image src={right} alt="right" className={styles.right}></Image>
              <text className={styles.lText}>We Make The Process Easy</text>
            </li>
            <li className={styles.rLi}>
              <Image src={right} alt="right" className={styles.right}></Image>
              <text className={styles.lText}>You Won’t Pay Hidden Fees</text>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.page4}>
        <div className={styles.p4div1}>
          <text className={styles.p4head}>We Buy Houses For Cash</text>
          <text className={styles.p4tag}>
            At Want To Sell Now, we never say no to a home that is not in
            perfect condition. We buy all types of houses to help you close
            quickly and get the most money for your home!
          </text>
        </div>
        <div className={styles.p4div2}>
          <div className={styles.blueBox}>
            <Image src={h1} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Downsizing</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h2} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Foreclosure</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h3} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Divorce</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h4} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Bankruptcy</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h5} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Retirement</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h6} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Damaged</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h7} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>Need Repair</text>
          </div>
          <div className={styles.blueBox}>
            <Image src={h8} alt="h" className={styles.h}></Image>
            <text className={styles.blText}>No Equity</text>
          </div>
        </div>
        <div className={styles.p4div3}>
          <div className={styles.callBtn}>Call (123) 456-7890</div>
        </div>
      </div>

      <div className={styles.page5}>
        <text className={styles.p5head}>TESTIMONIALS</text>
        <div className={styles.carousel}>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={3}
          itemsToScroll={1}
          
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              display: "none",
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              display: "none",
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 3,
              itemsToScroll: 0,
              maxWidth: 1440,
            },
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              maxWidth: 1024,
            },
            {
              itemsToShow: 1,
              itemsToScroll: 2,
              maxWidth: 768,
            },
            {
              itemsToShow: 1, 
              itemsToScroll: 1,
              maxWidth: 375,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          <div
            style={{
              marginLeft: "1rem",
              width: "auto",
              height: "auto",
            }}
          >
            <div className={styles.slide}>
              <div className={styles.slTop}>
                <Image
                  src={slide1Img}
                  alt="Pic"
                  className={styles.tPro}
                ></Image>
                <div className={styles.topRight}>
                  <text className={styles.tName}>David R.</text>
                  <text className={styles.tPos}>Marketing Director</text>
                </div>
              </div>
              <div className={styles.slBot}>
                <text className={styles.slidepara}>
                  Choosing Major League Buyers was the best decision we made for
                  our property sale. The speed at which we received a
                  competitive offer was impressive, but it was their dedication
                  to client satisfaction that stood out. The team's
                  communication and personalized approach made the entire
                  process stress-free. Major League Buyers exceeded our
                  expectations, and we highly recommend their services.
                </text>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "1rem",
              width: "auto",
              height: "auto",
            }}
          >
            <div className={styles.slide}>
              <div className={styles.slTop}>
                <Image
                  src={slide2Img}
                  alt="Pic"
                  className={styles.tPro}
                ></Image>
                <div className={styles.topRight}>
                  <text className={styles.tName}>Sarah m.</text>
                  <text className={styles.tPos}>SOUTH CANTON ARCHITECTURE</text>
                </div>
              </div>
              <div className={styles.slBot}>
                <text className={styles.slidepara}>
                  Selling our property with Major League Buyers was a
                  game-changer. Their team's professionalism and expertise made
                  the entire process seamless. We received a competitive offer
                  promptly, and the attention to detail in closing the deal
                  exceeded our expectations. Major League Buyers truly delivers
                  on their commitment to excellence!
                </text>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "1rem", width: "auto", height: "auto" }}>
            <div className={styles.slide}>
              <div className={styles.slTop}>
                <Image
                  src={slide3Img}
                  alt="Pic"
                  className={styles.tPro}
                ></Image>
                <div className={styles.topRight}>
                  <text className={styles.tName}>Emily p.</text>
                  <text className={styles.tPos}>Operations manager</text>
                </div>
              </div>
              <div className={styles.slBot}>
                <text className={styles.slidepara}>
                  Major League Buyers turned our real estate goals into reality.
                  From the moment we requested an offer, their team demonstrated
                  transparency and efficiency. We were impressed with the
                  tailored offer we received, and the seamless journey from
                  acceptance to closing. Trustworthy, reliable, and
                  results-driven, Major League Buyers is our go-to in the world
                  of real estate.
                </text>
              </div>
            </div>
          </div>
        </ReactSimplyCarousel>
        </div>

        {/* <div className={styles.carousel}>
          <div className={styles.slide}>
            <div className={styles.slTop}>
              <Image src={slide1Img} alt="Pic" className={styles.tPro}></Image>
              <div className={styles.topRight}>
                <text className={styles.tName}>David R.</text>
                <text className={styles.tPos}>Marketing Director</text>
              </div>
            </div>
            <div className={styles.slBot}>
              <text className={styles.slidepara}>Choosing Major League Buyers was the best decision we made for our property sale. The speed at which we received a competitive offer was impressive, but it was their dedication to client satisfaction that stood out. The team's communication and personalized approach made the entire process stress-free. Major League Buyers exceeded our expectations, and we highly recommend their services.</text>
            </div>
          </div>

          <div className={styles.slide}>
            <div className={styles.slTop}>
              <Image src={slide2Img} alt="Pic" className={styles.tPro}></Image>
              <div className={styles.topRight}>
                <text className={styles.tName}>Sarah m.</text>
                <text className={styles.tPos}>SOUTH CANTON ARCHITECTURE</text>
              </div>
            </div>
            <div className={styles.slBot}>
              <text className={styles.slidepara}>
              Selling our property with Major League Buyers was a game-changer. Their team's professionalism and expertise made the entire process seamless. We received a competitive offer promptly, and the attention to detail in closing the deal exceeded our expectations. Major League Buyers truly delivers on their commitment to excellence!
              </text>
            </div>
          </div>

          <div className={styles.slide}>
            <div className={styles.slTop}>
              <Image src={slide3Img} alt="Pic" className={styles.tPro}></Image>
              <div className={styles.topRight}>
                <text className={styles.tName}>Emily p.</text>
                <text className={styles.tPos}>Operations manager</text>
              </div>
            </div>
            <div className={styles.slBot}>
              <text className={styles.slidepara}>Major League Buyers turned our real estate goals into reality. From the moment we requested an offer, their team demonstrated transparency and efficiency. We were impressed with the tailored offer we received, and the seamless journey from acceptance to closing. Trustworthy, reliable, and results-driven, Major League Buyers is our go-to in the world of real estate.</text>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeIndex;
