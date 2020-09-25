import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  const { name, codeLink, isDark, image1, image2, image3 } = props;
  const secondPic = (
    <Carousel.Item>
      <img className="carousel-image" src={image2} alt={name} />
    </Carousel.Item>
  );
  const thirdPic = (
    <Carousel.Item>
      <img className="carousel-image" src={image3} alt={name} />
    </Carousel.Item>
  );
  return (
    <div className="hotcakes">
      <h1 className="carousel-label">{name}</h1>
      <Carousel controls={image2 === "" ? false : true} indicators={false}>
        <Carousel.Item>
          <img className="carousel-image" src={image1} alt={name} />
        </Carousel.Item>
        {image2 === "" ? "" : secondPic}
        {image3 === "" ? "" : thirdPic}
      </Carousel>
      <Button
        className="projectButton"
        variant={isDark ? "secondary" : "dark"}
        size="lg"
        block
        href={codeLink}
      >
        View Code
      </Button>
    </div>
  );
}

export default ProjectCard;
