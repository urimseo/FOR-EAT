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
    width: 100%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 37rem;
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

const GoalSurvey = ({clickSubmit, propFunction, prevSteps}) => {
  const [beginnerShow, getBeginnerShow] = useState(false);
  const [newShow, getNewShow] = useState(false);
  const [timeShow, getTimeShow] = useState(false);
  const [healtyShow, getHealtyShow] = useState(false);
  const [weightShow, getWeightShow] = useState(false);
  const [interestShow, getInterestShow] = useState(false);

  
  const getGoal = (state) => {
    if (state === "beginner") {
      getBeginnerShow(!beginnerShow);
      getInterestShow(false);
      propFunction(['beginner', !beginnerShow]);
    }
    if (state === "new") {
      getNewShow(!newShow);
      getInterestShow(false);
      propFunction(['recipe_challenger', !newShow]);
    }
    if (state === "time") {
      getTimeShow(!timeShow);
      getInterestShow(false);
      propFunction(['timesaver', !timeShow]);
    }
    if (state === "healty") {
      getHealtyShow(!healtyShow);
      getInterestShow(false);
      propFunction(['healthy_diet', !healtyShow]);
    }
    if (state === "weight") {
      getWeightShow(!weightShow);
      getInterestShow(false);
      propFunction(['lose_weight', !weightShow]);
    }
    if (state === "interest") {
      getInterestShow(!interestShow);
      getBeginnerShow(false);
      getNewShow(false);
      getTimeShow(false);
      getHealtyShow(false);
      getWeightShow(false);
      propFunction(['noInterest', false]);
    }
  }

  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>6/6</div>
            <Title ff="work sans" fs="2.5rem" fw="300" mt="2rem" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Select your information</Title>
            <Title ff="work sans" fs="1.2rem" fw="200" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Check your diet goal.</Title>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  { beginnerShow ?
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getGoal("beginner")}>
                      Beginner cook
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getGoal("beginner")}>
                      Beginner cook
                    </Button>
                  }
                  { newShow ?
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getGoal("new")}>
                      To new cuisine
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getGoal("new")}>
                      To new cuisine
                    </Button>
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { timeShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getGoal("time")}>
                      To save time
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getGoal("time")}>
                      To save time
                    </Button>
                  }
                  { healtyShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getGoal("healty")}>
                      To eat healty
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getGoal("healty")}>
                      To eat healty
                    </Button>
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { weightShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getGoal("weight")}>
                      To lose weight
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getGoal("weight")}>
                      To lose weight
                    </Button>
                  }
                  { interestShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getGoal("interest")}>
                      No interest
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getGoal("interest")}>
                      No interest
                    </Button>
                  }
                </SpaceBetweenContainer>
              </div>
            </div>
            <BottomButton f="left" mt="1.5rem" ml="2rem" onClick={prevSteps}>Back</BottomButton>
            <BottomButton f="right" mt="1.5rem" mr="2rem" onClick={clickSubmit}>Submit</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default GoalSurvey;