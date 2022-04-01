import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";
import beef from "assets/img/IngredientItem/beef.jpg"
import rice from "assets/img/IngredientItem/rice.jpg"
import cheese from "assets/img/IngredientItem/cheese.jpg"
import chicken from "assets/img/IngredientItem/chicken2.PNG"
import mushroom from "assets/img/IngredientItem/mushroom2.PNG"
import noodle from "assets/img/IngredientItem/noodle2.PNG"
import pork from "assets/img/IngredientItem/pork.jpg"
import potato from "assets/img/IngredientItem/potato.jpg"
import tomato from "assets/img/IngredientItem/tomato.jpg"
import seafood from "assets/img/IngredientItem/seafood.PNG"



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

const Question = styled.div`
  display: flex;
  justify-content: center;
  .line {
    width: 83%;
    height: 1.7rem;
    box-shadow: 0px 5px 5px 0px #d3d3d3;
    background-color: #ED8141;
    background: linear-gradient(-45deg, #ED8141, #ED8141, #f0e140, #ea0ba7);
    background-size: 400% 400%;
    animation: ${gradient} 5s ease infinite;
  }
  .box {
    width: 50rem;
    height: 55rem;
    border: 0px solid grey;
    box-shadow: 3px 5px 5px 5px #d3d3d3;
  }
  .number {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0 0;
  }
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

const LikeIngredient = ({form, propFunction, prevSteps, nextSteps}) => {
  const { liked_ingredient } = form;
  const [beefShow, getBeefShow] = useState((liked_ingredient.includes('beef')));
  const [chickenShow, getChickenShow] = useState((liked_ingredient.includes('chicken')));
  const [porkShow, getPorkShow] = useState((liked_ingredient.includes('pork')));
  const [seafoodShow, getSeafoodShow] = useState((liked_ingredient.includes('seafood')));
  const [riceShow, getRiceShow] = useState((liked_ingredient.includes('rice')));
  const [noodleShow, getNoodleShow] = useState((liked_ingredient.includes('noodle')));
  const [cheeseShow, getCheeseShow] = useState((liked_ingredient.includes('cheese')));
  const [potatoShow, getPotatoShow] = useState((liked_ingredient.includes('potato')));
  const [tomatoShow, getTomatoShow] = useState((liked_ingredient.includes('tomato')));
  const [mushroomShow, getMushroomShow] = useState((liked_ingredient.includes('mushroom')));

  const getLikeIngredient = (state) => {
    if (state === "beef") {
      getBeefShow(!beefShow);
      if (beefShow === true) {
        propFunction([true, "beef"]);
      } else {
        propFunction([false, "beef"]);
      }
    }
    if (state === "chicken") {
      getChickenShow(!chickenShow);
      if (chickenShow === true) {
        propFunction([true, "chicken"]);
      } else {
        propFunction([false, "chicken"]);
      }
    }
    if (state === "pork") {
      getPorkShow(!porkShow);
      if (porkShow === true) {
        propFunction([true, "pork"]);
      } else {
        propFunction([false, "pork"]);
      }
    }
    if (state === "seafood") {
      getSeafoodShow(!seafoodShow);
      if (seafoodShow === true) {
        propFunction([true, "seafood"]);
      } else {
        propFunction([false, "seafood"]);
      }
    }
    if (state === "rice") {
      getRiceShow(!riceShow);
      if (riceShow === true) {
        propFunction([true, "rice"]);
      } else {
        propFunction([false, "rice"]);
      }
    }
    if (state === "noodle") {
      getNoodleShow(!noodleShow);
      if (noodleShow === true) {
        propFunction([true, "noodle"]);
      } else {
        propFunction([false, "noodle"]);
      }
    }
    if (state === "cheese") {
      getCheeseShow(!cheeseShow);
      if (cheeseShow === true) {
        propFunction([true, "cheese"]);
      } else {
        propFunction([false, "cheese"]);
      }
    }
    if (state === "potato") {
      getPotatoShow(!potatoShow);
      if (potatoShow === true) {
        propFunction([true, "potato"]);
      } else {
        propFunction([false, "potato"]);
      }
    }
    if (state === "tomato") {
      getTomatoShow(!tomatoShow);
      if (tomatoShow === true) {
        propFunction([true, "tomato"]);
      } else {
        propFunction([false, "tomato"]);
      }
    }
    if (state === "mushroom") {
      getMushroomShow(!mushroomShow);
      if (mushroomShow === true) {
        propFunction([true, "mushroom"]);
      } else {
        propFunction([false, "mushroom"]);
      }
    }
  }
  return (
    <>
    <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>5/6</div>
            <Title ff="work sans" fs="2.5rem" fw="300" mt="2rem" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Select your information</Title>
            <Title ff="work sans" fs="1.2rem" fw="200" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Check your favorite ingredient.</Title>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  { beefShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("beef")}>
                      <ButtonContainer>
                        <img src={beef} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Beef</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("beef")}>
                      <ButtonContainer>
                        <img src={beef} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Beef</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { chickenShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("chicken")}>
                      <ButtonContainer>
                        <img src={chicken} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Chicken</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("chicken")}>
                      <ButtonContainer>
                        <img src={chicken} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Chicken</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { porkShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("pork")}>
                      <ButtonContainer>
                        <img src={pork} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Pork</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("pork")}>
                      <ButtonContainer>
                        <img src={pork} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Pork</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { seafoodShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("seafood")}>
                      <ButtonContainer>
                        <img src={seafood} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Seafood</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("seafood")}>
                      <ButtonContainer>
                        <img src={seafood} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Seafood</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { riceShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("rice")}>
                      <ButtonContainer>
                        <img src={rice} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Rice</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("rice")}>
                      <ButtonContainer>
                        <img src={rice} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Rice</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { noodleShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("noodle")}>
                      <ButtonContainer>
                        <img src={noodle} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Noodle</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("noodle")}>
                      <ButtonContainer>
                        <img src={noodle} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Noodle</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { cheeseShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("cheese")}>
                      <ButtonContainer>
                        <img src={cheese} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Cheese</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("cheese")}>
                      <ButtonContainer>
                        <img src={cheese} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Cheese</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { potatoShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("potato")}>
                      <ButtonContainer>
                        <img src={potato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Potato</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("potato")}>
                      <ButtonContainer>
                        <img src={potato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Potato</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                { tomatoShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("tomato")}>
                      <ButtonContainer>
                        <img src={tomato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Tomato</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("tomato")}>
                      <ButtonContainer>
                        <img src={tomato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Tomato</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { mushroomShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("mushroom")}>
                      <ButtonContainer>
                        <img src={mushroom} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Mushroom</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("mushroom")}>
                      <ButtonContainer>
                        <img src={mushroom} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title fs="1rem" mt="1rem" ml="1rem">Mushroom</Title>
                      </ButtonContainer>
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


export default LikeIngredient;