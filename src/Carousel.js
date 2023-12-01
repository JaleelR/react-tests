import React, { useState } from "react";
import "./Carousel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import Card from "./Card";

function Carousel(props) {
  // setting card index to 0
  const [cardIdx, setCardIdx] = useState(0);
  //getting a specific card object in array
  const card = props.cardData[cardIdx];
  //getting the total of the cardData.length
  const total = props.cardData.length;
  //go to the next card by incrementing idx
  const goForward = () => setCardIdx(cardIdx + 1);
  const goBack = () => setCardIdx(cardIdx - 1);

  return (
    <div className="Carousel">
      <h1>{props.title}</h1>
      <div className="Carousel-main">
        {cardIdx < 1? null :  <i
          className="fas fa-chevron-circle-left fa-2x"
          onClick={goBack}
          data-testid="left-arrow"
        />}
       
        <Card
          caption={card.caption}
          src={card.src}
          currNum={cardIdx + 1}
          totalNum={total}
        />
        {console.log(cardIdx)}
        {cardIdx > 1? null :  <i
          className="fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
          data-testid="right-arrow"
        />}
       
      </div>
    </div>
  );
}

//going forward twice 
//what do you do after 3?
Carousel.defaultProps = {
  cardData: [
    {
      src: image1,
      caption: "Photo by Richard Pasquarella on Unsplash"
    },
    {
      src: image2,
      caption: "Photo by Pratik Patel on Unsplash"
    },
    {
      src: image3,
      caption: "Photo by Josh Post on Unsplash"
    }
  ],
  title: "Shells from far away beaches."
};

export default Carousel;
