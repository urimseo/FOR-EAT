import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import Card2 from "components/commons/Card2";
import Tile from "assets/img/Tile.jpg";
import "assets/css/Pagination.css";
import BrowseList from "components/browse/BrowseList";
import PopularIngredients from "components/browse/BrowsePopularIngredient"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 16vw;
`
const Header = styled.div`
  h1 {
  font-family: Playfair Display;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  }
  h3 {
  font-size: 2rem;
  font-weight: 400;
  margin: 2rem 0 0.5rem 0;
  }
  p {
  font-size: 1.1rem;
  font-weight: 300;
  line-height : 1.5rem;
  }
  .bold {
    display: inline;
    font-weight: 500;
  }
`


const Browse = () => {

  return (

    <Container>
      <Header>
        <h1>BROWSE</h1>
        <h3>Descover Recipes</h3>
        <p>There are several recipes that will enrich your table. 
          What recipe are you looking for?<br />
          <div className="bold">FOR:EAT</div> analyzes a number of factors of milions recipes to make it easy to navigate, even if no food comes to mind right away.
          We want to help you and other home cooks discover and demystify dishes that pique your culinary curiosities.
          Easy to browse, easy to cook. With <div className="bold">FOR:EAT</div>, make your kitchen lively.</p>
      </Header>
      <PopularIngredients />
      <BrowseList />
    </Container>
  )
}

export default Browse;