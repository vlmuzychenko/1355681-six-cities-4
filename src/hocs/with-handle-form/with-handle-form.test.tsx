import React from "react";
import renderer from "react-test-renderer";
import withHandleForm from "./with-handle-form";
import {noop} from "../../utils/common";

const offerIdMock = 1;

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withHandleForm(MockComponent);

it(`withHandleForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      offerId={offerIdMock}
      onSubmit={noop}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
