import React from 'react'
import styled from 'styled-components';

function ReviewItem({text, image, span}) {
    return (
      <RevivewItemStyled>
        <div className="people">
          <img src={image} alt="" /> <span>{span}</span>
        </div>
        <p>{text}</p>
      </RevivewItemStyled>
    );
}

const RevivewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &:not(:first-child){
        
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;
    }
    .people{
        display: flex;
        align-items:center;
    }

    img{
        border-radius:50%;
        width:60px;
    }
    span{
        padding-left: 20px;
    }
`;

export default ReviewItem;
