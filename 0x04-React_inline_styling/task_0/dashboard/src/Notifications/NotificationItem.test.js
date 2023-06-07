import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

test("Notifications renders without crashing", () => {
  const wrapper = shallow(<NotificationItem type="default" value="course" />);
  expect(wrapper.exists()).toBe(true);
});

test("renders correct HTML when type and value props are provided", () => {
  const value = "test";
  const wrapper = shallow(<NotificationItem type="default" value={value} />);

  expect(wrapper.text()).toEqual(value);
  expect(wrapper.find('[data-notification-type="default"]')).toHaveLength(1);
});

// test("renders correct HTML when html prop is provided", () => {
//   const html = { __html: "test" };
//   const wrapper = shallow(<NotificationItem html={html} type="default" />);

//   expect(wrapper.html()).toContain("test");
// });
