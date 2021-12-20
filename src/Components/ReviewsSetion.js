import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';
import ayman from '../img/recomendations/ayman.jpeg'
import seb from "../img/recomendations/seb.jpeg";


function ReviewsSetion() {
    return (
      <ReviewsStyled>
        <Title title={"What they say..."} span={"Recomendations"} />
        <InnerLayout>
          <div className="reviews">
            <ReviewItem
              image={ayman} span={"MENA sales Director, Weatherford"}
              text={
                 ' " I have worked with Carlos for several years where he proved high level of professionalism and commitment. He had an excellent knowledge and was always team player. Carlos has very high understanding to corporate and Growth strategy keeping at the same time engagement with the details needed to ensue implementation of those high level goals."'
              }
            />
            <ReviewItem
              image={seb} span ={" GZ Service Delivery Manager, Weatherford"}
              text={
                '" Carlos served in different countries (7+), regions and continents, therefor his exposure and adaptability are to be considered as a plus. He is familiar with the Western, Middle Eastern and Far Eastern Cultures , and has proven to manage all in a professional and inclusive manner."'
              }
            />
          </div>
        </InnerLayout>
      </ReviewsStyled>
    );
}

const ReviewsStyled = styled.section`
    margin-top:5rem;
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
