import React, { useState } from "react";
import get from "../utils/api";
import Navbar from "./Navbar";
import Table from "./Table";

function Resources() {
  const classes = get("/courses");
  const [id, setID] = useState(1);

  return (
    <>
      <Navbar classes={classes} onCourseSelect={setID} />
      <Table id={id} />
    </>
  );
}

export default Resources;
