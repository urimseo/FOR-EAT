import { React, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Servings from "components/recommend/category/Serving"
import Region from "components/recommend/category/Region";
import Time from "components/recommend/category/Time";
import Type from "components/recommend/category/Type";
import Ingredient from "components/recommend/category/Ingredient";
import UnderLine from "components/commons/Line"
import SearchInput from 'components/commons/SearchInput';
import { getRecipeList } from "api/CategoryApi";


const Container = styled.div`
  margin: 0 10vw;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 600;
`

const BoxContainer = styled.div`
  display: inline-flex;
`

const RowContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0;
`

const CategoryButton = styled.a`
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 3.2rem 1rem 0 0;
`

const BorderLine = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`


const Category = () => {
  const [servignsShow, setServingsShow] = useState(true);
  const [regionShow, setRegionShow] = useState(false);
  const [timeShow, setTimeShow] = useState(false);
  const [typeShow, setTypeShow] = useState(false);
  const [ingredientShow, setIngredientShow] = useState(false);
  const childServings = useRef();
  const childRegion = useRef();
  const childTime = useRef();
  const childType = useRef();
  const childIngredient = useRef();

  const showServings = async() => {
    setServingsShow(true);
    setRegionShow(false);
    setTimeShow(false);
    setTypeShow(false);
    setIngredientShow(false);
    const Recipe = await getRecipeList(1, "One");
    if (Recipe) {
      childServings.current.getServingsRecipe();
    }
  };

  const showRegion = async() => {
    setRegionShow(true);
    setServingsShow(false);
    setTimeShow(false);
    setTypeShow(false);
    setIngredientShow(false);
    const Recipe = await getRecipeList(1, "Europe");
    if (Recipe) {
      childRegion.current.getRegionRecipe();
    }
  };

  const showTime = async() => {
    setTimeShow(true);
    setServingsShow(false);
    setRegionShow(false);
    setTypeShow(false);
    setIngredientShow(false);
    const result = await getRecipeList(1, "30min");
    if (result) {
      childTime.current.getTimeRecipe();
    }
  };

  const showType = async() => {
    setTypeShow(true);
    setServingsShow(false);
    setRegionShow(false);
    setTimeShow(false);
    setIngredientShow(false);
    const result = await getRecipeList(1, "Bread");
    if (result) {
      childType.current.getTypeRecipe();
    }
  };

  const showIngredient = async() => {
    setIngredientShow(true);
    setServingsShow(false);
    setRegionShow(false);
    setTimeShow(false);
    setTypeShow(false);
    const result = await getRecipeList(1, "Beef");
    if (result) {
      childIngredient.current.getIngredientRecipe();
    }
  };

  useEffect(() => {
    showServings();
  },[]);

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
            {servignsShow ? <Servings ref={childServings} /> : null}
            {regionShow ? <Region ref={childRegion}/> : null}
            {timeShow ? <Time ref={childTime}/> : null}
            {typeShow ? <Type ref={childType}/> : null}
            {ingredientShow ? <Ingredient ref={childIngredient}/> : null}
          </div>
          <SearchInput />
        </SpaceBetweenContainer>
      </Container>
    </>
  );
};

export default Category;
