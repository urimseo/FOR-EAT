import { React, useState} from "react";
import styled from "styled-components";
import Card from "components/commons/Card"
import Servings from "components/recommend/category/Serving"
import Region from "components/recommend/category/Region";
import Time from "components/recommend/category/Time";
import Type from "components/recommend/category/Type";
import Ingredient from "components/recommend/category/Ingredient";


const Container = styled.div`
  margin: 0 10vw;
`

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 64px;
`

const BorderLine = styled.div`
  width: 100%;
  margin: 1rem 0;
  border-bottom: 1px solid black;
`

const CategoryButton = styled.a`
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 400;
  margin: 2rem 1rem 0 0;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`

const Category = () => {
  const [servignsShow, setServignsShow] = useState(true);
  const [regionShow, setRegionShow] = useState(false);
  const [timeShow, setTimeShow] = useState(false);
  const [typeShow, setTypeShow] = useState(false);
  const [ingredientShow, setIngredientShow] = useState(false);

  const showServings = () => {
    setServignsShow(true);
    setRegionShow(false);
    setTimeShow(false);
    setTypeShow(false);
    setIngredientShow(false);
  };
  const showRegion = () => {
    setRegionShow(true);
    setServignsShow(false);
    setTimeShow(false);
    setTypeShow(false);
    setIngredientShow(false);
  };
  const showTime = () => {
    setTimeShow(true);
    setServignsShow(false);
    setRegionShow(false);
    setTypeShow(false);
    setIngredientShow(false);
  };
  const showType = () => {
    setTypeShow(true);
    setServignsShow(false);
    setRegionShow(false);
    setTimeShow(false);
    setIngredientShow(false);
  };
  const showIngredient = () => {
    setIngredientShow(true);
    setServignsShow(false);
    setRegionShow(false);
    setTimeShow(false);
    setTypeShow(false);
  };
  return (
    <>
      <Container>
        <SpaceBetweenContainer>
          <Title>CATEGORY</Title>
          <div>
            <CategoryButton onClick={showServings}>SERVINGS</CategoryButton>
            <CategoryButton onClick={showRegion}>REGION</CategoryButton>
            <CategoryButton onClick={showTime}>TIME</CategoryButton>
            <CategoryButton onClick={showType}>TYPE</CategoryButton>
            <CategoryButton onClick={showIngredient}>INGREDIENT</CategoryButton>
          </div>
        </SpaceBetweenContainer>
        <BorderLine />
        {servignsShow ? <Servings /> : null}
        {regionShow ? <Region /> : null}
        {timeShow ? <Time /> : null}
        {typeShow ? <Type /> : null}
        {ingredientShow ? <Ingredient /> : null}
        <CardContainer>
          <Card />
        </CardContainer>
      </Container>
    </>
  );
};

export default Category;
