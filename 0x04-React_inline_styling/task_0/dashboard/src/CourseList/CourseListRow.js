import React from "react";
import PropTypes from "prop-types";
const CourseListRow = ({
  isHeader,
  textFirstCell,
  textSecondCell,
  listCourses,
}) => {
  const style =
    isHeader && textSecondCell
      ? {
          borderTop: "1px solid",
          borderBottom: "1px solid",
          textAlign: "left",
          backgroundColor: "#deb5b545",
        }
      : { backgroundColor: "#f5f5f5ab" };
  return (
    <tr style={style}>
      {isHeader && !textSecondCell ? (
        <th colSpan={2}>{textFirstCell}</th>
      ) : isHeader && textSecondCell ? (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textFirstCell: PropTypes.string,
};
CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "Scores",
};

export default CourseListRow;
