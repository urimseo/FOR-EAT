import React from 'react';
import { Link } from 'react-router-dom';

import styled from "styled-components";
import Rating from '@mui/material/Rating';

import heart from "assets/img/icon_filled_heart.png"

const Container = styled.div`
  display: flex;
  margin: 0.5rem 0.3rem;
  padding: 0.2rem;
`

const CardItem = styled.div`
  width: 11.9rem;
  height: 16.8rem;
  position: relative;
  opacity: 1;
  display: block;
  transition: .5s ease;
  backface-visibility: hidden;
  object-fit: cover;
  &:hover .image-wrapper{
    background-color: black;
  }
  &:hover .image {
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
  
`

const ImgWrapper = styled.div`
  width: 11.9rem;
  height: 11.9rem;
  overflow: hidden; 
  background-position: center;

`

const Img = styled.img`
  width: 100%;
  height: 100%;
`


const TextContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    font-family: Work Sans;
    font-size: 1rem;
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
    font-size: 0.8rem;
    font-weight: 300;
  }
`

const BorderLine = styled.div`
  width: 2rem;
  margin: 0.1rem 0 0.3rem 0;
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
  top:45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
`
const TextContent = styled.div`
  color: white;
  font-size: 0.8rem;
  font-style: italic;
  padding: 1rem auto;
  img {
    width: 2rem;
    height: auto;
    margin: 0 0 0.5rem 0;
  }
`

const BrowseCard = ({ recipe_seq, name, calories, images, average_rating, liked_count }) => {


    return (
      <Container>
          <CardItem>
            <Link to={`/recipes/${recipe_seq}`} style={{display: "flex"}}>
            <ImgWrapper className='image-wrapper'>
              <Img src={images} className="image"/>
            </ImgWrapper>
            </Link>
            <TextContainer>
              <div className='title'>{name}</div>
              <BorderLine />
              <SpaceBetweenContainer>
                <div className='calories'>{Math.round(calories)} Kcal</div>
                <Rating className='rating' name="read-only" value={ average_rating ? average_rating : 0 } readOnly  size="small" />
              </SpaceBetweenContainer>
            </TextContainer>
            <HoverText className="middle">
              <TextContent className="text">
                <img src={heart} alt=""/>
                <div>{liked_count} PEOPLE<br/>LIKED THIS RECIPE</div>
              </TextContent>
            </HoverText>
          </CardItem>
       
      </Container>
  );
};



export default BrowseCard