import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

test("Notifications renders without crashing", () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});
test("Notifications renders three list items", () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find("li")).toHaveLength(3);
});
test("Notifications renders the text Here is the list of notifications", () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find("p").text()).toEqual("Here is the list of notifications");
});
