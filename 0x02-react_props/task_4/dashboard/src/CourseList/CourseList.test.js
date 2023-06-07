import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import CourseList from "./CourseList";

Enzyme.configure({ adapter: new Adapter() });

test("renders CourseList component without crashing", () => {
  const component = shallow(<CourseList />);
  expect(component.exists()).toBe(true);
});
test("renders 5 different component", () => {
  const component = shallow(<CourseList />);
  expect(component.find("CourseListRow")).toHaveLength(5);
});
