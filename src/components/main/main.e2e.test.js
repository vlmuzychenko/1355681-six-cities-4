import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should heading be pressed`, () => {
  const onHeadingClick = jest.fn();

  const main = shallow(
      <Main
        offersCount={1234}
        offersTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
        onHeadingClick={onHeadingClick}
      />
  );

  const heading = main.find(`.places__found`);

  heading.props().onClick();

  expect(onHeadingClick.mock.calls.length).toBe(1);
});
