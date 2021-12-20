import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';


function ImageSection() {
    return (
      <ImageSectionStyled>
        <div className="left-content">
          <img src={resume} alt="" />
        </div>
        <div className="right-content">
          <p className="paragraph">
            Experienced manager with multicultural work exposure in different
            continents. Worked in different projects with cross functional teams
            to deliver products on time an on budget.
          </p>
          <p className="paragraph">
            In early 2020 as the World came to a halt, I started coding as a
            side project and realized this was something I wanted to persue.
          </p>
          <p className="paragraph">
            I am currently a full Stack Developer. My specialties include
            learning new skills, responsive design principles, website
            optimization and (MVC) methods of organizing code. Check out my Skills and Resume for more information
          </p>
          <div className="about-info">
            <div className="info-title">
              <p>Age</p>
              <p>Nationality </p>
              <p>Languages </p>
              <p>Location</p>
            </div>
            <div className="info">
              <p>: 39</p>
              <p>: Colombia</p>
              <p>: Spanish, English </p>
              <p>: Bogota, Colombia</p>
            </div>
          </div>
          {/*<PrimaryButton title={"Download Cv"} />*/}
        </div>
      </ImageSectionStyled>
    );
}


const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 90%;
      object-fit: cover;
      margin-top:1.5rem;
    }
  }
  .right-content {
    width: 100%;

    .paragraph {
      padding: 0.8rem 0;
      font-size: 1rem;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: 1rem;
        }
      }
    }
  }
`;
export default ImageSection;
