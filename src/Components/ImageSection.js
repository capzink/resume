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
            Seasoned professional and experienced manager with exposure across
            different continents and multicultural work. Managed multiple
            projects by partnering with cross functional teams to deliver
            products on time and on budget.
          </p>
          <p className="paragraph">
            n early 2020 as the world came to a halt, I revisited my passion for
            coding and jump started a side project that turned into a new career
            pursuit.
          </p>
          <p className="paragraph">
            As a Full Stack Developer, my specialties include responsive design
            principles, website optimization and (MVC) methods of organizing
            code. My strongest skill is learning new skills - there isn’t a
            puzzle I don’t want to solve. See my full resume here for further
            information.
          </p>
          <div className="about-info">
            <div className="info-title">
              <p>Nationality </p>
              <p>Languages </p>
              <p>Location</p>
            </div>
            <div className="info">
              <p>: Colombian</p>
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
