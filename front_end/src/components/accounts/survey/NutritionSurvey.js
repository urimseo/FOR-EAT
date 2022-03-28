import React, { useState } from 'react';
import styled from "styled-components";
import carbohydrates from "assets/img/carbohydrates.png"
import protein from "assets/img/protein.png"
import province from "assets/img/province.png"


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
    width: 33%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 32rem;
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

const Item = styled.div`
  display: flex;
`

const Button = styled.button`
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 10rem;
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


const NutritionSurvey = () => {
  return (
    <>
      <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>2/6</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="200" mb="2rem">Check your nutritional interest.</Title>
            <BoxContainer>
              <div>
                <Item>
                  <img src={carbohydrates} alt="carbohydrates" style={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                  <Title fs="1rem" fw="300" mt="1.2rem" ml="1rem">Carbohydrates</Title>
                  <Button mt="0.7rem" ml="1rem" h="2rem" w="5rem" hoverColor="#a2a2a2">High</Button>
                  <Button mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" hoverColor="#a2a2a2">Average</Button>
                  <Button mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" hoverColor="#a2a2a2">Low</Button>
                </Item>
                <Item>
                  <img src={protein} alt="protein" style={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                  <Title fs="1rem" fw="300" mt="1.5rem" ml="1rem">Protein</Title>
                  <Button mt="1rem" ml="1rem" h="2rem" w="5rem" hoverColor="#a2a2a2">High</Button>
                  <Button mt="1rem" ml="0.5rem" h="2rem" w="5rem" hoverColor="#a2a2a2">Average</Button>
                  <Button mt="1rem" ml="0.5rem" h="2rem" w="5rem" hoverColor="#a2a2a2">Low</Button>
                </Item>
                <Item>
                  <img src={province} alt="province" style={{width: "4rem", height: "4rem"}} />
                  <Title fs="1rem" fw="300" mt="2rem" ml="1rem">Province</Title>
                  <Button mt="1.5rem" ml="1rem" h="2rem" w="5rem" hoverColor="#a2a2a2">High</Button>
                  <Button mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" hoverColor="#a2a2a2">Average</Button>
                  <Button mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" hoverColor="#a2a2a2">Low</Button>
                </Item>
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

export default NutritionSurvey;