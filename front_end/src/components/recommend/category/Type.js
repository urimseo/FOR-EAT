import {React, useState} from "react";
import styled from "styled-components";

const TypeButton = styled.button`
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

const Type = () => {
  const [breadShow, setBreadShow] = useState(false);
  const [riceShow, setRiceShow] = useState(false);
  const [pastaShow, setPastaShow] = useState(false);
  const [dessertShow, setDessertShow] = useState(false);

  const getBreadRecipe = () => {
    setBreadShow(true);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(false);
  }
  const getRiceRecipe = () => {
    setBreadShow(false);
    setRiceShow(true);
    setPastaShow(false);
    setDessertShow(false);
  }
  const getPastaRecipe = () => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(true);
    setDessertShow(false);
  }
  const getDessertRecipe = () => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(true);
  }
  return (
    <>
      {breadShow ? <TypeButton onClick={getBreadRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>BREAD</TypeButton> : <TypeButton onClick={getBreadRecipe}>BREAD</TypeButton>}
      {riceShow ? <TypeButton onClick={getRiceRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>RICE</TypeButton> : <TypeButton onClick={getRiceRecipe}>RICE</TypeButton>}
      {pastaShow ? <TypeButton onClick={getPastaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>PASTA</TypeButton> : <TypeButton onClick={getPastaRecipe}>PASTA</TypeButton>}
      {dessertShow ? <TypeButton onClick={getDessertRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>DESSERT</TypeButton> : <TypeButton onClick={getDessertRecipe}>DESSERT</TypeButton>}
    </>
  );
};

export default Type;