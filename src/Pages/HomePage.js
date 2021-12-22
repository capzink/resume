import React from 'react'
import styled from 'styled-components';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';


function HomePage() {
    return (
      <HomePageStyled>
        <div className="particle-con">
          <Particle />
        </div>
        <div className="typography">
          <h1>
            You Only Need to Know One Thing About Me,
          </h1>
          <h2>
           <span>I Can Learn Anything</span>
          </h2>
          <p>
            Full Stack developer with experience building single-page Web
            applications and a knack for creating attractive
            user interfaces using MERN stack
          </p>
          <div className="icons">
            <a
              href="https://linkedin.com/in/carlos-pinzon-rey"
              className="icon i-linkedin"
            >
              <LinkedIn />
            </a>
            <a href="https://github.com/capzink" className="icon i-github">
              <GithubIcon />
            </a>
          </div>
        </div>
      </HomePageStyled>
    );
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

      

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
