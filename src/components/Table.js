import React from "react";
import Row from "./Row";
import get from "../utils/api";
import "../style/resources.css";

const Table = ({ id }) => {
  const data = get("/resources/" + id);
  // console.log(data);
  return (
    <div class="table">
      <div className="header">
        <div className="smallCol">Week</div>
        <div className="smallCol">Date</div>
        <div className="bigCol">Topics</div>
        <div className="bigCol">Worksheet and Solutions</div>
      </div>
      {data.map((week) => (
        <Row
          key={week.id}
          date={week.date}
          weekNum={week.weekNum}
          topics={week.topics}
          worksheet={week.worksheet}
        />
      ))}
    </div>
  );
};

export default Table;
