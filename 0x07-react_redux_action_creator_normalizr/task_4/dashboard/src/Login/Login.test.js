import Login from "./Login";
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();
describe("Login", () => {
  it("Verify that the components renders 2 input tags and 2 label tags", () => {
    const component = shallow(<Login />);
    expect(component.find("input")).toHaveLength(3);
    expect(component.find("label")).toHaveLength(2);
  });
  it("verify that the submit button is disabled by default", () => {
    const component = shallow(<Login />);
    // const state = component.state();
    const btn = component.find('input[type="submit"]');

    expect(btn.prop("disabled")).toBe(true);
  });
  it("verify that after changing the value of the two inputs, the button is enabled", () => {
    const component = shallow(<Login />);
    // const state = component.state();
    const btn = component.find('input[type="submit"]');

    component.find("#email").simulate("change", { target: { value: "Hello" } });
    component
      .find("#password")
      .simulate("change", { target: { value: "World" } });

    expect(btn.prop("disabled")).toBe(true);
  });
});
