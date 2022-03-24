import React from "react";
import styled from 'styled-components';


const Container = styled.div`
  display: flex-wrap;
  flex-direction: row;
`

const FoodButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 0 1rem 2rem 0;
  padding-inline: 1rem;
  border: none;
  box-shadow: 3px 4px 3px 0px gray;
  border-radius: 10rem;
  height: 2rem;
`


const IngredientInDustbin = ({foods}) => {
  const foodsUnique = foods.filter((value, idx) => {
    return foods.indexOf(value) === idx; 
  });

  return (
    <>
      <Container>
        {foodsUnique.map((food, index) => (
          <FoodButton key={index}>{food.title}</FoodButton>
        ))}
      </Container>
    </>
  );
};


export default React.memo(IngredientInDustbin);