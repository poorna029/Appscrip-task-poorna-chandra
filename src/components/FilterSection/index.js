import React from "react";
import styles from "./index.module.css";
import CombinedFilter from "../CombinedFilters";

const FilterSection = () => {
  return (
    <div>
      <div className={styles.inp_lab}>
        <input type="checkbox" for="customizable" />
        <label>CUSTOMIZABLE</label>
      </div>
      <CombinedFilter />
    </div>
  );
};

export default FilterSection;
