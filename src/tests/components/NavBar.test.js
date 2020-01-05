import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import NavBar from "../../components/layout/NavBar";

it("should render NavBar correctly", () => {
  const wrapper = shallow(<NavBar />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
