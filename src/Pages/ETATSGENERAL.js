import React from "react";
import CompDate from "../components/CompDate";

const ETATSGENERAL = ({ title }) => {
  return (
    <div className="SectionOne">
      <h1> {title} </h1>
      <div>
        <CompDate />
      </div>
    </div>
  );
};

export default ETATSGENERAL;
