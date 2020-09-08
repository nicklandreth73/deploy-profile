import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectImages from "./ProjectImages";

function Projects(props) {
  return (
    <div className={props.isDark ? "darkModeProject" : "lightModeProject"}>
      <div className={props.isDark ? "lightText" : "darkText"}>
        <div className="pancakePage">
          {ProjectImages.map((ProjectObject) => {
            const { name, image1, image2, image3, codeLink } = ProjectObject;
            return (
              <ProjectCard
                name={name}
                image1={image1}
                image2={image2}
                image3={image3}
                codeLink={codeLink}
                isDark={props.isDark}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
