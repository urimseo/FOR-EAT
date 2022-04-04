import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CircleCard from "components/browse/CircleCard";
import egg from "assets/img/IngredientItem/egg.PNG"
import bacon from "assets/img/IngredientItem/bacon.jpg"
import beef from "assets/img/IngredientItem/beef.jpg"
import rice from "assets/img/IngredientItem/rice.jpg"
import carrot from "assets/img/IngredientItem/carrot.PNG"
import chicken from "assets/img/IngredientItem/chicken.jpg"
import noodle from "assets/img/IngredientItem/noodle3.jpg"
import pork from "assets/img/IngredientItem/pork.jpg"
import potato from "assets/img/IngredientItem/potato.jpg"
import salmon from "assets/img/IngredientItem/salmon.jpg"
import shrimp from "assets/img/IngredientItem/shrimp.PNG"
import tomato from "assets/img/IngredientItem/tomato.jpg"
import turkey from "assets/img/IngredientItem/turkey.png"
import avocado from "assets/img/IngredientItem/avocado.jpg"
import corn from "assets/img/IngredientItem/corn.jpg"
import tofu from "assets/img/IngredientItem/tofu.jpg"
import beans from "assets/img/IngredientItem/beans.jpg"
import mushroom3 from "assets/img/IngredientItem/mushroom3.jpg"
import eggplant from "assets/img/IngredientItem/eggplant.jpg"
import basil from "assets/img/IngredientItem/basil.jpg"
import cucumber from "assets/img/IngredientItem/cucumber.jpg"
import olive from "assets/img/IngredientItem/olive.jpg"
import lobster from "assets/img/IngredientItem/lobster.jpg"
import orange from "assets/img/IngredientItem/orange.jpg"
import cabbage from "assets/img/IngredientItem/cabbage.jpg"
import radish from "assets/img/IngredientItem/radish.jpg"
import celery from "assets/img/IngredientItem/celery.jpg"


const Container = styled.div`
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 400;
  margin: 3rem 2rem 0.5rem 0;
`

const CircleCardContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 2rem 0;
`

const PopularIngredients = () => {
  const ingredients = [
    { name: "avocado", img: avocado },
    { name: "corn", img: corn },
    { name: "tofu", img: tofu },
    { name: "beans", img: beans },
    { name: "mushroom", img: mushroom3 },
    { name: "eggplant", img: eggplant },
    { name: "basil", img: basil },
    { name: "cucumber", img: cucumber },
    { name: "olive", img: olive },
    { name: "lobster", img: lobster },
    { name: "orange", img: orange },
    { name: "cabbage", img: cabbage },
    { name: "radish", img: radish },
    { name: "egg", img: egg },
    { name: "bacon", img: bacon },
    { name: "beef", img: beef },
    { name: "carrot", img: carrot },
    { name: "chicken", img: chicken },
    { name: "pork", img: pork },
    { name: "potato", img: potato },
    { name: "salmon", img: salmon },
    { name: "turkey", img: turkey },
    { name: "rice", img: rice },
    { name: "noodle", img: noodle },
    { name: "shrimp", img: shrimp },
    { name: "tomato", img: tomato },
    { name: "celery ", img: celery  },
  ]
    return (
      <Container>
        <Title>Ingredients</Title>
        <CircleCardContainer>
          { ingredients.map((ingredient, idx) => {
            return <CircleCard key={idx} {...ingredient} />;
          })}
        </CircleCardContainer>
      </Container>
    )
}

export default PopularIngredients;