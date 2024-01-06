import React, { useState } from "react";
import get from "../utils/api";
import Navbar from "./Navbar";
import Table from "./Table";
import "../style/resources.css";

function Resources() {
  const classes = get("/courses");
  const [id, setID] = useState(1);

  return (
    <div className="resourceContainer">
      <Navbar classes={classes} onCourseSelect={setID} id={id} />
      <Table id={id} />
    </div>
  );
}

export default Resources;
