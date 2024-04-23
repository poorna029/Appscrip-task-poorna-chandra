import React, { useState } from "react";
import styles from "./index.module.css";

const EachFilter = ({ name }) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <hr className={styles.hr} />
      <div className={styles.filter_headings}>
        <h3>{name}</h3>
        <ion-icon
          name={!open ? "chevron-down-outline" : "chevron-up-outline"}
          onClick={() => setOpen((pre) => !pre)}
        ></ion-icon>
      </div>
      <p className={styles.all_text}>All</p>
      {open && (
        <header className={styles.check}>
          <div>
            <input type="checkbox" id="kids" />
            <label for="kids">kids</label>
          </div>
          <div>
            <input type="checkbox" id="woman" />
            <label for="woman">Women</label>
          </div>
          <div>
            <input type="checkbox" id="men" />
            <label for="men">Men</label>
          </div>
        </header>
      )}
    </div>
  );
};

export default EachFilter;
