import { selectCourse, unselectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

test("selectCourse action creator", () => {
  const index = 1;
  const action = selectCourse(index);

  expect(action).toEqual({ type: SELECT_COURSE, index: index });
});

test("unselectCourse action creator", () => {
  const index = 1;
  const action = unselectCourse(index);

  expect(action).toEqual({ type: UNSELECT_COURSE, index: index });
});
