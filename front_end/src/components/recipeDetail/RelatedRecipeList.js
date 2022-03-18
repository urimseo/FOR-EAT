import React from "react";
import styled from "styled-components";
import Card2 from "components/commons/Card2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TextContainer = styled.div`
  margin: 5rem 0 1rem 2rem;
  display: block;
  justify-items: start;
  .text {
    display: flex;
    text-align: left;
    font-family: Playfair Display;
    font-size: 2.5rem;
    font-weight: 500;
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
`

const RelatedRecipeList = () => {

  return (
    <Container>
      <TextContainer>
        <div className="text">You May Also Like</div>
        <div className="line"/>
      </TextContainer>
      <CardContainer>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </CardContainer>
      <TextContainer>
        <div className="text">Nutritionally Balanced</div>
        <div className="line"/>
      </TextContainer>
      <CardContainer>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </CardContainer>
    </Container>
  )
}

export default RelatedRecipeList;