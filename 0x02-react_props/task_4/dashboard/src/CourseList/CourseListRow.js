import React from "react";
import PropTypes from "prop-types";
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const style =
    isHeader && textSecondCell
      ? { borderTop: "1px solid", borderBottom: "1px solid", textAlign: "left" }
      : { "": "" };
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
CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textSecondCell: PropTypes.string,
  textFirstCell: PropTypes.string,
};
CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "Scores",
};

export default CourseListRow;
