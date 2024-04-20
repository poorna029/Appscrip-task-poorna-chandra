import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer_bg}>
      {/* first two sections  */}
      {/* section1 contains c1 c2 c3 c4 */}
      {/* for desktop c12 and c34 are row, col for mobile */}
      {/* --------------------------------------------- */}
      {/* section2 contains c5 c6 c7 c8 */}
      {/* c5,c6, c78  are row and for mobile are col  */}
      <div className={styles.both_sections}>
        {/* section1 */}
        <div className={styles.section1}>
          <div className={styles.c12}>
            {/*c1  */}
            <div className="c1">
              <h2>BE THE FIRST TO KNOW</h2>
              <p>Sign Up for updates from metta muse.</p>
            </div>
            {/* c2 */}
            <div className="c2">
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className={styles.inp}
              />
              <button className={styles.btn}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.c34}>
            {/* c3 */}
            <div className="c3">
              <h2>CONTACT US</h2>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>
            {/* c4 */}
            <div className="c4">
              <h2>CURRENCY </h2>
              <div className="c44">
                <img src="" alt="" />
                <h3>USD</h3>
              </div>
              <p>
                Transactions will be completed in Euros and a currency reference
                is available on hover
              </p>
            </div>
          </div>
        </div>
        <hr className="footer_hr" />
        {/* section2 */}
        <div className={styles.section2}>
          {/*c5  */}
          <div className={styles.c5}>
            <h2>metta muse</h2>
            <p>About</p>
            <p>Stores</p>
            <p>Artisans</p>
            <p>Boutiqques</p>
            <p>Contact Us</p>
            <p>EU Compliance Docs</p>
          </div>
          {/* c6 */}
          <div className={styles.c6}>
            <h2>QUICK LINKS</h2>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          {/* c7 */}
          <div className={styles.c7}>
            <h2>FOLLOW US</h2>
            <img
              className={styles.sm}
              src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713637355/Frame_28_oyt4ey.png"
              alt=""
            />
            {/* c8 */}
            <div className={styles.c8}>
              <h2>metta muse ACCEPTS</h2>
              <div>
                <img
                  className={styles.imgs}
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713636207/Group_136188_u3obpl.png"
                  alt=""
                />
                <img
                  className={styles.imgs}
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713636618/Group_136190_f6duiw.jpg"
                  alt=""
                />
                <img
                  className={styles.imgs}
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713636765/Group_136192_r2siuq.jpg"
                  alt=""
                />
                <img
                  className={styles.imgs}
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713637250/Group_136193_qda5w8.jpg"
                  alt=""
                />
                <img
                  className={styles.imgs}
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713637312/Group_136194_vchld4.jpg"
                  alt=""
                />
                <img
                  className={styles.imgs}
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713637390/Group_136195_awiyyd.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <p>Copyright c 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
