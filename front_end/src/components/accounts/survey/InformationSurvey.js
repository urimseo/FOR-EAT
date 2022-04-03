import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import Title from "components/commons/Title"
import BottomButton from "components/accounts/survey/BottomButton";
import Button from "components/accounts/survey/Button";



const Container = styled.div`
  min-height: 100vh;
`

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

const Question = styled.div`
  display: flex;
  justify-content: center;
  .line {
    width: 16.6%;
    height: 1.7rem;
    box-shadow: 0px 5px 5px 0px #d3d3d3;
    background: linear-gradient(-45deg, #ED8141, #ED8141, #f0e140, #ea0ba7);
    background-size: 400% 400%;
    animation: ${gradient} 5s ease infinite;
  }
  .box {
    width: 50rem;
    height: 34rem;
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

const SelectContent = styled.select`
  width: 20rem;
  height: 2rem;
  font-size: 1rem;
  font-family: Work Sans;
`



const InformationSurvey = ({form, propFunction, nextSteps}) => {
  const { age, gender } = form  // 필요한 키들만 비구조할당으로 선언
  const [womanShow, setWomanShow] = useState(gender);
  const [manShow, setManShow] = useState((gender === null ? false : !gender));

  const survey = (info) => {
    if (info === true) {
      setWomanShow(true);
      setManShow(false);
      propFunction(['gender', true])
    } else {
      setManShow(true)
      setWomanShow(false)
      propFunction(['gender', false])
    }
  }
  
  const handleChange = (e) => {
    propFunction(['age', e.target.value])
  };

  return (
    <>
      <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>1/6</div>
            <Title ff="work sans" fs="2.5rem" fw="300" mt="2rem" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Select your information</Title>
            <Title ff="work sans" fs="1.2rem" fw="300" mt="3.5rem" style={{display: "flex", justifyContent: "center"}}>
              Please check your gender.
            </Title >
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" name="man" boxColor={manShow ? "#ED8141" : null} onClick={()=>survey(false)} />
                  <Button mt="1rem" w="12rem" h="5rem" name="woman" boxColor={womanShow ? "#ED8141" : null} onClick={()=>survey(true)} />
                </SpaceBetweenContainer>
              </div>
            </div>
            <Title ff="work sans" fs="1.2rem" fw="300" mt="3.5rem" style={{display: "flex", justifyContent: "center"}}>
              Please check your age.
            </Title >
            <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
              <Title ff="work sans" mt="0.5rem" fs="1rem" mr="0.5rem">AGE</Title>
              <SelectContent defaultValue={age} onChange={(e) => handleChange(e)}>
                <option value="0" defaultValue>select age</option>
                <option value="1">15-19 years old</option>
                <option value="2">20-29 years old</option>
                <option value="3">30-49 years old</option>
                <option value="4">50-64 years old</option>
                <option value="5">65-74 years old</option>
                <option value="6">75 years of age or older</option>
              </SelectContent>
            </div>
            <BottomButton f="right" mt="3rem" mr="2rem" name="Continue" onClick={nextSteps} />
          </div>
        </Question>
      </Container>
    </>
  )
}

export default InformationSurvey;