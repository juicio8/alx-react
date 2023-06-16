import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

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
    <tr className={css(styles.tr)}>No course available yet</tr>
  );
  return (
    <table id="CourseList" className={css(styles.CourseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody className={css(styles.tbody)}>{course}</tbody>
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

const styles = StyleSheet.create({
  CourseList: {
    width: "80%",
    margin: "auto",
    border: "1px solid",
    borderCollapse: "collapse",
  },
  th: {
    padding: "0.3rem 0",
  },
  tr: {
    textAlign: "center",
  },
  tbody: {
    textAlign: "left",
  },
});

export default CourseList;
