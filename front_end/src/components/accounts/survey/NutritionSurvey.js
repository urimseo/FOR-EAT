import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";
import carbohydrates from "assets/img/carbohydrates.png"
import protein from "assets/img/protein.png"
import fat from "assets/img/province.png"


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
    width: 33%;
    height: 1.2rem;
    background-color: #ED8141;
    background: linear-gradient(-45deg, #ED8141, #ED8141, #f0e140, #ea0ba7);
    background-size: 400% 400%;
    animation: ${gradient} 5s ease infinite;
  }
  .box {
    width: 50rem;
    height: 35rem;
    border: 0px solid grey;
    box-shadow: 3px 5px 5px 5px #d3d3d3;
  }
  .number {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem 1.5rem 0 0;
  }
`

const Item = styled.div`
  display: flex;
`

const Button = styled.button`
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 10rem;
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  background-color: ${(props) => (props.bc ? props.bc : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  border: none;
  box-shadow: 1px 1px 10px 3px ${(props) => (props.boxColor ? props.boxColor : "#e2e2e2")};
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


const NutritionSurvey = ({propFunction, prevSteps, nextSteps}) => {
  const [carbohydratesHighShow, setCarbohydratesHighShow] = useState(false);
  const [carbohydratesAverageShow, setCarbohydratesAverageShow] = useState(false);
  const [carbohydratesLowShow, setCarbohydratesLowShow] = useState(false);
  const [proteinHighShow, setProteinHighShow] = useState(false);
  const [proteinAverageShow, setProteinAverageShow] = useState(false);
  const [proteinLowShow, setProteinLowShow] = useState(false);
  const [fatHighShow, setFatHighShow] = useState(false);
  const [fatAverageShow, setFatAverageShow] = useState(false);
  const [fatLowShow, seFatLowShow] = useState(false);

  const getCarbohydrates = (state) => {
    if (state === "high") {
      setCarbohydratesHighShow(!carbohydratesHighShow);
      setCarbohydratesAverageShow(false);
      setCarbohydratesLowShow(false);
      if (carbohydratesHighShow === false) {
        propFunction(['carbohydrate', 3]);
      } else {
        propFunction(['carbohydrate', 0]);
      }
    }
    if (state === "average") {
      setCarbohydratesHighShow(false);
      setCarbohydratesAverageShow(!carbohydratesAverageShow);
      setCarbohydratesLowShow(false);
      if (carbohydratesAverageShow === false) {
        propFunction(['carbohydrate', 2]);
      } else {
        propFunction(['carbohydrate', 0]);
      }
    }
    if (state === "low") {
      setCarbohydratesHighShow(false);
      setCarbohydratesAverageShow(false);
      setCarbohydratesLowShow(!carbohydratesLowShow);
      if (carbohydratesLowShow === false) {
        propFunction(['carbohydrate', 1]);
      } else {
        propFunction(['carbohydrate', 0]);
      }
      
    }
  }

  const getProtein = (state) => {
    if (state === "high") {
      setProteinHighShow(!proteinHighShow);
      setProteinAverageShow(false);
      setProteinLowShow(false);
      if (proteinHighShow === false) {
        propFunction(['protein', 3]);
      } else {
        propFunction(['protein', 0]);
      }
    }
    if (state === "average") {
      setProteinHighShow(false);
      setProteinAverageShow(!proteinAverageShow);
      setProteinLowShow(false);
      if (proteinAverageShow === false){
        propFunction(['protein', 2]);
      } else {
        propFunction(['protein', 0]);
      }
    }
    if (state === "low") {
      setProteinHighShow(false);
      setProteinAverageShow(false);
      setProteinLowShow(!proteinLowShow);
      if (proteinLowShow === false){
        propFunction(['protein', 1]);
      } else {
        propFunction(['protein', 1]);
      }
    }
  }

  const getFat = (state) => {
    if (state === "high") {
      setFatHighShow(!fatHighShow);
      setFatAverageShow(false);
      seFatLowShow(false);
      if (fatHighShow === false) {
        propFunction(['fat', 3]);
      } else {
        propFunction(['fat', 0]);
      }
    }
    if (state === "average") {
      setFatHighShow(false);
      setFatAverageShow(!fatAverageShow);
      seFatLowShow(false);
      if (fatAverageShow === false) {
        propFunction(['fat', 2]);
      } else {
        propFunction(['fat', 0]);
      }
    }
    if (state === "low") {
      setFatHighShow(false);
      setFatAverageShow(false);
      seFatLowShow(!fatLowShow);
      if (fatLowShow === false) {
        propFunction(['fat', 1]);
      } else {
        propFunction(['fat', 0]);
      }
    }
  }
  return (
    <>
      <Container>
        <Question>
          <div className='box'>
            <div className='line'></div>
            <div className='number'>2/6</div>
            <Title ff="work sans" fs="2.5rem" fw="300" mt="2rem" mb="1rem" style={{display: "flex", justifyContent: "center"}}>Select your information</Title>
            <Title ff="work sans" fs="1.2rem" fw="200" mb="2rem" style={{display: "flex", justifyContent: "center"}}>Check your nutritional interest.</Title>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <div>
                <Item>
                  <img src={carbohydrates} alt="carbohydrates" style={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                  <Title fs="1rem" fw="300" mt="1.2rem" ml="1rem">Carbohydrates</Title>
                  { carbohydratesHighShow ? 
                    <Button mt="0.7rem" ml="1rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getCarbohydrates("high")}>High</Button> :
                    <Button mt="0.7rem" ml="1rem" h="2rem" w="5rem" onClick={()=>getCarbohydrates("high")}>High</Button>
                  }
                  { carbohydratesAverageShow ? 
                  <Button mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getCarbohydrates("average")}>Average</Button> :
                  <Button mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" onClick={()=>getCarbohydrates("average")}>Average</Button>
                  }
                  { carbohydratesLowShow ? 
                    <Button mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getCarbohydrates("low")}>Low</Button> :
                    <Button mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" onClick={()=>getCarbohydrates("low")}>Low</Button>
                  }
                </Item>
                <Item>
                  <img src={protein} alt="protein" style={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                  <Title fs="1rem" fw="300" mt="1.5rem" ml="1rem">Protein</Title>
                  { proteinHighShow ? 
                    <Button mt="1rem" ml="4.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getProtein("high")}>High</Button> :
                    <Button mt="1rem" ml="4.5rem" h="2rem" w="5rem" onClick={()=>getProtein("high")}>High</Button>
                  }
                  { proteinAverageShow ?
                    <Button mt="1rem" ml="0.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getProtein("average")}>Average</Button> :
                    <Button mt="1rem" ml="0.5rem" h="2rem" w="5rem" onClick={()=>getProtein("average")}>Average</Button>
                  }
                  { proteinLowShow ?
                    <Button mt="1rem" ml="0.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getProtein("low")}>Low</Button> :
                    <Button mt="1rem" ml="0.5rem" h="2rem" w="5rem" onClick={()=>getProtein("low")}>Low</Button>
                  }
                </Item>
                <Item>
                  <img src={fat} alt="province" style={{width: "4rem", height: "4rem"}} />
                  <Title fs="1rem" fw="300" mt="2rem" ml="1rem">Fat</Title>
                  { fatHighShow ?
                    <Button mt="1.5rem" ml="6.4rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getFat("high")}>High</Button> :
                    <Button mt="1.5rem" ml="6.4rem" h="2rem" w="5rem" onClick={()=>getFat("high")}>High</Button>
                  }
                  { fatAverageShow ?
                    <Button mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getFat("average")}>Average</Button> :
                    <Button mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" onClick={()=>getFat("average")}>Average</Button>
                  }
                  { fatLowShow ?
                    <Button mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" bc="#ED8141" color="white" onClick={()=>getFat("low")}>Low</Button> :
                    <Button mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" onClick={()=>getFat("low")}>Low</Button>
                  }
                </Item>
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

export default NutritionSurvey;