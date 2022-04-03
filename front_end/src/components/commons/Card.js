import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import heart from "assets/img/icon_filled_heart.png"

const Container = styled.div`
  display: flex;
  margin: 1rem;
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

const Img = styled.img`
  width: 100%;
  height: 70%;
`

const TextContainer = styled.div`
  padding: 0.1rem 0.3rem;
  .title {
    font-family: Work Sans;
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0.5rem;
    width: 100%;
    height: 2.8rem;
    line-height: 1.3rem;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .category {
    font-size: 0.87rem;
    margin: 0.7rem 0 0.5rem 0;
  }
  .Calorie {
    font-size: 0.87rem;
    font-weight: 300;
  }
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const Card = ({ recipeImg, recipeName, recipeCalorie, recipeSeq, recipeKeywords, recipeRating, likedCount}) => {

  return (

      <Container>
        <Link to={`/recipes/${recipeSeq}`} style={{color: 'black', textDecoration : "none"}}>
          <CardItem>
            <Img src={recipeImg} className="image" />
            <TextContainer>
              <div className='title'>{recipeName}</div>
              <div className='category'>
                {recipeKeywords.map((recipeKeyword, index) =>(index === 1 ? ', ' : '') + recipeKeyword)}
              </div>
              <SpaceBetweenContainer>
                <div className='Calorie'>{Math.round(recipeCalorie)} Kcal</div>
                <Rating className='rating' name="read-only" value={ recipeRating ? recipeRating : 0 } readOnly  size="small" />
              </SpaceBetweenContainer>
            </TextContainer>
            <HoverText className="middle">
              <TextContent className="text">
                <img src={heart} alt=""/>
                <div>{likedCount} PEOPLE</div>
                <div>LIKED THIS RECIPE</div>
              </TextContent>
            </HoverText>
          </CardItem>
        </Link>
      </Container>

  );
};


Card.propTypes = {
  recipeImg: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeCalorie: PropTypes.number.isRequired,
  recipeSeq: PropTypes.number.isRequired,
  recipeKeywords: PropTypes.array.isRequired,
  likedCount: PropTypes.number.isRequired
};


export default Card