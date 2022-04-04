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

const TimeButton = styled.button`
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


const Time = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getTimeRecipe(){
      get30minRecipe();
    }
  }))

  const [time30minShow, set30minShow] = useState(true);
  const [time60minShow, set60minShow] = useState(false);
  const [time120minShow, set120minShow] = useState(false);
  const [time180minShow, set180minShow] = useState(false);
  const [time24hoursShow, set24hoursShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [RecipeList, setRecipeList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    window.scrollTo(0, 0)
    setPage(page); 
    if (time30minShow === true) {
      get30minRecipe(page);
    }
    if (time60minShow === true) {
      get60minRecipe(page);
    }
    if (time120minShow === true) {
      get120minRecipe(page);
    }
    if (time180minShow === true) {
      get180minRecipe(page);
    }
    if (time24hoursShow === true) {
      get24hoursRecipe(page);
    }
  };

  const get30minRecipe = async(page) => {
    setIsLoading(true);
    set30minShow(true);
    set60minShow(false);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "30min");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  const get60minRecipe = async(page) => {
    setIsLoading(true);
    set30minShow(false);
    set60minShow(true);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "60min");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  const get120minRecipe = async(page) => {
    setIsLoading(true);
    set30minShow(false);
    set60minShow(false);
    set120minShow(true);
    set180minShow(false);
    set24hoursShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "120min");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  const get180minRecipe = async(page) => {
    setIsLoading(true);
    set30minShow(false);
    set60minShow(false);
    set120minShow(false);
    set180minShow(true);
    set24hoursShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "180min");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }

  const get24hoursRecipe = async(page) => {
    setIsLoading(true);
    set30minShow(false);
    set60minShow(false);
    set120minShow(false);
    set180minShow(false);
    set24hoursShow(true);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "24hours");
    if (Recipe) {
      setRecipeList(Recipe.data);
      setIsLoading(false);
      setTotalCount(Recipe.total_count);
    }
  }
  
  return (
    <Container>
      <div>
        {time30minShow ? <TimeButton onClick={()=>get30minRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>30MIN</TimeButton> : <TimeButton onClick={get30minRecipe}>30MIN</TimeButton>}
        {time60minShow ? <TimeButton onClick={()=>get60minRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>1HOURS</TimeButton> : <TimeButton onClick={get60minRecipe}>1HOURS</TimeButton>}
        {time120minShow ? <TimeButton onClick={()=>get120minRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>2HOURS</TimeButton> : <TimeButton onClick={get120minRecipe}>2HOURS</TimeButton>}
        {time180minShow ? <TimeButton onClick={()=>get180minRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>3HOURS</TimeButton> : <TimeButton onClick={get180minRecipe}>3HOURS</TimeButton>}
        {time24hoursShow ? <TimeButton onClick={()=>get24hoursRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>24HOURS</TimeButton> : <TimeButton onClick={get24hoursRecipe}>24HOURS</TimeButton>}
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

export default Time;