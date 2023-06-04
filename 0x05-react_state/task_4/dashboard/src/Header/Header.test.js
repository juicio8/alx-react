import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { AppContext } from "../App/AppContext";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();

describe("Header", () => {
  it("Verify that the components render img and h1 tags", () => {
    const component = shallow(<Header />);
    expect(component.find("img")).toHaveLength(1);
    expect(component.find("h1")).toHaveLength(1);
  });
  it("Verify that the logoutSection is not created", () => {
    const component = shallow(
      <AppContext.Provider>
        <Header />
      </AppContext.Provider>
    );
    const link = component.find("a.logout");
    expect(link).toHaveLength(0);
  });
  it("Verify that the logoutSection is created", () => {
    const component = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "kkk",
            password: "kkk",
            isLoggedIn: true,
          },
          logOut: () => {},
        }}
      >
        <Header />
      </AppContext.Provider>
    );
    const link = component.find("a.logout");
    expect(link).toHaveLength(1);
  });
  it("Verify that clicking on the link is calling the spy", () => {
    const logOutSpy = jest.fn();
    const component = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "lll",
            password: "lll",
            isLoggedIn: true,
          },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );
    const link = component.find("a.logout");
    link.simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });
});
