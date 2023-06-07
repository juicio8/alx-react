import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

test("getFullYear returns the correct year", () => {
  const testDate = new Date();
  const testYear = testDate.getFullYear();
  const year = getFullYear();
  expect(testYear).toBe(year);
});

test("getFooterCopy returns the correct string when the argument is true or false", () => {
  const whenTrue = getFooterCopy(true);
  const whenFalse = getFooterCopy(false);
  expect(whenTrue).toBe("Holberton School");
  expect(whenFalse).toBe("Holberton School main dashboard");
});

test("getLatestNotification returns correct string", () => {
  const latestNotification = getLatestNotification();
  expect(latestNotification).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
