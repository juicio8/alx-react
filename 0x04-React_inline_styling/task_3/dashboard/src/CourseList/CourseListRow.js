import React from "react";
import { StyleSheet, css } from "aphrodite";
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
    <tr style={style} className={css(styles.tr)}>
      {isHeader && !textSecondCell ? (
        <th colSpan={2} className={css(styles.th)}>
          {textFirstCell}
        </th>
      ) : isHeader && textSecondCell ? (
        <>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
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

export default CourseListRow;
