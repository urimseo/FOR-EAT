import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BarChart from "./BarChart";
import Restriction from "./Restriction";
import Habit from "./Habit";
import DoughnutChart from "./DoughnutChart";
import RelatedRecipeList from "./RelatedRecipeList";


const Container = styled.div`
  padding: 4rem 0 10rem 0;
`
const BackgroundContainer = styled.div`
  background-color: #F2F2F2;
  padding: 1rem 2rem;
  border-radius: 1rem;
`
const TextContainer = styled.div`
  padding: 2rem;
  h1 { 
    font-size: 2rem;
    font-weight: 500;
  }
  h5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    padding: 2rem 0 0 0;
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Report = () => {
    return (
      <Container>
        <BackgroundContainer>
          <TextContainer>
            <h1>Weekly Report</h1>
            <h5>FOR:EAT recommends thousands of international recipes based on your preferences.
              Collects your choices by a survey and gives you the recipes that you are looking for. FOR:EAT recommends thousands of international recipes based on your preferences. Collects your choices by a survey and gives you the recipes that you are looking for.</h5>
          </TextContainer>
          <FlexContainer>
            <BarChart />
            <Restriction />
          </FlexContainer>
          <FlexContainer>
            <Habit />
            <DoughnutChart />
          </FlexContainer>
          <RelatedRecipeList />
        </BackgroundContainer>
      </Container>
    )
}



export default Report;





