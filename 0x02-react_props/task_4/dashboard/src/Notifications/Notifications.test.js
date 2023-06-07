import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

test("Notifications renders without crashing", () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});
// test("Notifications renders three list items", () => {
//   const wrapper = shallow(<Notifications displayDrawer={true} />);
//   expect(wrapper.find("li")).toHaveLength(3);
// });
test("Notifications renders the text Here is the list of notifications", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find("p").text()).toEqual("Here is the list of notifications");
});
test("check that the menu item is being displayed when displayDrawer is false", () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.find("div.menuItem")).toHaveLength(1);
});
test("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.find("p")).toHaveLength(0);
});
test("check that the menu item is being displayed when displayDrawer is true", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find("div.menuItem")).toHaveLength(1);
});
test("check that the div.Notifications is being displayed when displayDrawer is true", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find("div.Notifications")).toHaveLength(1);
});
