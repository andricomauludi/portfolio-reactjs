import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

import { ThemeContext } from "../../contexts/ThemeContext";

import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";

import "./WorkExperience.css";

function WorkExperienceCard({
  id,
  institution,
  course,
  startYear,
  endYear,
  job,
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`education-card ${classes.educationCard}`}>
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? expImgBlack : expImgWhite}
            alt=""
          />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
          <h6 style={{ color: theme.primary, paddingTop: "20px" }}>{job}</h6>
        </div>
      </div>
    </Fade>
  );
}

export default WorkExperienceCard;
