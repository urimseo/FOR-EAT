import React, { useState } from 'react';
import styled from "styled-components";
import egg from "assets/img/IngredientItem/egg.PNG";
import wheat from "assets/img/IngredientItem/flour.jpg";
import shellfish from "assets/img/IngredientItem/seafood.PNG";
import apple from "assets/img/IngredientItem/apple.PNG";
import walnut from "assets/img/IngredientItem/walnut.jpg";
import peanut from "assets/img/IngredientItem/peanut.jpg";
import sesame from "assets/img/IngredientItem/sesame.jpg";



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
    width: 66.7%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 44rem;
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

const BottomButton =styled.a`
  font-size: 1.2rem;
  font-weight: 300;
  cursor: pointer;
  border: none;
  float: ${(props) => (props.f ? props.f : "")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`

const AllergySurvey = () => {
  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>4/6</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="200" mb="1rem">Check your allergy information.</Title>
            <BoxContainer>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={wheat} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Wheat</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={peanut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Peanut</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={walnut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Walnut</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={apple} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Apple</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={sesame} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Sesame</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={shellfish} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Shellfish</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <ButtonContainer>
                      <img src={egg} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem">Egg</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    <Title fs="1rem">No interest</Title>
                  </Button>
                </SpaceBetweenContainer>
              </div>
            </BoxContainer>
            <BottomButton f="left" mt="1.5rem" ml="2rem">Back</BottomButton>
            <BottomButton f="right" mt="1.5rem" mr="2rem">Continue</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default AllergySurvey;