import React from "react";
import { render, fireEvent} from "@testing-library/react";
import Carousel from "./Carousel";

it("carosel works without crashing", () => {
  render(<Carousel />)
});

it("matches snapshot", () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})


it("works when you click on the right arrow", function() {
  const { queryByAltText, queryByTestId } = render(<Carousel />);


  // expect the first image to show, but not the second

 
 
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
 const leftArrow = queryByTestId("left-arrow");
  
  fireEvent.click(leftArrow);
 
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
});
 

it("left button gone", function() {
  const { queryByAltText, queryByTestId } = render(<Carousel />);
  const leftArrow = queryByTestId("left-arrow");
   expect(leftArrow).toBeNull()
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

 });

it("right button gone", function () {
  const { queryByAltText, queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  fireEvent.click(rightArrow);
  expect(queryByAltText("Photo by Josh Post on Unsplash")).toBeInTheDocument();

  // Update the condition to check if cardIdx is greater than or equal to the last index
  expect(queryByTestId("right-arrow")).not.toBeInTheDocument();
});