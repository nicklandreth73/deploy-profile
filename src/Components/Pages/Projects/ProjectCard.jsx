import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const secondPic = (
    <Carousel.Item>
      <img className="carousel-image" src={props.image2} alt="First slide" />
    </Carousel.Item>
  );
  const thirdPic = (
    <Carousel.Item>
      <img className="carousel-image" src={props.image3} alt="First slide" />
    </Carousel.Item>
  );
  return (
    <div className="hotcakes">
      <h1 className="carousel-label">{props.name}</h1>
      <Carousel
        controls={props.image2 === "" ? false : true}
        indicators={false}
      >
        <Carousel.Item>
          <img
            className="carousel-image"
            src={props.image1}
            alt="First slide"
          />
        </Carousel.Item>
        {props.image2 === "" ? "" : secondPic}
        {props.image3 === "" ? "" : thirdPic}
      </Carousel>
      <Button
        className="projectButton"
        variant={props.isDark ? "secondary" : "dark"}
        size="lg"
        block
        href={props.codeLink}
      >
        View Code
      </Button>
    </div>
  );
}

export default ProjectCard;
