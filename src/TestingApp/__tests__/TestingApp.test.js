import React from "react";
import renderer from "react-test-renderer";
import TestingApp from "../TestingApp";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<TestingApp />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
