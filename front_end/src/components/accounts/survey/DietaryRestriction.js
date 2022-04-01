import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";
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
    width: 50%;
    height: 1.7rem;
    box-shadow: 0px 5px 5px 0px #d3d3d3;
    background-color: #ED8141;
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


const DietaryRestriction = ({form, flag, propFunction, prevSteps, nextSteps}) => {
  const { cholesterol, sodium, sugar } = form;
  const { interest } = flag;
  const [cholesterolShow, setCholesterolShow] = useState(cholesterol);
  const [sodiumShow, setShdisumShow] = useState(sodium);
  const [sugarShow, setSugarShow] = useState(sugar);
  const [interestShow, setInterestShow] = useState(interest);

  const getRestriction = (state) => {
    if (state === "cholesterol") {
      setCholesterolShow(!cholesterolShow);
      setInterestShow(false);
      propFunction(['cholesterol', !cholesterolShow]);
    }
    if (state === "sodium") {
      setShdisumShow(!sodiumShow);
      setInterestShow(false);
      propFunction(['sodium', !sodiumShow]);
    }
    if (state === "sugar") {
      setSugarShow(!sugarShow);
      setInterestShow(false);
      propFunction(['sugar', !sugarShow]);
    }
    if (state === "interest") {
      setInterestShow(!interestShow);
      setCholesterolShow(false);
      setShdisumShow(false);
      setSugarShow(false);
      propFunction(['interest', !interestShow])
    }
  }

  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>3/6</div>
            <Title ff="work sans" fs="2.5rem" fw="300" mt="2rem" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Select your information</Title>
            <Title ff="work sans" fs="1.2rem" fw="300" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Check your dietary restriction.</Title>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" name="Low cholesterol" boxColor={cholesterolShow ? "#ED8141" : null } onClick={()=>getRestriction("cholesterol")} />
                  <Button mt="1rem" w="12rem" h="5rem" name="Low sodium" boxColor={sodiumShow ? "#ED8141" : null } onClick={()=>getRestriction("sodium")} />
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" name="Low sugar" boxColor={sugarShow ? "#ED8141" : null } onClick={()=>getRestriction("sugar")} />
                  <Button mt="2rem" w="12rem" h="5rem" name="No interest" boxColor={interestShow ? "#ED8141" : null } onClick={()=>getRestriction("interest")} />
                </SpaceBetweenContainer>
              </div>
            </div>
            <BottomButton f="left" mt="3.5rem" ml="2rem" name="Back" onClick={prevSteps}>Back</BottomButton>
            <BottomButton f="right" mt="3.5rem" mr="2rem" name="Continue" onClick={nextSteps}>Continue</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default DietaryRestriction;