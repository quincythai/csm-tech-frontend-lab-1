import React from "react";

const Navbar = ({ classes, onCourseSelect }) => {
  return (
    <nav>
      {classes.map((classItem) => (
        <button key={classItem.id} onClick={() => onCourseSelect(classItem.id)}>
          {classItem.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
