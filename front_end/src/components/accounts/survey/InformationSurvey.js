import React, { useState } from 'react';
import styled from "styled-components";
import Title from "components/commons/Title"


const Container = styled.div`
  min-height: 100vh;
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

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 1px 1px 10px 3px ${(props) => (props.boxColor ? props.boxColor : "#e2e2e2")};
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  background-color: white;
  border: none;
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
  &:hover {
    color: ${(props) =>
      props.hoverColor ? props.hoverColor : "#a2a2a2"};
  }
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

const InformationSurvey = ({propFunction, nextSteps}) => {
  const [womanShow, setWomanShow] = useState();
  const [manShow, setManShow] = useState();

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
            <Title ff="work sans" fs="1.2rem" fw="200" mb="2rem" style={{display: "flex", justifyContent: "center"}}>Check your gender and age.</Title>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  {manShow ?
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141">
                      Man
                    </Button>
                    :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>survey(false)}>
                      Man
                    </Button>
                  }
                  {womanShow ?
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141">
                      Woman
                    </Button>
                    :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>survey(true)}>
                      Woman
                    </Button>
                  }
                </SpaceBetweenContainer>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <Title ff="work sans" mt="0.5rem" fs="1rem" mr="0.5rem">AGE</Title>
              <SelectContent onChange={(e) => handleChange(e)}>
                <option value="0" defaultValue>select age</option>
                <option value="1">15-19 years old</option>
                <option value="2">20-29 years old</option>
                <option value="3">30-49 years old</option>
                <option value="4">50-64 years old</option>
                <option value="5">65-74 years old</option>
                <option value="6">75 years of age or older</option>
              </SelectContent>
            </div>
            <BottomButton f="right" mt="1.5rem" mr="2rem" onClick={nextSteps}>Continue</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}

export default InformationSurvey;