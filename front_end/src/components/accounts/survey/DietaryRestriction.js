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
    width: 50%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 30rem;
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

const DietaryRestriction = () => {
  const [cholesterolShow, setCholesterolShow] = useState(false);
  const [sodiumShow, setShdisumShow] = useState(false);
  const [sugarShow, setSugarShow] = useState(false);
  const [interestShow, setInterestShow] = useState(false);

  const getRestriction = (state) => {
    if (state === "cholesterol") {
      setCholesterolShow(!cholesterolShow);
      setInterestShow(false);
    }
    if (state === "sodium") {
      setShdisumShow(!sodiumShow);
      setInterestShow(false);
    }
    if (state === "sugar") {
      setSugarShow(!sugarShow);
      setInterestShow(false);
    }
    if (state === "interest") {
      setInterestShow(!interestShow);
      setCholesterolShow(false);
      setShdisumShow(false);
      setSugarShow(false);
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
            <Title ff="work sans" fs="1.2rem" fw="200" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Check your dietary restriction.</Title>
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  { cholesterolShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getRestriction("cholesterol")}>
                      Low cholesterol
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getRestriction("cholesterol")}>
                      Low cholesterol
                    </Button> 
                  }
                  { sodiumShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getRestriction("sodium")}>
                      Low sodium
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getRestriction("sodium")}>
                      Low sodium
                    </Button>
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { sugarShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getRestriction("sugar")}>
                      Low sugar
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getRestriction("sugar")}>
                      Low sugar
                    </Button>
                  }
                  { interestShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getRestriction("interest")}>
                      No interest
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getRestriction("interest")}>
                      No interest
                    </Button>
                  }
                </SpaceBetweenContainer>
              </div>
            </div>
            <BottomButton f="left" mt="1.5rem" ml="2rem">Back</BottomButton>
            <BottomButton f="right" mt="1.5rem" mr="2rem">Continue</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default DietaryRestriction;