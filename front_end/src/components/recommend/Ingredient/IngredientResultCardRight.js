import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import PropTypes from "prop-types";


const Container = styled.div`
  display: flex;
  justify-content: center;
`

const ImgWrapper = styled.div`
  overflow: hidden;
  width: 30rem;
  padding: 2rem;
`

const Img = styled.img`
  width: 100%;
  height: 17rem;
  object-fit: cover;
`

const TextContainer = styled.div`
  padding: 2rem 2rem;
  width: 30rem;
  height: 15rem;
  .calorie {
    margin: 1.5rem 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 300;
    color: #949191;
  }
  .title {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0 1.5rem 0;
    overflow: hidden;
    text-overflow:ellipsis;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .ingredient {
    display: inline-flex;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0 1rem 0.5rem 0;
  }
`


const IngredientResultCardRight = ({recipeSeq, recipeImage, recipeName, recipeCalorie, recipeIngredients}) => {
  return (
    <Container>
        <TextContainer>
          <div className='title'>{recipeName}</div>
          <div className='calorie'>{recipeCalorie}Kcal</div>
          <ul>{recipeIngredients.map((ingredient, index) =>
            <div className='ingredient' key={index}>{index <= 8 ? ingredient.ingredient_name : null}{index > 7 || index === recipeIngredients.length-1 ? null : ","}</div>)}
          </ul>
        </TextContainer>
      <Link to={`/recipes/${recipeSeq}`} style={{ color: 'black', textDecoration : "none"}}>
        <ImgWrapper>
          <Img src={recipeImage} />
        </ImgWrapper>
      </Link>
    </Container>
  );
};

IngredientResultCardRight.propTypes = {
  recipeSeq: PropTypes.number.isRequired,
  recipeImage: PropTypes.string.isRequired,
  recipeName: PropTypes.string.isRequired,
  recipeCalorie: PropTypes.number.isRequired,
  recipeIngredients: PropTypes.array.isRequired,
};

export default IngredientResultCardRight;