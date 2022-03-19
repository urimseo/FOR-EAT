import {React, useState} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";


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
  const [europeShow, setEuropeShow] = useState(true);
  const [asiaShow, setAsiaShow] = useState(false);
  const [americaShow, setAmericaShow] = useState(false);
  const [africaShow, setAfricaShow] = useState(false);
  const [Oceaniahow, setOceaniaShow] = useState(false);

  const getEuropeRecipe = async() => {
    setEuropeShow(true);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(false);
    const result = await getRecipeList(1, "Europe");
    if (result) {
      console.log(result)
    }
  }
  const getAsiaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(true);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(false);
    const result = await getRecipeList(1, "Asia");
    if (result) {
      console.log(result)
    }
  }
  const getAmericaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(true);
    setAfricaShow(false);
    setOceaniaShow(false);
    const result = await getRecipeList(1, "America");
    if (result) {
      console.log(result)
    }
  }
  const getAfricaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(true);
    setOceaniaShow(false);
    const result = await getRecipeList(1, "Africa");
    if (result) {
      console.log(result)
    }
  }
  const getOceaniaRecipe = async() => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(true);
    const result = await getRecipeList(1, "Oceania");
    if (result) {
      console.log(result)
    }
  }
  return (
    <>
      {europeShow ? <RegionButton onClick={getEuropeRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>EUROPE</RegionButton> : <RegionButton onClick={getEuropeRecipe}>EUROPE</RegionButton>}
      {asiaShow ? <RegionButton onClick={getAsiaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>ASIA</RegionButton> : <RegionButton onClick={getAsiaRecipe}>ASIA</RegionButton>}
      {americaShow ? <RegionButton onClick={getAmericaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AMERICA</RegionButton> : <RegionButton onClick={getAmericaRecipe}>AMERICA</RegionButton>}
      {africaShow ? <RegionButton onClick={getAfricaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AFRICA</RegionButton> : <RegionButton onClick={getAfricaRecipe}>AFRICA</RegionButton>}
      {Oceaniahow ? <RegionButton onClick={getOceaniaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>OCEANIA</RegionButton> : <RegionButton onClick={getOceaniaRecipe}>OCEANIA</RegionButton>}
    </>
  );
};

export default Region;