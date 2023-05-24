import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

Enzyme.configure({ adapter: new Adapter() });

describe("when isHeader is true", () => {
  // test("component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
  //   const component = shallow(
  //     <CourseListRow isHeader={true} textFirstCell="course" />
  //   );
  //   expect(component.find('[colspan="2"]')).toHaveLength(1);
  // });

  test("component renders two cells when textSecondCell is present ", () => {
    const component = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="course"
        textSecondCell="scores"
      />
    );
    expect(component.find("th")).toHaveLength(2);
  });
});

describe("When header is false", () => {
  test("component renders correctly two td elements within a tr element", () => {
    const component = shallow(
      <CourseListRow textFirstCell="course" textSecondCell="scores" />
    );
    expect(component.find("tr")).toHaveLength(1);
    expect(component.find("td")).toHaveLength(2);
  });
});
