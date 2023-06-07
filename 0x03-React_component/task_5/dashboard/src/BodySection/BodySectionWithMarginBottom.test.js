import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
Enzyme.configure({ adapter: new Adapter() });

describe("BodySection test", () => {
  test("shallowing the component should render correctly a BodySection component", () => {
    const component = shallow(
      <BodySectionWithMarginBottom title="love" children="love you" />
    );
    expect(component.find("BodySection")).toHaveLength(1);
    expect(wrapper.find(BodySection).props()).toEqual({ title, children });
  });
});
