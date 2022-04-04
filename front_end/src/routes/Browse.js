import React from "react";
import styled from "styled-components";

import "assets/css/Pagination.css";
import BrowseList from "components/browse/BrowseList";
import BrowseArticle from "components/browse/BrowseAricle";
import PopularIngredients from "components/browse/BrowsePopularIngredient";
import { Container } from "@mui/material";


const Header = styled.div`
  h1 {
  font-family: Playfair Display;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 2rem 0 0;
  }
  h3 {
  font-size: 2rem;
  font-weight: 400;
  margin: 3rem 2rem 0 0;
  }
  .content {
  font-size: 1.1rem;
  font-weight: 300;
  line-height : 1.5rem;
  margin: 1rem 2rem 0 0;
  width:100%; 
  word-break:break-all;
  word-wrap:break-word;
  }
  .bold {
    display: inline;
    font-weight: 500;
  }
`


const Browse = () => {

  return (

    <Container sx={{marginTop: "4rem"}}>
      <Header>
        <h1>BROWSE</h1>
        <h3>Descover Recipes</h3>
        <div className="content">There are several recipes that will enrich your table. 
          What recipe are you looking for?<br />
          <div className="bold">FOR:EAT</div> analyzes a number of factors of milions recipes to make it easy to navigate, even if no food comes to mind right away.
          We want to help you and other home cooks discover and demystify dishes that pique your culinary curiosities.
          Easy to browse, easy to cook.<br/>Make your kitchen lively with us.
        </div>
      </Header>
      <BrowseArticle />
      <PopularIngredients />
      <BrowseList />
    </Container>
  )
}

export default Browse;