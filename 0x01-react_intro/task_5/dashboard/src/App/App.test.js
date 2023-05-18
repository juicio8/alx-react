import { shallow } from "enzyme";
import App from "./App";

test("App renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
test("App renders a div with a class App-header", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div.App-header")).toHaveLength(1);
});
test("App renders a div with a class App-body", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div.App-body")).toHaveLength(1);
});
test("App renders a div with a class App-footer", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("div.App-footer")).toHaveLength(1);
});
