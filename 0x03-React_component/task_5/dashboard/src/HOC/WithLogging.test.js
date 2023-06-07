import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging", () => {
  const MockComponent = () => <div>Mock Component</div>;

  it('should log mount and unmount messages with "Component" for pure HTML element', () => {
    const consoleSpy = jest.spyOn(console, "log");
    const WrappedComponent = WithLogging(() => <p>Hello, World!</p>);
    const wrapper = mount(<WrappedComponent />);
    const componentName = WrappedComponent.displayName || "Component";

    expect(consoleSpy).toHaveBeenCalledWith(
      `Component ${componentName} is mounted on componentDidMount()`
    );

    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      `Component ${componentName} is going to unmount on componentWillUnmount()`
    );

    consoleSpy.mockRestore();
  });

  it("should log mount and unmount messages with component name for Login component", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const WrappedComponent = WithLogging(MockComponent);
    const wrapper = mount(<WrappedComponent />);
    const componentName = WrappedComponent.displayName || "Component";

    expect(consoleSpy).toHaveBeenCalledWith(
      `Component ${componentName} is mounted on componentDidMount()`
    );

    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      `Component ${componentName} is going to unmount on componentWillUnmount()`
    );

    consoleSpy.mockRestore();
  });
});
