import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

describe("BodySection test", () => {
  test("shallowing the component should render correctly a BodySection component", () => {
    const component = shallow(
      <BodySectionWithMarginBottom title="love" children="love you" />
    );
    expect(component.find("BodySection")).toHaveLength(1);
    expect(component.find("BodySection").props()).toEqual({
      children: "love you",
      title: "love",
    });
  });
});
