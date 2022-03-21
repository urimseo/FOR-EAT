import {React, useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";


const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const PageContainer = styled.div`
  margin: 1rem 0 5rem 0;
`

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

const Region = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getRegionRecipe(){
      getEuropeRecipe();
    }
  }))

  const [europeShow, setEuropeShow] = useState(true);
  const [asiaShow, setAsiaShow] = useState(false);
  const [americaShow, setAmericaShow] = useState(false);
  const [africaShow, setAfricaShow] = useState(false);
  const [Oceaniahow, setOceaniaShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    setPage(page); 
    if (europeShow === true) {
      getEuropeRecipe(page);
    }
    if (asiaShow === true) {
      getAsiaRecipe(page);
    }
    if (americaShow === true) {
      getAmericaRecipe(page);
    }
    if (africaShow === true) {
      getAfricaRecipe(page);
    }
    if (Oceaniahow === true) {
      getOceaniaRecipe(page);
    }
  };

  const getEuropeRecipe = async(page) => {
    setEuropeShow(true);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
    }
    const Recipe = await getRecipeList(page, "Europe");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getAsiaRecipe = async(page) => {
    setEuropeShow(false);
    setAsiaShow(true);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
    }
    const Recipe = await getRecipeList(page, "Asia");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getAmericaRecipe = async(page) => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(true);
    setAfricaShow(false);
    setOceaniaShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
    }
    const Recipe = await getRecipeList(page, "America");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getAfricaRecipe = async(page) => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(true);
    setOceaniaShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
    }
    const Recipe = await getRecipeList(page, "Africa");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getOceaniaRecipe = async(page) => {
    setEuropeShow(false);
    setAsiaShow(false);
    setAmericaShow(false);
    setAfricaShow(false);
    setOceaniaShow(true);
    if (isNaN(page) === true) {
      setPage(1); 
    }
    const Recipe = await getRecipeList(page, "Oceania");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  
  return (
    <>
      <div>
        {europeShow ? <RegionButton onClick={()=>{getEuropeRecipe(1)}} style={{backgroundColor: "#ED8141", color: "white"}}>EUROPE</RegionButton> : <RegionButton onClick={getEuropeRecipe}>EUROPE</RegionButton>}
        {asiaShow ? <RegionButton onClick={getAsiaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>ASIA</RegionButton> : <RegionButton onClick={getAsiaRecipe}>ASIA</RegionButton>}
        {americaShow ? <RegionButton onClick={getAmericaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AMERICA</RegionButton> : <RegionButton onClick={getAmericaRecipe}>AMERICA</RegionButton>}
        {africaShow ? <RegionButton onClick={getAfricaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>AFRICA</RegionButton> : <RegionButton onClick={getAfricaRecipe}>AFRICA</RegionButton>}
        {Oceaniahow ? <RegionButton onClick={getOceaniaRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>OCEANIA</RegionButton> : <RegionButton onClick={getOceaniaRecipe}>OCEANIA</RegionButton>}
      </div>  
      <CardContainer>
        {RecipeList.map((Recipe, index) => ( 
          <Card
            key={Recipe.recipe_seq}
            index={index}
            recipeImg={Recipe.images}
            recipeName={Recipe.name}
            // recipeCategory={recipe.summary}
            recipeCalorie={Recipe.calories}
          />
        ))}
      </CardContainer>
      <PageContainer>
        <Pagination 
          activePage={page} 
          itemsCountPerPage={10} 
          totalItemsCount={250} 
          pageRangeDisplayed={5} 
          prevPageText={"‹"} 
          nextPageText={"›"} 
          onChange={handlePageChange}
        />
      </PageContainer>
    </>
  );
});

export default Region;