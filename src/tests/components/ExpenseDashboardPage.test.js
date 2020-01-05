import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/pages/ExpenseDashboardPage";

test("should render expense dashboard page item correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
