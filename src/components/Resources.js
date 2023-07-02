import React from "react";
import get from "../utils/api";

function Resources() {
  console.log(get("/resources/1"));
  console.log(get("/courses"));
  return <div>Create more components to render data</div>;
}

export default Resources;
