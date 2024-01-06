import React from "react";
import "../style/resources.css";

const Navbar = ({ classes, onCourseSelect, id }) => {
  return (
    <nav>
      {classes.map((classItem) => (
        <button
          key={classItem.id}
          onClick={() => onCourseSelect(classItem.id)}
          className={classItem.id === id ? "active tab" : "tab"}
        >
          {classItem.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
