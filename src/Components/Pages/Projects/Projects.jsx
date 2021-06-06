import { Card } from "@material-ui/core";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectImages from "./ProjectImages";

function Projects({ isDark }) {
  return (
    <div className={isDark ? "darkModeProject" : "lightModeProject"}>
      <div className={isDark ? "lightText" : "darkText"}>
        <div className="pancakePage">
          {ProjectImages.map((ProjectObject) => {
            return <ProjectCard {...ProjectObject} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
