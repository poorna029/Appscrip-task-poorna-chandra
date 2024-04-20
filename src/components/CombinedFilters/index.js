import React from "react";
import EachFilter from "../EachFilter";

const CombinedFilter = () => {
  return (
    <>
      <EachFilter name="IDEAL FOR" />
      <EachFilter name="OCCASION" />
      <EachFilter name="WORK" />
      <EachFilter name="FABRIC" />
      <EachFilter name="SEGMENT" />
      <EachFilter name="RAW MATERIALS" />
      <EachFilter name="PATTERN" />
    </>
  );
};

export default CombinedFilter;
