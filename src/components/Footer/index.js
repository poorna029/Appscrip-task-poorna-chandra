import React, { useState } from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  const [museState, setMuseState] = useState(false);
  const [followState, setFollowState] = useState(false);
  const [qlState, setQLState] = useState(false);
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
            <div>
              <h2>BE THE FIRST TO KNOW</h2>
              <p className={styles.sign}>
                Sign Up for updates from metta muse.
              </p>
              <p className={styles.sign_hide}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. this is simply dummy text.
              </p>
            </div>
            {/* c2 */}
            <div className={styles.c2}>
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className={styles.inp}
              />
              <button className={styles.btn}>SUBSCRIBE</button>
            </div>
            <hr className={styles.hr2} />
          </div>
          <div className={styles.c34}>
            {/* c3 */}
            <h2 className={styles.cuh}>CONTACT US</h2>
            <h2 className={styles.cuh_hide}>CALL US</h2>
            <div className={styles.cu}>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>

            <hr className={styles.hr2} />

            {/* c4 */}
            <div className={styles.c4}>
              <h2>CURRENCY </h2>
              <div className={styles.c44}>
                <img
                  src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713678393/United_States_of_America_US_f4g6oz.jpg"
                  alt=""
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.star}
                >
                  <path
                    d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z"
                    fill="white"
                  />
                </svg>

                <h3>USD</h3>
              </div>
              <p className={styles.usdp}>
                Transactions will be completed in Euros and a currency reference
                is available on hover
              </p>
            </div>
          </div>
        </div>
        <hr className={styles.foo_ter_hr} />
        {/* section2 */}
        <div className={styles.section2}>
          {/*c5  */}
          <div className={styles.qlmobile}>
            <div className={styles.qlmobile_inside}>
              <h2>metta muse</h2>
              <ion-icon
                name={
                  !museState ? "chevron-down-outline" : "chevron-up-outline"
                }
                onClick={() => {
                  setMuseState((pre) => !pre);
                }}
              ></ion-icon>
            </div>
          </div>
          <div className={!museState ? styles.c5 : styles.c5_hide}>
            <h2 className={museState ? styles.c5 : styles.c5_hide}>
              metta muse
            </h2>
            <p>About</p>
            <p>Stores</p>
            <p>Artisans</p>
            <p>Boutiqques</p>
            <p>Contact Us</p>
            <p>EU Compliance Docs</p>
          </div>
          <hr className={styles.hr2} />

          {/* c6 */}
          <div className={styles.qlmobile}>
            <div className={styles.qlmobile_inside}>
              <h2>QUICK LINKS</h2>
              <ion-icon
                name={!qlState ? "chevron-down-outline" : "chevron-up-outline"}
                onClick={() => {
                  setQLState((pre) => !pre);
                }}
              ></ion-icon>
            </div>
          </div>
          <div className={!qlState ? styles.c6 : styles.c6_hide}>
            <h2 className={qlState ? styles.c6 : styles.c6_hide}>
              QUICK LINKS
            </h2>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <hr className={styles.hr2} />
          {/* c7 */}

          <div className={styles.qlmobile}>
            <div className={styles.qlmobile_inside}>
              <h2>FOLLOW US</h2>
              <ion-icon
                name={
                  !followState ? "chevron-down-outline" : "chevron-up-outline"
                }
                onClick={() => {
                  setFollowState((pre) => !pre);
                }}
              ></ion-icon>
            </div>
          </div>
          <div className={styles.fu}>
            <div className={!followState ? styles.c7 : styles.c7_hide}>
              <h2 className={followState ? styles.c7 : styles.c7_hide}>
                FOLLOW US
              </h2>
              <img
                className={styles.sm}
                src="https://res.cloudinary.com/dbavdyd21/image/upload/v1713637355/Frame_28_oyt4ey.png"
                alt=""
              />
            </div>
            {/* c8 */}

            <div className={styles.c8}>
              <h2 className={styles.muaa}>metta muse ACCEPTS</h2>
              <div className={styles.images}>
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
        <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
