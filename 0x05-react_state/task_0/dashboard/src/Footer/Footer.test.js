import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

it("Verify that the components at the very least render the text Copyright", () => {
  const component = shallow(<Footer />);
  expect(component.text()).toContain("Copyright");
});
