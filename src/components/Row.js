import React from "react";
const Row = ({ weekNum, date, topics, worksheet }) => {
  return (
    <div>
      <ul>
        <li>Week {weekNum}</li>
        <li>{date}</li>
        <li>{topics}</li>
        <li>{worksheet}</li>
      </ul>
    </div>
  );
};

export default Row;
