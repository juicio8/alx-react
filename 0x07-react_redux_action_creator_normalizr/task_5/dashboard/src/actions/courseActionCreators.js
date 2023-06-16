import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index,
  };
};

export const unselectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
};

// export const boundSelectCourse = (courseId) => {
//   return dispatch(selectCourse(courseId));
// };
// export const boundUnselectCourse = (courseId) => {
//   return dispatch(unselectCourse(courseId));
// };
