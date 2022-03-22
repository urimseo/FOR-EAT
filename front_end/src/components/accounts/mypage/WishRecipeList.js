import React from "react";
import styled from "styled-components";
import Card from "components/commons/Card"

const Container = styled.div`
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  font-family: Playfair Display;
`

const Title = styled.div`
  display: flex;
  font-family: Playfair Display;
  font-size: 64px;
`

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
`

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const WishRecipeList = () => {
  return (
    <>
      <Container>
        <Top>
          <Title>My Wish Recipes</Title>
          <See href="/mypage">See all →</See>
        </Top>
        
        <CardContainer>
          <Card />
        </CardContainer>
      </Container>
    </>
  );
};

export default WishRecipeList;