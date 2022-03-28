import React, { useState } from 'react';
import styled from "styled-components";
import beef from "assets/img/IngredientItem/beef.jpg"
import rice from "assets/img/IngredientItem/rice.jpg"
import cheese from "assets/img/IngredientItem/cheese.jpg"
import chicken from "assets/img/IngredientItem/chicken2.PNG"
import mushroom from "assets/img/IngredientItem/mushroom2.PNG"
import noodle from "assets/img/IngredientItem/noodle2.PNG"
import pork from "assets/img/IngredientItem/pork.jpg"
import potato from "assets/img/IngredientItem/potato.jpg"
import tomato from "assets/img/IngredientItem/tomato.jpg"
import seafood from "assets/img/IngredientItem/seafood.PNG"



const Container = styled.div`
  min-height: 100vh;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`

const Question = styled.div`
  display: flex;
  justify-content: center;
  .line {
    width: 83%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 51.2rem;
    border: 0px solid grey;
    box-shadow: 3px 5px 5px 5px #d3d3d3;
  }
  .number {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0 0;
  }
`

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 1px 1px 10px 3px #e2e2e2;
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  background-color: white;
  border: 1px solid grey;
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#000"};
  }
`

const NextButton =styled.button`
  display: flex;
  float: right;
  margin: 1.5rem 3rem 0 0;
  font-size: 1.2rem;
  font-weight: 100;
  cursor: pointer;
  background-color: white;
  border: none;
`

const LikeIngredient = () => {
  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>5/6</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="200" mb="1rem">Check your favorite ingredient.</Title>
            <BoxContainer>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={beef} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Beef</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={chicken} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Chicken</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={pork} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Pork</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={seafood} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Seafood</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={rice} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Rice</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={noodle} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Noodle</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={cheese} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Cheese</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={potato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Potato</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={tomato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Tomato</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={mushroom} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Mushroom</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
              </div>
            </BoxContainer>
            <NextButton>Continue</NextButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default LikeIngredient;