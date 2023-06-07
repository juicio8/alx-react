import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

it("Verify that the components render img and h1 tags", () => {
  const component = shallow(<Header />);
  expect(component.find("img")).toHaveLength(1);
  expect(component.find("h1")).toHaveLength(1);
});
