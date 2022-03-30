import React from "react";
import styled from "styled-components";
import Card2 from "components/commons/Card2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextContainer = styled.div`
  margin: 5rem 0 1rem 0;
  display: block;
  justify-items: start;
  .text {
    display: flex;
    text-align: left;
    font-family: Playfair Display;
    font-size: 2.2rem;
    font-weight: 600;
  }
  .line {
    margin: 0.5rem 0 1rem 0;
    width: 6%;
    border-bottom: 1px solid black;
  }
`
const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`

const RelatedRecipeList = ({ ingredients_recommend, nutrient_recommend }) => {
  return (
    <Container>
      <TextContainer>
        <div className="text">You May Also Like</div>
        <div className="line"/>
      </TextContainer>
      <CardContainer>
        { ingredients_recommend ? ingredients_recommend.map((recipe) => ( 
            <Card2
              key={recipe.recipe_seq}
              {...recipe}
            />
          )) : null }
      </CardContainer>
      <TextContainer>
        <div className="text">Nutritionally Balanced</div>
        <div className="line"/>
      </TextContainer>
      <CardContainer>
      { nutrient_recommend ? nutrient_recommend.map((recipe) => ( 
            <Card2
              key={recipe.recipe_seq}
              {...recipe}
            />
          )) : null }
      </CardContainer>
    </Container>
  )
}

export default RelatedRecipeList;