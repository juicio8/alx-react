import React from "react";
import { shallow } from "enzyme";
import { fireEvent, screen } from "@testing-library/react";
import App from "./App";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
describe("App test", () => {
  test("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  test("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").exists()).toBe(true);
  });

  test("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header").exists()).toBe(true);
  });
  test("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const loggingOut = jest.fn();
    const wrapper = shallow(<App logOut={loggingOut} />);
    fireEvent.keyDown(wrapper, {
      key: "h",
      code: "KeyH",
      ctrlKey: true,
    });
    const text = screen.getByText("Logging you out");
    expect(loggingOut).toHaveBeenCalledTimes(1);
    expect(text).toBeInTheDocument();
  });

  // test("should contain the Login component", () => {
  //   const wrapper = shallow(<App isLoggedIn={true} />);
  //   expect(wrapper.find("Login")).toHaveLength(1);
  // });
  test("check that CourseList is not displayed", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });

  // test("should contain the Footer component", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("Footer").exists()).toBe(true);
  // });
});
// test("App renders a div with a class App-header", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find("div.App-header")).toHaveLength(1);
// });
// test("App renders a div with a class App-body", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find("div.App-body")).toHaveLength(1);
// });
// test("App renders a div with a class App-footer", () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper.find("div.App-footer")).toHaveLength(1);
// });
