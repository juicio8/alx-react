import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

test("App renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
it("should contain the Notifications component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Notifications").exists()).toBe(true);
});

it("should contain the Header component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Header").exists()).toBe(true);
});

it("should contain the Login component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Login").exists()).toBe(true);
});

it("should contain the Footer component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Footer").exists()).toBe(true);
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
test("App renders Notifications component", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("Notifications")).toHaveLength(1);
});
