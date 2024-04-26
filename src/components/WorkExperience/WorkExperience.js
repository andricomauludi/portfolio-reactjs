import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./WorkExperience.css";
import EducationCard from "./WorkExperienceCard";

import { workExperienceData } from "../../data/educationData";

function WorkExperience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="education"
      id="education"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="workexperience-image" style={{ alignContent: "end" }}>
          <img src={theme.expimg} alt="" />
        </div>
        <div
          className="workexperience-description"
          style={{ alignItems: "end" }}
        >
          <h1 style={{ color: theme.primary }}>Work Experience</h1>
          {workExperienceData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
              job={edu.job}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
