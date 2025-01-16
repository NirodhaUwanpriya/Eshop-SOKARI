import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/03frugal-srilanka01-videoSixteenByNineJumbo1600.jpg)"
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#ffffff] font-[600] capitalize`}
        >
          Discover Unique Handcrafted Creations
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#ffffffba]">
        Experience the charm of exquisite handmade products crafted with care and precision. 
        Browse through a diverse collection of unique items that reflect rich 
        traditions and exceptional artistry. <br /> Whether you're searching for the perfect gift or a timeless piece for your home, our platform connects you with authentic craftsmanship from local artisans. <br /> Shop with purpose and celebrate creativity, culture, and individuality. 
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5 bg-dark-blue`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
