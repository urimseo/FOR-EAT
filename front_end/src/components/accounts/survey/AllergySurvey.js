import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";
import egg from "assets/img/IngredientItem/egg.PNG";
import wheat from "assets/img/IngredientItem/flour.jpg";
import shellfish from "assets/img/IngredientItem/seafood.PNG";
import apple from "assets/img/IngredientItem/apple.PNG";
import walnut from "assets/img/IngredientItem/walnut.jpg";
import peanut from "assets/img/IngredientItem/peanut.jpg";
import sesame from "assets/img/IngredientItem/sesame.jpg";
import BottomButton from "components/accounts/survey/BottomButton";



const Container = styled.div`
  min-height: 100vh;
  margin-bottom: 10rem;
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: black;
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
    height: 1.7rem;
    box-shadow: 0px 5px 5px 0px #d3d3d3;
    background-color: #ED8141;
    background: linear-gradient(-45deg, #ED8141, #ED8141, #f0e140, #ea0ba7);
    background-size: 400% 400%;
    animation: ${gradient} 5s ease infinite;
  }
  .box {
    width: 50rem;
    height: 48rem;
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
`

const Button = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  font-family: work sans;
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


const AllergySurvey = ({form, flag, propFunction, prevSteps, nextSteps}) => {
  const { allergy } = form;
  const { relevant } = flag;
  const [ wheatShow, setWheatShow ] = useState((allergy.includes(1)));
  const [ peanutShow, setPeanutShow ] = useState((allergy.includes(2)));
  const [ walnutShow, setWalnutShow ] = useState((allergy.includes(3)));
  const [ appleShow, setAppleShow ] = useState((allergy.includes(4)));
  const [ sesameShow, setSesameShow ] = useState((allergy.includes(5)));
  const [ shellfishShow, setShellfishShow ] = useState((allergy.includes(6)));
  const [ eggShow, setEggShow ] = useState((allergy.includes(7)));
  const [ relevantShow, setRelevantShow ] = useState(relevant);

  const getAllergy = (state) => {
    if(state === "wheat") {
      setWheatShow(!wheatShow);
      setRelevantShow(false);
      if (wheatShow === true) {
        propFunction([true, 1]);
      } else {
        propFunction([false, 1]);
      }
    }
    if(state === "peanut") {
      setPeanutShow(!peanutShow);
      setRelevantShow(false);
      if (peanutShow === true) {
        propFunction([true, 2]);
      } else {
        propFunction([false, 2]);
      }
    }
    if(state === "walnut") {
      setWalnutShow(!walnutShow);
      setRelevantShow(false);
      if (walnutShow === true) {
        propFunction([true, 3]);
      } else {
        propFunction([false, 3]);
      }
    }
    if(state === "apple") {
      setAppleShow(!appleShow);
      setRelevantShow(false);
      if (appleShow === true) {
        propFunction([true, 4]);
      } else {
        propFunction([false, 4]);
      }
    }
    if(state === "sesame") {
      setSesameShow(!sesameShow);
      setRelevantShow(false);
      if (sesameShow === true) {
        propFunction([true, 5]);
      } else {
        propFunction([false, 5]);
      }
    }
    if(state === "shellfish") {
      setShellfishShow(!shellfishShow);
      setRelevantShow(false);
      if (shellfishShow === true) {
        propFunction([true, 6]);
      } else {
        propFunction([false, 6]);
      }
    }
    if(state === "egg") {
      setEggShow(!eggShow);
      setRelevantShow(false);
      if (eggShow === true) {
        propFunction([true, 7]);
      } else {
        propFunction([false, 7]);
      }
    }
    if(state === "relevant") {
      setRelevantShow(!relevantShow);
      setWheatShow(false);
      setPeanutShow(false);
      setWalnutShow(false);
      setAppleShow(false);
      setSesameShow(false);
      setShellfishShow(false);
      setEggShow(false);
      propFunction(["relevant", !relevantShow]);
    }
  }
  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>4/6</div>
            <Title fs="2.5rem" fw="300" mt="2rem" mb="1rem">Select your information</Title>
            <Title fs="1.2rem" fw="300" mb="1rem">Check your allergy information.</Title>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  <Button mt="1rem" w="12rem" h="5rem" boxColor={wheatShow ? "#ED8141" : null } onClick={()=>getAllergy("wheat")}>
                    <ButtonContainer>
                      <img src={wheat} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Wheat</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="1rem" w="12rem" h="5rem" boxColor={peanutShow ? "#ED8141" : null } onClick={()=>getAllergy("peanut")}>
                    <ButtonContainer>
                      <img src={peanut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Peanut</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" boxColor={walnutShow ? "#ED8141" : null } onClick={()=>getAllergy("walnut")}>
                    <ButtonContainer>
                      <img src={walnut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Walnut</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" boxColor={appleShow ? "#ED8141" : null } onClick={()=>getAllergy("apple")}>
                    <ButtonContainer>
                      <img src={apple} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Apple</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" boxColor={sesameShow ? "#ED8141" : null } onClick={()=>getAllergy("sesame")}>
                    <ButtonContainer>
                      <img src={sesame} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Sesame</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" boxColor={shellfishShow ? "#ED8141" : null } onClick={()=>getAllergy("shellfish")}>
                    <ButtonContainer>
                      <img src={shellfish} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Shellfish</Title>
                    </ButtonContainer>
                  </Button>
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  <Button mt="2rem" w="12rem" h="5rem" boxColor={eggShow ? "#ED8141" : null } onClick={()=>getAllergy("egg")}>
                    <ButtonContainer>
                      <img src={egg} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                      <Title fs="1rem" mt="1rem" ml="1rem" fw="400">Egg</Title>
                    </ButtonContainer>
                  </Button>
                  <Button mt="2rem" w="12rem" h="5rem" boxColor={relevantShow ? "#ED8141" : null } onClick={()=>getAllergy("relevant")}>
                    <Title fs="1rem" fw="400">No relevant</Title>
                  </Button>
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


export default AllergySurvey;