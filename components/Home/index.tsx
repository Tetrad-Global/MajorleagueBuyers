import React from "react";
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

const HomeIndex = () => {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id tellus est. Duis a nibh id arcu vehicula iaculis id
              vitae dolor. Aliquam diam urna, aliquet sed ligula in, tempor
              malesuada nibh. Suspendisse non vulputate nisl. Quisque mauris
              turpis, iaculis at accumsan eu, lobortis et leo. Duis a nibh id
              arcu vehicula iaculis id vitae dolor. Aliquam diam urna, aliquet
              sed ligula in, tempor malesuada nibh. Suspendisse non vulputate
              nisl
            </text>
            <div className={styles.box3}>
              <div className={styles.box}>
                <Image
                  src={caretaker}
                  alt="icon"
                  className={styles.icon}
                ></Image>
                <text className={styles.btext}>
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </text>
              </div>
              <div className={styles.box}>
                <Image
                  src={caretaker}
                  alt="icon"
                  className={styles.icon}
                ></Image>
                <text className={styles.btext}>
                  Lorem ipsum dolor sit amet, consectetur{" "}
                </text>
              </div>
              <div className={styles.box}>
                <Image
                  src={caretaker}
                  alt="icon"
                  className={styles.icon}
                ></Image>
                <text className={styles.btext}>
                  Lorem ipsum dolor sit amet, consectetur{" "}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus est. Duis a nibh id arcu vehicula iaculis id vitae dolor. Aliquam diam urna, aliquet sed ligula in, tempor malesuada nibh. Suspendisse non vulputate nisl. Quisque mauris turpis, iaculis at accumsan 
              </text>
            </div>
          </div>
          <div className={styles.boxCont}>
            <text className={styles.number}>02</text>
            <div className={styles.container}>
            <text className={styles.contHead}>Receive Your Offer</text>
              <Image src={img2} alt="banner" className={styles.banner}></Image>
              <text className={styles.contPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus est. Duis a nibh id arcu vehicula iaculis id vitae dolor. Aliquam diam urna, aliquet sed ligula in, tempor malesuada nibh. Suspendisse non vulputate nisl. Quisque mauris turpis, iaculis at accumsan 
              </text>
            </div>
          </div>
          <div className={styles.boxCont}>
            <text className={styles.number}>03</text>
            <div className={styles.container}>
            <text className={styles.contHead}>Request Offer</text>
              <Image src={img3} alt="banner" className={styles.banner}></Image>
              <text className={styles.contPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id tellus est. Duis a nibh id arcu vehicula iaculis id vitae dolor. Aliquam diam urna, aliquet sed ligula in, tempor malesuada nibh. Suspendisse non vulputate nisl. Quisque mauris turpis, iaculis at accumsan 
              </text>
            </div>
          </div>
        </div>

        <div className={styles.p3bot}>
          <div className={styles.callBtn}>
          Call (123) 456-7890
          </div>
        </div> 
      </div>

      {/*<div className={styles.frame18}>
        <div className={styles.logo}>
          <text className={styles.log}>
            LOGO <br/> GOES <br/> HERE
          </text>
        </div>
        <div className={styles.fRight}>
          <ul className={styles.rList}>
            <li className={styles.rLi}>
              <Image src={right} alt="right" className={styles.right}></Image>
              <text className={styles.lText}>
              We Can Sell Your House Fast
              </text>
            </li>
            <li className={styles.rLi}>
              <Image src={right} alt="right" className={styles.right}></Image>
              <text className={styles.lText}>
              We Make The Process Easy
              </text>
            </li>
            <li className={styles.rLi}>
              <Image src={right} alt="right" className={styles.right}></Image>
              <text className={styles.lText}>
              You Won’t Pay Hidden Fees
              </text>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.page4}>
        <div className={styles.p4div1}>
          <text className={styles.p4head}>We Buy Houses For Cash</text>
          <text className={styles.p4tag}>At Want To Sell Now, we never say no to a home that is not in perfect condition. We buy all types of houses to help you close quickly and get the most money for your home!</text>
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
        <div className={styles.callBtn}>
          Call (123) 456-7890
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomeIndex;
