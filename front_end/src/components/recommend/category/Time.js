import {React, useState} from "react";
import styled from "styled-components";

const TimeButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 1rem 1rem 0 0;
  padding-inline: 1rem;
  border: none;
  border-radius: 10rem;
  height: 2rem;
`

const Time = () => {
  const [time30minShow, set30minShow] = useState(false);
  const [time60minShow, set60minShow] = useState(false);
  const [time120minShow, set120minShow] = useState(false);
  const [time180minShow, set180minShow] = useState(false);
  const [time24hoursShow, set24hoursShow] = useState(false);
  const get30minRecipe = () => {
    set30minShow(true);
    set60minShow(false);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(false);
  }
  const get60minRecipe = () => {
    set30minShow(false);
    set60minShow(true);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(false);
  }
  const get120minRecipe = () => {
    set30minShow(false);
    set60minShow(false);
    set120minShow(true);
    set180minShow(false);
    set24hoursShow(false);
  }
  const get180minRecipe = () => {
    set30minShow(false);
    set60minShow(false);
    set120minShow(false);
    set180minShow(true);
    set24hoursShow(false);
  }
  const get24hoursRecipe = () => {
    set30minShow(false);
    set60minShow(false);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(true);
  }
  return (
    <>
      {time30minShow ? <TimeButton onClick={get30minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>30min</TimeButton> : <TimeButton onClick={get30minRecipe}>30min</TimeButton>}
      {time60minShow ? <TimeButton onClick={get60minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>60min</TimeButton> : <TimeButton onClick={get60minRecipe}>60min</TimeButton>}
      {time120minShow ? <TimeButton onClick={get120minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>120min</TimeButton> : <TimeButton onClick={get120minRecipe}>120min</TimeButton>}
      {time180minShow ? <TimeButton onClick={get180minRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>180min</TimeButton> : <TimeButton onClick={get180minRecipe}>180min</TimeButton>}
      {time24hoursShow ? <TimeButton onClick={get24hoursRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>24hours</TimeButton> : <TimeButton onClick={get24hoursRecipe}>24hours</TimeButton>}
    </>
  );
};

export default Time;