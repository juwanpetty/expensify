import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import NavBar from "../../../components/layout/NavBar";

it("should render NavBar correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<NavBar />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
