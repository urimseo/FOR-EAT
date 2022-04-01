import React, { useState } from 'react';
import styled, {keyframes} from "styled-components";
import carbohydrateImg from "assets/img/carbohydrates.png"
import proteinImg from "assets/img/protein.png"
import fatImg from "assets/img/province.png"
import BottomButton from "components/accounts/survey/BottomButton";
import Button from "components/accounts/survey/Button";




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
    height: 1.7rem;
    box-shadow: 0px 5px 5px 0px #d3d3d3;
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


const NutritionSurvey = ({form, propFunction, prevSteps, nextSteps}) => {
  const { carbohydrate, protein, fat } = form;

  const [carbohydrateHighShow, setCarbohydrateHighShow] = useState((carbohydrate === 3 ? true : false));
  const [carbohydrateAverageShow, setCarbohydrateAverageShow] = useState((carbohydrate === 2 ? true : false));
  const [carbohydrateLowShow, setCarbohydrateLowShow] = useState(((carbohydrate === 1 ? true : false)));
  const [proteinHighShow, setProteinHighShow] = useState((protein === 3 ? true : false));
  const [proteinAverageShow, setProteinAverageShow] = useState((protein === 2 ? true : false));
  const [proteinLowShow, setProteinLowShow] = useState((protein === 1 ? true : false));
  const [fatHighShow, setFatHighShow] = useState((fat === 3 ? true : false));
  const [fatAverageShow, setFatAverageShow] = useState((fat === 2 ? true : false));
  const [fatLowShow, seFatLowShow] = useState((fat === 1 ? true : false));


  const getCarbohydrates = (state) => {
    if (state === "high") {
      setCarbohydrateHighShow(!carbohydrateHighShow);
      setCarbohydrateAverageShow(false);
      setCarbohydrateLowShow(false);
      if (carbohydrateHighShow === false) {
        propFunction(['carbohydrate', 3]);
      } else {
        propFunction(['carbohydrate', 0]);
      }
    }
    if (state === "average") {
      setCarbohydrateHighShow(false);
      setCarbohydrateAverageShow(!carbohydrateAverageShow);
      setCarbohydrateLowShow(false);
      if (carbohydrateAverageShow === false) {
        propFunction(['carbohydrate', 2]);
      } else {
        propFunction(['carbohydrate', 0]);
      }
    }
    if (state === "low") {
      setCarbohydrateHighShow(false);
      setCarbohydrateAverageShow(false);
      setCarbohydrateLowShow(!carbohydrateLowShow);
      if (carbohydrateLowShow === false) {
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
        propFunction(['protein', 0]);
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
            <Title ff="work sans" fs="1.2rem" fw="300" mb="2rem" style={{display: "flex", justifyContent: "center"}}>Check your nutritional interest.</Title>
            <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
              <div>
                <Item>
                  <img src={carbohydrateImg} alt="carbohydrates" style={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                  <Title fs="1rem" fw="300" mt="1.2rem" ml="1rem">Carbohydrates</Title>
                  <Button fs="0.9rem" mt="0.7rem" ml="1rem" h="2rem" w="5rem" name="High" bc={carbohydrateHighShow ? "#ED8141" : null } color={carbohydrateHighShow ? "white" : null } onClick={()=>getCarbohydrates("high")} />
                  <Button fs="0.9rem" mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" name="Average" bc={carbohydrateAverageShow ? "#ED8141" : null } color={carbohydrateAverageShow ? "white" : null } onClick={()=>getCarbohydrates("average")} />
                  <Button fs="0.9rem" mt="0.7rem" ml="0.5rem" h="2rem" w="5rem" name="Low" bc={carbohydrateLowShow ? "#ED8141" : null } color={carbohydrateLowShow ? "white" : null } onClick={()=>getCarbohydrates("low")} />
                </Item>
                <Item>
                  <img src={proteinImg} alt="protein" style={{width: "4rem", height: "4rem", marginBottom: "1rem"}} />
                  <Title fs="1rem" fw="300" mt="1.5rem" ml="1rem">Protein</Title>
                  <Button fs="0.9rem" mt="1rem" ml="4.5rem" h="2rem" w="5rem" name="High" bc={proteinHighShow ? "#ED8141" : null } color={proteinHighShow ? "white" : null } onClick={()=>getProtein("high")} />
                  <Button fs="0.9rem" mt="1rem" ml="0.5rem" h="2rem" w="5rem" name="Average" bc={proteinAverageShow ? "#ED8141" : null } color={proteinAverageShow ? "white" : null} onClick={()=>getProtein("average")} />
                  <Button fs="0.9rem" mt="1rem" ml="0.5rem" h="2rem" w="5rem" name="Low" bc={proteinLowShow ? "#ED8141" : null} color={proteinLowShow ? "white" : null } onClick={()=>getProtein("low")} />
                </Item>
                <Item>
                  <img src={fatImg} alt="province" style={{width: "4rem", height: "4rem"}} />
                  <Title fs="1rem" fw="300" mt="2rem" ml="1rem">Fat</Title>
                  <Button fs="0.9rem" mt="1.5rem" ml="6.4rem" h="2rem" w="5rem" name="High" bc={fatHighShow ? "#ED8141" : null } color={fatHighShow ? "white" : null } onClick={()=>getFat("high")} />
                  <Button fs="0.9rem" mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" name="Average" bc={fatAverageShow ? "#ED8141" : null} color={fatAverageShow ? "white" : null } onClick={()=>getFat("average")} />
                  <Button fs="0.9rem" mt="1.5rem" ml="0.5rem" h="2rem" w="5rem" name="Low" bc={fatLowShow ? "#ED8141" : null } color={fatLowShow ? "white" : null } onClick={()=>getFat("low")} />
                </Item>
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

export default NutritionSurvey;