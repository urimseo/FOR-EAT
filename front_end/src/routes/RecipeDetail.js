import React from "react";
import styled from "styled-components";

import Nav from "components/layout/Nav";
import SearchBar from "components/layout/SearchBar";
import RecipeInfo from "components/recipeDetail/RecipeInfo";
import Ingredient_spaghetti from "assets/img/Ingredient_spaghetti.jpg"

const Container = styled.div`
  display: flex;
  margin-left: 7.5rem;
  padding: 6rem 12rem;
`
const ImgWrapper = styled.div`
  width: 50rem;
  height: 50rem;
  overflow: hidden;
  margin: 0 1rem; 
  background-position: center;
`
const Img = styled.img`
  width: 100%;
  hight: 100%;
  object-fit: cover;
`
const RecipeDetail = () => {
	return (
    <div>
      <Nav />
      <SearchBar />
      <Container>
        <ImgWrapper>
          <Img src={Ingredient_spaghetti} />
        </ImgWrapper>
        <RecipeInfo />
      </Container>
    </div>
	)
};

export default RecipeDetail;