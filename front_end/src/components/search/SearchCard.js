import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import Ingredient_egg from "assets/img/Ingredient_egg.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  min-width: 32vh;
  margin: 1rem;;
  padding: 0.2rem;
  border: 1px solid #C4C4C4;
`

const CardItem = styled.div`
  width: 20rem;
  height: 25rem;

`

const ImgWrapper = styled.div`
  width: 20rem;
  height: 20rem;
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
  .category {
    font-size: 0.87rem;
    font-weight: 500;
  }
  .calorie {
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
`


const SearchCard = () => {
  //{ index, recipeImg, recipeName, recipeCalorie, recipeSeq }
  const recipeImg = Ingredient_egg
  const recipeName = "salmon bruschetta"
  const recipeCalorie = 128
  const index = 0
    return (
      <Container>
        {/* <Link to={`/recipes/${recipeSeq}`} style={{color: 'black', textDecoration : "none"}}> */}
          <CardItem>
            <ImgWrapper>
              <Img src={recipeImg} />
            </ImgWrapper>
            <TextContainer>
              <div className='title'>{recipeName}</div>
              <BorderLine />
              <SpaceBetweenContainer>
                <div className='category'>CATEGORY</div>
                <div className='calorie'>{Math.round(recipeCalorie)} Kcal</div>
              </SpaceBetweenContainer>
            </TextContainer>
          </CardItem>
        {/* </Link> */}
        {/* { (index+1)%4 === 0 ? null : <Line /> } */}
      </Container>
  );
};


SearchCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipeImg: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeCalorie: PropTypes.number.isRequired,
};


export default SearchCard