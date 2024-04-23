import React, { useState } from "react";

import styles from "./index.module.css";
import FilterSection from "../FilterSection";
import Products from "../Products";

const Filter = () => {
  const [isFilterSecOpen, setisFilterSecOpen] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.fil}>
      <div className={styles.first_sec}>
        <hr className={styles.hr} />
        <div className={styles.filter_head}>
          <p className={styles.filter}>FILTER</p>
          <hr className={styles.hrv} />
          <div className={styles.filter_left}>
            <p>3428 ITEMS</p>
            <div className={styles.hide}>
              <ion-icon
                name={
                  isFilterSecOpen
                    ? "chevron-back-outline"
                    : "chevron-forward-outline"
                }
              ></ion-icon>

              <button
                className={styles.btn}
                onClick={() => setisFilterSecOpen((pre) => !pre)}
              >
                {isFilterSecOpen ? "HIDE FILTER" : "SHOW FILTER"}
              </button>
            </div>
          </div>
          <div
            className={
              isFilterOpen ? styles.filter_right_hide : styles.filter_right
            }
            onClick={() => setIsFilterOpen((pre) => !pre)}
          >
            <p>{value !== "" ? value : "RECOMMENDED"}</p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </div>
          {isFilterOpen && (
            // <div className={styles.filter_right_parent}>
            <div ClassName={styles.filter_popup}>
              <div
                onClick={() => {
                  setValue("RECOMMENDED");
                  setIsFilterOpen((pre) => !pre);
                }}
                className={value === "RECOMMENDED" ? "hightlight" : ""}
              >
                {value === "RECOMMENDED" ? (
                  <div className={styles.option}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                    <p>RECOMMENDED</p>
                  </div>
                ) : (
                  <p>RECOMMENDED</p>
                )}
              </div>
              {/* 1 */}
              <div
                onClick={() => {
                  setValue("NEWEST FIRST");
                  setIsFilterOpen((pre) => !pre);
                }}
                className={value === "NEWEST FIRST" ? "hightlight" : ""}
              >
                {value === "NEWEST FIRST" ? (
                  <div className={styles.option}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                    <p>NEWEST FIRST</p>
                  </div>
                ) : (
                  <p>NEWEST FIRST</p>
                )}
              </div>
              {/* 22 */}
              <div
                onClick={() => {
                  setValue("POPULAR");
                  setIsFilterOpen((pre) => !pre);
                }}
                className={value === "POPULAR" ? "hightlight" : ""}
              >
                {value === "POPULAR" ? (
                  <div className={styles.option}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                    <p>POPULAR</p>
                  </div>
                ) : (
                  <p>POPULAR</p>
                )}
              </div>
              {/* 33 */}
              <div
                onClick={() => {
                  setValue("PRICE:HIGH TO LOW");
                  setIsFilterOpen((pre) => !pre);
                }}
                className={value === "PRICE:HIGH TO LOW" ? "hightlight" : ""}
              >
                {value === "PRICE:HIGH TO LOW" ? (
                  <div className={styles.option}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                    <p>PRICE:HIGH TO LOW</p>
                  </div>
                ) : (
                  <p>PRICE:HIGH TO LOW</p>
                )}
              </div>
              {/* 44 */}
              <div
                onClick={() => {
                  setValue("PRICE:LOW TO HIGH");
                  setIsFilterOpen((pre) => !pre);
                }}
                className={value === "PRICE:LOW TO HIGH" ? "hightlight" : ""}
              >
                {value === "PRICE:LOW TO HIGH" ? (
                  <div className={styles.option}>
                    <ion-icon name="checkmark-outline"></ion-icon>
                    <p>PRICE:LOW TO HIGH</p>
                  </div>
                ) : (
                  <p>PRICE:LOW TO HIGH</p>
                )}
              </div>
            </div>
            // </div>
          )}
        </div>

        <hr className={styles.hr} />
      </div>

      {/* second part */}
      <div className={styles.pro_fil}>
        {isFilterSecOpen && <FilterSection />}
        <Products />
      </div>
    </div>
  );
};

export default Filter;
