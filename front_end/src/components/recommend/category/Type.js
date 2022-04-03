import {React, useState, forwardRef, useImperativeHandle} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";

const Container = styled.div`
  margin: 1rem 0;
`

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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 21.5rem 21.5rem 21.5rem 21.5rem;
  justify-content: center;
`

const PageContainer = styled.div`
  margin: 2rem 0 5rem 0;
`


const Type = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getTypeRecipe(){
      getBreadRecipe();
    }
  }))

  const [breadShow, setBreadShow] = useState(true);
  const [riceShow, setRiceShow] = useState(false);
  const [pastaShow, setPastaShow] = useState(false);
  const [dessertShow, setDessertShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    setPage(page); 
    if (breadShow === true) {
      getBreadRecipe(page);
    }
    if (riceShow === true) {
      getRiceRecipe(page);
    }
    if (pastaShow === true) {
      getPastaRecipe(page);
    }
    if (dessertShow === true) {
      getDessertRecipe(page);
    }
  };

  const getBreadRecipe = async(page) => {
    setBreadShow(true);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Bread");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getRiceRecipe = async(page) => {
    setBreadShow(false);
    setRiceShow(true);
    setPastaShow(false);
    setDessertShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Rice");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getPastaRecipe = async(page) => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(true);
    setDessertShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Pasta");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getDessertRecipe = async(page) => {
    setBreadShow(false);
    setRiceShow(false);
    setPastaShow(false);
    setDessertShow(true);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Dessert");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  return (
    <Container>
      <div>
        {breadShow ? <TypeButton onClick={()=>getBreadRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>BREAD</TypeButton> : <TypeButton onClick={getBreadRecipe}>BREAD</TypeButton>}
        {riceShow ? <TypeButton onClick={()=>getRiceRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>RICE</TypeButton> : <TypeButton onClick={getRiceRecipe}>RICE</TypeButton>}
        {pastaShow ? <TypeButton onClick={()=>getPastaRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>PASTA</TypeButton> : <TypeButton onClick={getPastaRecipe}>PASTA</TypeButton>}
        {dessertShow ? <TypeButton onClick={()=>getDessertRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>DESSERT</TypeButton> : <TypeButton onClick={getDessertRecipe}>DESSERT</TypeButton>}
      </div>  
      <CardContainer>
        {RecipeList.map((Recipe, index) => ( 
          <Card
            key={Recipe.recipe_seq}
            recipeSeq={Recipe.recipe_seq}
            index={index}
            recipeImg={Recipe.images}
            recipeName={Recipe.name}
            recipeKeywords={(Recipe.keywords.length > 1 ? [Recipe.keywords[0].keyword_name, Recipe.keywords[1].keyword_name] : Recipe.keywords[0].keyword_name)}
            recipeCalorie={Recipe.calories}
            recipeRating={Recipe.average_rating}
            likedCount={Recipe.liked_count}
          />
        ))}
      </CardContainer>
      {RecipeList.length !== 0 ?      
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
        </PageContainer> : null
      }

    </Container>
  );
});

export default Type;