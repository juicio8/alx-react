import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import CourseList from "./CourseList";

Enzyme.configure({ adapter: new Adapter() });
describe("renders CourseList", () => {
  beforeEach(() => {
    ;
  });
  test("renders CourseList component without crashing", () => {
    const component = shallow(<CourseList />);
    expect(component.exists()).toBe(true);
  });
  test("renders 5 different component", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ]
    const component = shallow(<CourseList listCourses={listCourses} />);
    expect(component.find("CourseListRow")).toHaveLength(5);
  });

  test("verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property", () => {
    const component = shallow(<CourseList listCourses={[]} />);
    expect(component.find("tr").text()).toEqual("No course available yet");
  });
  test("Add a new test to verify that when you pass a list of courses, the component renders it correctly", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];
    const component = shallow(<CourseList listCourses={listCourses} />);
    expect(component.find("CourseListRow")).toHaveLength(5);
  });
});
