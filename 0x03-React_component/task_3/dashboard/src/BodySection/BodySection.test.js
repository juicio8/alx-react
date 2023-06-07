import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import BodySection from "./BodySection";

Enzyme.configure({ adapter: new Adapter() });

describe("BodySection test", () => {
  test("render correctly the children and one h2 element", () => {
    const component = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(component.find("h2").text()).toEqual("test title");
    expect(component.find("p").text()).toEqual("test children node");
  });
});
