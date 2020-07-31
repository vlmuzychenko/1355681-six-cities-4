import React from "react";
import renderer from "react-test-renderer";
import withHoveredOffer from "./with-hovered-offer";

const offerMock = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  previewImage: `img/apartment-01.jpg`,
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  rating: 4,
  isPremium: true,
  type: `apartment`,
  bedrooms: 4,
  maxAdults: 4,
  goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
  host: {
    name: `Angelina`,
    super: true,
    avatarUrl: `img/avatar-angelina.jpg`,
  },
  coords: [52.3909553943508, 4.85309666406198],
  city: {
    name: `Amsterdam`,
    coords: [52.377956, 4.897070],
  },
};

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withHoveredOffer(MockComponent);

it(`withHoveredOffer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onOfferHover={() => {}}
      hoveredOffer={offerMock}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
