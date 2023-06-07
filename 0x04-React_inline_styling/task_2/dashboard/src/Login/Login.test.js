import Login from "./Login";
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

it("Verify that the components renders 2 input tags and 2 label tags", () => {
  const component = shallow(<Login />);
  expect(component.find("input")).toHaveLength(2);
  expect(component.find("label")).toHaveLength(2);
});
