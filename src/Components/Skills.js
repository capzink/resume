import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'75%'}
                            
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'60%'}
                            
                        />
                        <ProgressBar 
                            title={'NODE JS'}
                            width={'60%'}
                           
                        />
                        <ProgressBar 
                            title={'MONGODB'}
                            width={'60%'}
                            
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            
                        />
                        <ProgressBar 
                            title={'EXPRESS'}
                            width={'60%'}
                            
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
