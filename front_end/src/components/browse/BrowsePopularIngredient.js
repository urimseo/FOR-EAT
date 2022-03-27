import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CircleCard from "components/commons/CircleCard";
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


const Title = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem 0;
`

const CircleCardContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  margin: 0 0 4rem 0;
`

const PopularIngredients = () => {
  const ingredients = [
    { name: "egg", img: egg },
    { name: "bacon", img: bacon },
    { name: "beef", img: beef },
    { name: "rice", img: rice },
    { name: "carrot", img: carrot },
    { name: "chicken", img: chicken },
    { name: "noodle", img: noodle },
    { name: "pork", img: pork },
    { name: "potato", img: potato },
    { name: "salmon", img: salmon },
    { name: "shrimp", img: shrimp },
    { name: "tomato", img: tomato },
    { name: "turkey", img: turkey },
  ]
    return (
      <div>
        <Title>Popular Ingredients</Title>
        <CircleCardContainer>
          { ingredients.map((ingredient) => {
            return <CircleCard {...ingredient} />;
          })}
        </CircleCardContainer>
      </div>
    )
}

export default PopularIngredients;