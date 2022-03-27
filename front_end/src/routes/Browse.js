import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import Card2 from "components/commons/Card2";
import Tile from "assets/img/Tile.jpg";
import "assets/css/Pagination.css";
import BrowseList from "components/browse/BrowseList";

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
  color: white;
  z-index: 2;
  text-align: start;
  .title {    
    font-size: 3rem;
    font-style: italic;
    margin-bottom: 1rem;
  }
  .content {
    font-size: 1.3rem;
  }
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 16rem;
`

const Title = styled.p`
  font-family: Playfair Display;
  font-size: 3rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
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
  flex-wrap: wrap;
  justify-content: center;
`

const PageContainer = styled.div`
  margin: 2rem 0 5rem 0;
`



const Browse = () => {


  return (
    <Container>
      <Header />
      <HeaderContent>
        <div class="title">Discover Recipes !</div>
        <div class="content">We want to help you and other home cooks discover and demystify dishes that pique your culinary curiosities</div>
      </HeaderContent>
      <BodyContainer>
        <Title>BROWSE</Title>
        <BrowseList />
      </BodyContainer>
    </Container>
  )
}

export default Browse;