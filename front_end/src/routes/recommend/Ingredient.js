import React from "react";
import styled from "styled-components";
import IngredientSelect from "components/recommend/Ingredient/IngredientSelect"

const Container = styled.div`
  padding: 0 10vw;
  min-height: 100vh;
`

const TextContainer = styled.div`
  margin: 0 10rem;
  .title {
    font-family: Playfair Display;
    font-size: 3rem;
    margin-top: 4rem;
    font-weight: 600;
  }
  .content {
    font-size: 1.1rem;
    font-weight: 300;
    padding: 1rem 0;
    line-height : 1.5rem;
  }
`

const BorderLine = styled.div`
  width: 7%;
  margin-top: 1rem;
  border-bottom: 1px solid black;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: start;
`

const Ingredient = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <div className="title">Select From Below</div>
          <BorderLine />
          <div className="content">Choose ingredients that are dormant in your refrigerator.<br />
            <SpaceBetweenContainer>
              <div style={{display: "flex", fontWeight:"500", marginRight:"0.3rem" }}>FOR:EAT</div>
              <div style={{display: "flex" }}>
                recommends some great dishes you can make based on this ingredient.
              </div>
            </SpaceBetweenContainer>
            <SpaceBetweenContainer>
              <div>What materials do you have? Put the ingredients in the box by</div>
              <div style={{display: "flex", fontWeight:"500", marginLeft:"0.3rem" }}>drag and drop.</div>
            </SpaceBetweenContainer>
          </div>
        </TextContainer>
          <IngredientSelect /> 
      </Container>
    </>
  );
};

export default Ingredient;