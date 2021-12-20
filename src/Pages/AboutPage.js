import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ReviewsSection from '../Components/ReviewsSetion';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
    )
}
const AboutStyled = styled.section`
    
`;

export default AboutPage
