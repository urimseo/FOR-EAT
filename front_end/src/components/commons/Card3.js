import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import Rating from '@mui/material/Rating';

import heart from "assets/img/icon_filled_heart.png"

const Container = styled.div`
  display: flex;
  margin: 1rem;;
  padding: 0.2rem;
  border: 1px solid #C4C4C4;
`

const CardItem = styled.div`
  width: 19rem;
  height: 24rem;
  position: relative;
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;
  &:hover {
    background-color: rgba(0,0,0,0.6);
  }
  &:hover .rating{
    opacity: 0.3;
  }
  &:hover .image {
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
  
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

`


const TextContainer = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-family: Work Sans;
    font-size: 1.2rem;
    font-weight: 500;
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

const HoverText = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`
const TextContent = styled.div`
  color: white;
  font-size: 16px;
  font-style: italic;
  padding: 1rem auto;
  img {
    width: 2rem;
    height: auto;
    margin: 0 0 1rem 0;
  }
`

const Card3 = ({ recipe_seq, name, calories, images, average_rating }) => {
    const likeCnt = 39

    return (
      <Container>
        <Link to={`/recipes/${recipe_seq}`} style={{color: 'black', textDecoration : "none"}}>
          <CardItem>
            <ImgWrapper>
              <Img src={images} className="image"/>
            </ImgWrapper>
            <TextContainer>
              <div className='title'>{name}</div>
              <BorderLine />
              <SpaceBetweenContainer>
                {/* <div className='keywords'>{(keywords ? keywords[0] : "")}</div> */}
                <div className='calories'>{Math.round(calories)} Kcal</div>
                <Rating className='rating' name="read-only" value={ average_rating ? average_rating : 0 } readOnly  size="small" />
              </SpaceBetweenContainer>
            </TextContainer>
            <HoverText className="middle">
              <TextContent className="text">
                <img src={heart} alt=""/>
                <div>{likeCnt} PEOPLE</div>
                <div>LIKED THIS RECIPE</div>
              </TextContent>
            </HoverText>
          </CardItem>
        </Link>
      </Container>
  );
};



export default Card3