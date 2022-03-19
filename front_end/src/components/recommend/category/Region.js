import {React, useState} from "react";
import styled from "styled-components";


const RegionButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 0 1rem 0 0;
  padding-inline: 1rem;
  border: none;
  border-radius: 10rem;
  height: 2rem;
`

const Region = () => {
  const [europeanShow, setEuropeanShow] = useState(false);
  const [asianShow, setAsianShow] = useState(false);
  const [americanShow, setAmericanShow] = useState(false);
  const [africanShow, setAfricanShow] = useState(false);
  const [austrailainShow, setAustrailainShow] = useState(false);

  const getEuropeanRecipe = () => {
    setEuropeanShow(true);
    setAsianShow(false);
    setAmericanShow(false);
    setAfricanShow(false);
    setAustrailainShow(false);
  }
  const getAsainRecipe = () => {
    setEuropeanShow(false);
    setAsianShow(true);
    setAmericanShow(false);
    setAfricanShow(false);
    setAustrailainShow(false);
  }
  const getAmericanRecipe = () => {
    setEuropeanShow(false);
    setAsianShow(false);
    setAmericanShow(true);
    setAfricanShow(false);
    setAustrailainShow(false);
  }
  const getAfricanRecipe = () => {
    setEuropeanShow(false);
    setAsianShow(false);
    setAmericanShow(false);
    setAfricanShow(true);
    setAustrailainShow(false);
  }
  const getAustrailainRecipe = () => {
    setEuropeanShow(false);
    setAsianShow(false);
    setAmericanShow(false);
    setAfricanShow(false);
    setAustrailainShow(true);
  }
  return (
    <>
      {europeanShow ? <RegionButton onClick={getEuropeanRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>EUROPEAN</RegionButton> : <RegionButton onClick={getEuropeanRecipe}>EUROPEAN</RegionButton>}
      {asianShow ? <RegionButton onClick={getAsainRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>ASIAN</RegionButton> : <RegionButton onClick={getAsainRecipe}>ASIAN</RegionButton>}
      {americanShow ? <RegionButton onClick={getAmericanRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AMERICAN</RegionButton> : <RegionButton onClick={getAmericanRecipe}>AMERICAN</RegionButton>}
      {africanShow ? <RegionButton onClick={getAfricanRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AFRICAN</RegionButton> : <RegionButton onClick={getAfricanRecipe}>AFRICAN</RegionButton>}
      {austrailainShow ? <RegionButton onClick={getAustrailainRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AUSTRAILIAN</RegionButton> : <RegionButton onClick={getAustrailainRecipe}>AUSTRAILIAN</RegionButton>}
    </>
  );
};

export default Region;