import { React, useState} from "react";
import styled from "styled-components";
import Card from "components/commons/Card"
import Servings from "components/recommend/category/Serving"
import Region from "components/recommend/category/Region";
import Time from "components/recommend/category/Time";
import Type from "components/recommend/category/Type";
import Ingredient from "components/recommend/category/Ingredient";
import UnderLine from "components/commons/Line"
import SearchInput from 'components/commons/SearchInput';


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
  border-bottom: 1px solid black;
`

const CategoryButton = styled.a`
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 2rem 1rem 0 0;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const RowContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const BoxContainer = styled.div`
  display: inline-flex;
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
          <BoxContainer>
            <RowContainer>
              <CategoryButton onClick={showServings}>SERVINGS</CategoryButton>
              {servignsShow ? <UnderLine width="5.1rem" /> : null}
            </RowContainer>
            <RowContainer>
              <CategoryButton onClick={showRegion}>REGION</CategoryButton>
              {regionShow ? <UnderLine width="3.6rem" /> : null}
            </RowContainer>
            <RowContainer>
              <CategoryButton onClick={showTime}>TIME</CategoryButton>
              {timeShow ? <UnderLine width="2rem" /> : null}
            </RowContainer>
            <RowContainer>
              <CategoryButton onClick={showType}>TYPE</CategoryButton>
              {typeShow ? <UnderLine width="2rem" /> : null}
            </RowContainer>
            <RowContainer>
              <CategoryButton onClick={showIngredient}>INGREDIENT</CategoryButton>
              {ingredientShow ? <UnderLine width="6.4rem" /> : null}
            </RowContainer>
          </BoxContainer>
        </SpaceBetweenContainer>
        <BorderLine />
        <SpaceBetweenContainer>
          <div>
            {servignsShow ? <Servings /> : null}
            {regionShow ? <Region /> : null}
            {timeShow ? <Time /> : null}
            {typeShow ? <Type /> : null}
            {ingredientShow ? <Ingredient /> : null}
          </div>
          <SearchInput />
        </SpaceBetweenContainer>
        <CardContainer>
          <Card />
        </CardContainer>
      </Container>
    </>
  );
};

export default Category;
