import React from "react";
import MainPage from "./MainPage";
import renderer from "react-test-renderer";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  wrapper = renderer.create(<MainPage {...mockProps} />);
});

it("renders mainpage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});
