import React from "react";
import styled from "styled-components";

function EducationItem({ year, title, subTitle, text }) {
  return (
    <EducationStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </EducationStyled>
  );
}

const EducationStyled = styled.div`
  display: flex;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 70%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 2.0rem;
  }
  .left-content {
    width: 10.2%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
      font-size: 1rem;
    }
  }
  .right-content {
    position: relative;
    margin-left: 5.2rem;
    }
    h5 {
      color: var(--primary-color);
      font-size: 1.6rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.3rem;
    }
  }
`;
export default EducationItem;
