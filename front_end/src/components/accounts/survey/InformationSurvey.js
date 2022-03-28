import React, { useState } from 'react';
import styled from "styled-components";


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
    width: 16.6%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 29rem;
    border: 0px solid grey;
    box-shadow: 3px 5px 5px 5px #d3d3d3;
  }
  .number {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0 0;
  }
`

const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
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

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

const SelectContent = styled.select`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  font-family: Work Sans;
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

const InformationSurvey = () => {
  const [genderShow, setGenderShow] = useState();

  const survey = (info) => {
    if (info === true) {
      setGenderShow(true)
    } else {
      setGenderShow(false)
    }
  }
  return (
    <>
      <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>1/6</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="200" mb="2rem">Check your gender and age.</Title>
            <ButtonContainer>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Man
                  </Button>
                  <Button mt="1rem" w="12rem" h="5rem" hoverColor="#a2a2a2">
                    Woman
                  </Button>
                </SpaceBetweenContainer>
              </div>
            </ButtonContainer>
            <SelectContainer>
              <Title mt="0.5rem" fs="1rem" mr="0.5rem">AGE</Title>
              <SelectContent>
                <option value="0" selected disabled>select age</option>
                <option value="1">15-19 years old</option>
                <option value="2">20-29 years old</option>
                <option value="3">30-49 years old</option>
                <option value="4">50-64 years old</option>
                <option value="5">65-74 years old</option>
                <option value="6">75 years of age or older</option>
              </SelectContent>
            </SelectContainer>
            <BottomButton f="right" mt="1.5rem" mr="2rem">Continue</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}

export default InformationSurvey;