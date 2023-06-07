import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";

const CourseList = ({ listCourses }) => {
  const course = listCourses.length ? (
    listCourses.map((courses) => (
      <CourseListRow
        key={courses.id}
        textFirstCell={courses.name}
        textSecondCell={courses.credit}
        isHeader={false}
      />
    ))
  ) : (
    <tr>No course available yet</tr>
  );
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>{course}</tbody>
    </table>
  );
};
let CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};
CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
