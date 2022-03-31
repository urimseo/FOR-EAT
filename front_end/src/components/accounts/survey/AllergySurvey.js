import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";
import egg from "assets/img/IngredientItem/egg.PNG";
import wheat from "assets/img/IngredientItem/flour.jpg";
import shellfish from "assets/img/IngredientItem/seafood.PNG";
import apple from "assets/img/IngredientItem/apple.PNG";
import walnut from "assets/img/IngredientItem/walnut.jpg";
import peanut from "assets/img/IngredientItem/peanut.jpg";
import sesame from "assets/img/IngredientItem/sesame.jpg";


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
    height: 1.2rem;
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

const AllergySurvey = ({propFunction, prevSteps, nextSteps}) => {
  const [ wheatShow, setWheatShow ] = useState(false);
  const [ peanutShow, setPeanutShow ] = useState(false);
  const [ walnutShow, setWalnutShow ] = useState(false);
  const [ appleShow, setAppleShow ] = useState(false);
  const [ sesameShow, setSesameShow ] = useState(false);
  const [ shellfishShow, setShellfishShow ] = useState(false);
  const [ eggShow, setEggShow ] = useState(false);
  const [ relevantShow, setRelevantShow ] = useState(false);

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
      propFunction(["relevant", false]);
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
            <Title fs="1.2rem" fw="200" mb="1rem">Check your allergy information.</Title>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  { wheatShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("wheat")}>
                      <ButtonContainer>
                        <img src={wheat} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Wheat</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getAllergy("wheat")}>
                      <ButtonContainer>
                        <img src={wheat} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Wheat</Title>
                      </ButtonContainer>
                    </Button>
                  }
                  { peanutShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("peanut")}>
                      <ButtonContainer>
                        <img src={peanut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Peanut</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getAllergy("peanut")}>
                      <ButtonContainer>
                        <img src={peanut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Peanut</Title>
                      </ButtonContainer>
                    </Button>
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { walnutShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("walnut")}>
                      <ButtonContainer>
                        <img src={walnut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Walnut</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getAllergy("walnut")}>
                      <ButtonContainer>
                        <img src={walnut} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Walnut</Title>
                      </ButtonContainer>
                    </Button>
                  }
                  { appleShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("apple")}>
                      <ButtonContainer>
                        <img src={apple} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Apple</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getAllergy("apple")}>
                      <ButtonContainer>
                        <img src={apple} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Apple</Title>
                      </ButtonContainer>
                    </Button>
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { sesameShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("sesame")}>
                      <ButtonContainer>
                        <img src={sesame} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Sesame</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getAllergy("sesame")}>
                      <ButtonContainer>
                        <img src={sesame} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Sesame</Title>
                      </ButtonContainer>
                    </Button>
                  }
                  { shellfishShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("shellfish")}>
                      <ButtonContainer>
                        <img src={shellfish} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Shellfish</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getAllergy("shellfish")}>
                      <ButtonContainer>
                        <img src={shellfish} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Shellfish</Title>
                      </ButtonContainer>
                    </Button>
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { eggShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("egg")}>
                      <ButtonContainer>
                        <img src={egg} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Egg</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getAllergy("egg")}>
                      <ButtonContainer>
                        <img src={egg} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                        <Title fs="1rem" mt="1rem" ml="1rem">Egg</Title>
                      </ButtonContainer>
                    </Button>
                  }
                  { relevantShow ?
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getAllergy("relevant")}>
                      <Title fs="1rem">No relevant</Title>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getAllergy("relevant")}>
                      <Title fs="1rem">No relevant</Title>
                    </Button>
                  }
                </SpaceBetweenContainer>
              </div>
            </div>
            <BottomButton f="left" mt="3.5rem" ml="2rem" onClick={prevSteps}>Back</BottomButton>
            <BottomButton f="right" mt="3.5rem" mr="2rem" onClick={nextSteps}>Continue</BottomButton>
          </div>
        </Question>
      </Container>
    </>
  )
}


export default AllergySurvey;