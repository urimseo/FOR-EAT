import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Ingredient_cucumber from "assets/img/Ingredient_cucumber.jpg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin: 4rem 0 0 0;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`

const ImgWrapper = styled.div`
  overflow: hidden;
  width: 25rem;
  padding: 2rem;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextContainer = styled.div`
  padding: 2rem 2rem;
  width: 40rem;
  height: 20rem;
  .idx {
    margin: 1rem 0 0 0;
    font-size: 1.5rem;
    color: #949191;
  }
  .title {
    font-size: 2rem;
    font-weight: 400;
    margin-top: 2rem;
  }
  ul {
    margin: 1rem 0 1.5rem 0;
    text-overflow:ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  li {
    padding: 0.1rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    color: #535050;
  }
`

const IngredientResultCard = () => {
  const ingredients = [
    "3 tablespoons unsweetened dutch cocoa",
    "1 1/2 teaspoons unsweetened dutch cocoa",
    "3 tablespoons boiling water",
    "1 1/2 teaspoons vanilla",
    "3 large eggs",
    "1 1/4 cups cake flour, sifted",
    "3/4 cup sugar",
    "2 tablespoons sugar",
    "3/4 teaspoon baking powder",
    "1/4 teaspoon salt",
    "13 tablespoons unsalted butter, softened"
  ]
  const recipeIdx = 1

  return (
    <Container>
      <CardContainer>
        <ImgWrapper>
          <Img src={Ingredient_cucumber} />
        </ImgWrapper>
        <TextContainer>
          <div className='idx'>Recipe {recipeIdx}</div>
            <div className='title'>PASTA WITH SAUSAGE, TOMATOES, AND CREAM </div>
          <ul className='category'>{ingredients.map((ingredient, index) =>
            <li>{ingredient}</li>
          )}</ul>
          <Link to="" 
            style={{color: 'black', textDecoration : "none", marginTop: "1rem"}}
          >SEE MORE</Link>
        </TextContainer>
      </CardContainer>
      <CardContainer>
        <TextContainer>
          <div className='idx'>Recipe {recipeIdx}</div>
            <div className='title'>PASTA WITH SAUSAGE, TOMATOES, AND CREAM </div>
          <ul className='category'>{ingredients.map((ingredient, index) =>
            <li>{ingredient}</li>
          )}</ul>
          <Link to="" 
            style={{color: 'black', textDecoration : "none", marginTop: "1rem"}}
          >SEE MORE</Link>
        </TextContainer>
        <ImgWrapper>
          <Img src={Ingredient_cucumber} />
        </ImgWrapper>
      </CardContainer>
    </Container>
  );
};

export default IngredientResultCard;