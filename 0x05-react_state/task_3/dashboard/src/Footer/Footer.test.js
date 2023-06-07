import React from "react";
import Footer from "./Footer";
import { shallow, mount } from "enzyme";
import { AppContext } from "../App/AppContext";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
const { StyleSheetTestUtils } = require("aphrodite");

Enzyme.configure({ adapter: new Adapter() });

StyleSheetTestUtils.suppressStyleInjection();
describe("Footer", () => {
  it("Verify that the components at the very least render the text Copyright", () => {
    const component = shallow(<Footer />);
    expect(component.text()).toContain("Copyright");
  });
  it("verify that the link is not displayed when the user is logged out within the context", () => {
    const component = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "",
            password: "",
            isLoggedIn: false,
          },
          logOut: () => {},
        }}
      >
        <Footer />
      </AppContext.Provider>
    );
    const link = component.find("p.contact");
    expect(link).toHaveLength(0);
  });
  it("verify that the link is displayed when the user is logged in within the context", () => {
    const component = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "leroy",
            password: "sane",
            isLoggedIn: true,
          },
          logOut: () => {},
        }}
      >
        <Footer />
      </AppContext.Provider>
    );
    const link = component.find("p.contact");
    expect(link).toHaveLength(1);
  });
});
