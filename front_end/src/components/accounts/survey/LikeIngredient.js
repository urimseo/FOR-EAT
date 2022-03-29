import React, { useState } from 'react';
import styled from "styled-components";
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
import Title from "components/commons/Title"



const Container = styled.div`
  min-height: 100vh;
`

const Question = styled.div`
  display: flex;
  justify-content: center;
  .line {
    width: 83%;
    height: 1.2rem;
    background-color: #ED8141;
  }
  .box {
    width: 50rem;
    height: 51.2rem;
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

const LikeIngredient = () => {
  const [beefShow, getBeefShow] = useState(false);
  const [chickenShow, getChickenShow] = useState(false);
  const [porkShow, getPorkShow] = useState(false);
  const [seafoodShow, getSeafoodShow] = useState(false);
  const [riceShow, getRiceShow] = useState(false);
  const [noodleShow, getNoodleShow] = useState(false);
  const [cheeseShow, getCheeseShow] = useState(false);
  const [potatoShow, getPotatoShow] = useState(false);
  const [tomatoShow, getTomatoShow] = useState(false);
  const [mushroomShow, getMushroomShow] = useState(false);

  const getLikeIngredient = (state) => {
    if (state === "beef") {
      getBeefShow(!beefShow);
    }
    if (state === "chicken") {
      getChickenShow(!chickenShow);
    }
    if (state === "pork") {
      getPorkShow(!porkShow);
    }
    if (state === "seafood") {
      getSeafoodShow(!seafoodShow);
    }
    if (state === "rice") {
      getRiceShow(!riceShow);
    }
    if (state === "noodle") {
      getNoodleShow(!noodleShow);
    }
    if (state === "cheese") {
      getCheeseShow(!cheeseShow);
    }
    if (state === "potato") {
      getPotatoShow(!potatoShow);
    }
    if (state === "tomato") {
      getTomatoShow(!tomatoShow);
    }
    if (state === "mushroom") {
      getMushroomShow(!mushroomShow);
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
            <div style={{display: "flex", justifyContent: "center"}}>
              <div style={{width: "26rem"}}>
                <SpaceBetweenContainer>
                  { beefShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("beef")}>
                      <ButtonContainer>
                        <img src={beef} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Beef</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("beef")}>
                      <ButtonContainer>
                        <img src={beef} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Beef</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { chickenShow ? 
                    <Button mt="1rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("chicken")}>
                      <ButtonContainer>
                        <img src={chicken} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Chicken</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="1rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("chicken")}>
                      <ButtonContainer>
                        <img src={chicken} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Chicken</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { porkShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("pork")}>
                      <ButtonContainer>
                        <img src={pork} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Pork</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("pork")}>
                      <ButtonContainer>
                        <img src={pork} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Pork</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { seafoodShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("seafood")}>
                      <ButtonContainer>
                        <img src={seafood} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Seafood</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("seafood")}>
                      <ButtonContainer>
                        <img src={seafood} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Seafood</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { riceShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("rice")}>
                      <ButtonContainer>
                        <img src={rice} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Rice</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("rice")}>
                      <ButtonContainer>
                        <img src={rice} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Rice</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { noodleShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("noodle")}>
                      <ButtonContainer>
                        <img src={noodle} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Noodle</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("noodle")}>
                      <ButtonContainer>
                        <img src={noodle} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Noodle</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                  { cheeseShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("cheese")}>
                      <ButtonContainer>
                        <img src={cheese} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Cheese</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("cheese")}>
                      <ButtonContainer>
                        <img src={cheese} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Cheese</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { potatoShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("potato")}>
                      <ButtonContainer>
                        <img src={potato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Potato</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("potato")}>
                      <ButtonContainer>
                        <img src={potato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Potato</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                </SpaceBetweenContainer>
                <SpaceBetweenContainer>
                { tomatoShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("tomato")}>
                      <ButtonContainer>
                        <img src={tomato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Tomato</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("tomato")}>
                      <ButtonContainer>
                        <img src={tomato} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Tomato</Title>
                      </ButtonContainer>
                    </Button>  
                  }
                  { mushroomShow ? 
                    <Button mt="2rem" w="12rem" h="5rem" boxColor="#ED8141" onClick={()=>getLikeIngredient("mushroom")}>
                      <ButtonContainer>
                        <img src={mushroom} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Mushroom</Title>
                      </ButtonContainer>
                    </Button> :
                    <Button mt="2rem" w="12rem" h="5rem" onClick={()=>getLikeIngredient("mushroom")}>
                      <ButtonContainer>
                        <img src={mushroom} alt="beef" style={{width: "3rem", height: "3rem", marginLeft:"1.2rem", borderRadius: "10rem"}} />
                          <Title ff="work sans" fs="1rem" mt="1rem" ml="1rem">Mushroom</Title>
                      </ButtonContainer>
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


export default LikeIngredient;