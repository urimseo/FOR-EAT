import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import Rating from '@mui/material/Rating';

const Container = styled.div`
  display: flex;
  margin: 0.5rem;;
  padding: 0.2rem;
  border: 1px solid #C4C4C4;
`

const CardItem = styled.div`
  width: 19rem;
  height: 24rem;
`

const ImgWrapper = styled.div`
  width: 19rem;
  height: 19rem;
  overflow: hidden; 
  background-position: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


const TextContainer = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-family: Playfair Display;
    font-size: 1.2rem;
    font-weight: 700;
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .keywords {
    font-size: 0.87rem;
    font-weight: 500;
  }
  .calories {
    font-size: 0.87rem;
    font-weight: 300;
  }
`

const BorderLine = styled.div`
  width: 2rem;
  margin: 0.3rem 0 1rem 0;
  border-bottom: 1px solid black;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Card3 = ({ 
    recipe_seq, name, calories, 
    images, average_rating
  
  }) => {
  
    return (
      <Container>
        <Link to={`/recipes/${recipe_seq}`} style={{color: 'black', textDecoration : "none"}}>
          <CardItem>
            <ImgWrapper>
              <Img src={images} />
            </ImgWrapper>
            <TextContainer>
              <div className='title'>{name}</div>
              <BorderLine />
              <SpaceBetweenContainer>
                {/* <div className='keywords'>{(keywords ? keywords[0] : "")}</div> */}
                <div className='calories'>{Math.round(calories)} Kcal</div>
                <Rating name="read-only" value={average_rating} readOnly  size="small" />
              </SpaceBetweenContainer>
            </TextContainer>
          </CardItem>
        </Link>
        {/* { (index+1)%4 === 0 ? null : <Line /> } */}
      </Container>
  );
};



export default Card3