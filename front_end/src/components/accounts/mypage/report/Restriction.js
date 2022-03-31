import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #FFFFFF;
  padding: 1.4rem;
  margin: 0 1rem 1rem 1rem;
  border-radius: 2%;
`

const TextContainer = styled.div`
  h1 { 
    font-size: 1.7rem;
    font-weight: 500;
    padding: 0;
  }
  h5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;
    padding: 2rem 0;
  }
`

const Card = styled.div`
  width: ${(props) => (props.width ? props.width : "13rem")};
  height: ${(props) => (props.height ? props.height : "2rem")};
  margin: ${(props) => (props.m ? props.m : "1rem 0 0 0")};
  text-align: start;
  vertical-align: center;
  padding: ${(props) => (props.p ? props.p : "1rem")};
  background-color: ${(props) => (props.bc ? props.bc : "#ED8141")};
  border-radius: 0.5rem;
  word-break:break-all;
`

const Restriction = () => {
  
  return (
    <Container>
      <TextContainer>
        <h1>Restriction</h1>
        <Card>Sodium</Card>
        <Card bc="#FFE78F"></Card>
        <Card bc="#97BB97">제한</Card>
        <Card bc="#FFFFFF" p="1rem 0" m="0" width="14.5rem" height="3rem">
          FOR:EAT recommends thousands of international recipes based on your preferences.
          FOR:EAT recommends thousands of international recipes based on your preferences.
          </Card>
      </TextContainer>
    </Container>
  )
}

export default Restriction;