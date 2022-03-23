import React from "react";
import styled from "styled-components";

import SearchCard from "components/search/SearchCard";
import Tile from "assets/img/Tile.jpg";

const Container = styled.div`
`

const Header = styled.div`
  height: 24rem;
  background-image: url(${Tile})
`
const HeaderContent = styled.div`
  position: absolute;
  top: 19rem;
  left:50%;
  transform: translate(-50%, -50%);                                                                   
  font-size: 3rem;
  font-style: italic;
  color: white;
  z-index: 2;
  text-align: center;
`
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 13rem;
`

const Result = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  .result {
    padding: 1rem;
  }
  .count {
    color: #ED8141;
    padding: 1rem;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`

const IngredientResult = () => {
  const search = "pasta"
  const resultCount = 3249
  return (
    <Container>
      <Header />
      <HeaderContent>"{search}"</HeaderContent>
      <BodyContainer>
        <Result>
          <div className="result">Search Result</div>
          <div className="count">{resultCount}</div>
        </Result>
        <CardContainer>
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </CardContainer>
      </BodyContainer>
    </Container>
  )
}

export default IngredientResult;