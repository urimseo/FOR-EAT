import {React, useState, forwardRef, useImperativeHandle} from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";
import "assets/css/Pagination.css";
import Pagination from "react-js-pagination";
import { CircularProgress } from "@mui/material";


const Container = styled.div`
  margin: 1rem 0;
`

const ServingsButton = styled.button`
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

const Servings = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getServingsRecipe(){
      getOneRecipe();
    }
  }))

  const [oneRecipeShow, setOneRecipeShow] = useState(true);
  const [twoRecipeShow, setTwoRecipeShow] = useState(false);
  const [fourRecipeShow, setFourRecipeShow] = useState(false);
  const [partyRecipeShow, setPartyRecipeShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    window.scrollTo(0, 0)
    setPage(page); 
    if (oneRecipeShow === true) {
      getOneRecipe(page);
    }
    if (twoRecipeShow === true) {
      getTwoRecipe(page);
    }
    if (fourRecipeShow === true) {
      getFourRecipe(page);
    }
    if (partyRecipeShow === true) {
      getPartyRecipe(page);
    }
  };

  const getOneRecipe = async(page) => {
    setIsLoading(true);
    setOneRecipeShow(true);
    setTwoRecipeShow(false);
    setFourRecipeShow(false);
    setPartyRecipeShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "One");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  const getTwoRecipe = async(page) => {
    setIsLoading(true);
    setOneRecipeShow(false);
    setTwoRecipeShow(true);
    setFourRecipeShow(false);
    setPartyRecipeShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Two");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  const getFourRecipe = async (page) => {
    setIsLoading(true);
    setOneRecipeShow(false);
    setTwoRecipeShow(false);
    setFourRecipeShow(true);
    setPartyRecipeShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Four");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }
  
  const getPartyRecipe = async(page) => {
    setIsLoading(true);
    setOneRecipeShow(false);
    setTwoRecipeShow(false);
    setFourRecipeShow(false);
    setPartyRecipeShow(true);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Party");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  return (
    <Container>
      <div>
        {oneRecipeShow ? <ServingsButton onClick={()=>getOneRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>ONE</ServingsButton> : <ServingsButton onClick={getOneRecipe}>ONE</ServingsButton>}
        {twoRecipeShow ? <ServingsButton onClick={()=>getTwoRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>TWO</ServingsButton> : <ServingsButton onClick={getTwoRecipe}>TWO</ServingsButton>}
        {fourRecipeShow ? <ServingsButton onClick={()=>getFourRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>FOUR</ServingsButton> : <ServingsButton onClick={getFourRecipe}>FOUR</ServingsButton>}
        {partyRecipeShow ? <ServingsButton onClick={()=>getPartyRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>PARTY</ServingsButton> : <ServingsButton onClick={getPartyRecipe}>PARTY</ServingsButton>}
      </div> 
      {isLoading ? <div style={{display: "flex", justifyContent: "center", marginTop: "2rem"}}><CircularProgress /></div> :
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
      }
      {isLoading ? null :       
      (RecipeList.length !== 0 ?      
        <PageContainer>
          <Pagination 
            activePage={page} 
            itemsCountPerPage={24} 
            totalItemsCount={totalCount} 
            pageRangeDisplayed={5} 
            prevPageText={"‹"} 
            nextPageText={"›"} 
            onChange={handlePageChange}
          />
        </PageContainer> : null
      )}
    </Container>
  );
});

export default Servings;