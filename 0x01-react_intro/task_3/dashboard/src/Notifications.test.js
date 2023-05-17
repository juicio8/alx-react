import { shallow } from "enzyme";
import Notifications from "./Notifications";

test("Notifications renders withot crashing", () => {
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
