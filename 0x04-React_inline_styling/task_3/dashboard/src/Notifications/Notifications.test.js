import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
const { StyleSheetTestUtils } = require("aphrodite");

StyleSheetTestUtils.suppressStyleInjection();

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
// test("check that the menu item is being displayed when displayDrawer is false", () => {
//   const wrapper = shallow(<Notifications displayDrawer={false} />);
//   expect(wrapper.find("div.menuItem")).toHaveLength(1);
// });
test("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.find("p")).toHaveLength(0);
});
// test("check that the menu item is being displayed when displayDrawer is true", () => {
//   const wrapper = shallow(<Notifications displayDrawer={true} />);
//   expect(wrapper.find("div.menuItem")).toHaveLength(1);
// });
test("verify that Notifications renders correctly if you pass an empty array or if you don't pass the listNotifications property", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find("li")).toHaveLength(1);
});

// test(" verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
//   const notification = [
//     { id: 1, type: "default", value: "New course available" },
//     { id: 2, type: "urgent", value: "New resume available" },
//     {
//       id: 3,
//       type: "urgent",
//       value: "New resume available",
//       html: { __html: "ll" },
//     },
//   ];
//   const wrapper = shallow(
//     <Notifications displayDrawer={true} listNotifications={notification} />
//   );
//   expect(wrapper.find("NotificationItem")).toHaveLength(3);
// });
test("verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find("li").text()).toBe("No new Notification for now");
});
