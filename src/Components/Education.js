import React from "react";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import SchoolIcon from "@material-ui/icons/School";
import EducationItem from "./EducationItem";

function Education() {
  const school = <SchoolIcon />;
  return (
    <EducationStyled>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <EducationItem
            year={"2020-2021"}
            title={"Full Stack Developer"}
            subTitle={"FreecodeCamp, Udemy, MIR, OdinProject,Galvanize"}
            
          />
          <EducationItem
            year={"2015 - 2016"}
            title={"Global Executive MBA"}
            subTitle={"IE Business School"}
            
          />
          <EducationItem
            year={"2000 - 2005"}
            title={
              "Bachelor's degree, Mechatronics, Robotics, and Automation Engineering"
            }
            subTitle={"Universidad Militar Nueva Granada"}
          />
        </div>
    </EducationStyled>
  );
}

const EducationStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Education;
