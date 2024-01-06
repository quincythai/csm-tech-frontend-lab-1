import React from "react";
import "../style/resources.css";

const Row = ({ weekNum, date, topics, worksheet }) => {
  return (
    <div className="rowContainer">
      <div className="smallCol">Week {weekNum}</div>
      <div className="smallCol">{date}</div>
      <div className="bigCol">{topics}</div>
      <div className="bigCol">{worksheet}</div>
    </div>
  );
};

export default Row;
