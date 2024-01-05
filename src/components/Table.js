import React from "react";
import Row from "./Row";
import get from "../utils/api";

const Table = ({ id }) => {
  const data = get("/resources/" + id);
  console.log(data);
  return (
    <div>
      <Row
        weekNum={"#"}
        date={"Date"}
        topics={"Topics"}
        worksheet={"Worksheet"}
      />
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
