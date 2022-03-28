import { React, useState, forwardRef, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import SubIngredient from "components/recommend/category/SubIngredient";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";

const IngredientButton = styled.button`
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
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
`

const PageContainer = styled.div`
  margin: 2rem 0 5rem 0;
`


const Ingredient = forwardRef((props, ref) => {
  const childSubIngredient = useRef();

  useImperativeHandle(ref, () => ({
    getIngredientRecipe(){
      childSubIngredient.current.getSubIngredientRecipe();
    }
  }))

  const [meatShow, setMeatShow] = useState(true);
  const [seafoodShow, setSeafoodShow] = useState(false);
  const [vegetableShow, setVegetableShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    setPage(page); 
    if (seafoodShow === true) {
      getSeafoodRecipe(page);
    }
    if (vegetableShow === true) {
      getVegetableRecipe(page);
    }
  };

  const getMeatRecipe = async() => {
    setMeatShow(true);
    setSeafoodShow(false);
    setVegetableShow(false);
    const Recipe = await getRecipeList(1, "Beef");
    if (Recipe) {
      childSubIngredient.current.getSubIngredientRecipe();
    }
  }

  const getSeafoodRecipe = async(page) => {
    setSeafoodShow(true);
    setMeatShow(false);
    setVegetableShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Seafood");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getVegetableRecipe = async(page) => {
    setVegetableShow(true);
    setSeafoodShow(false);
    setMeatShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Vegetable");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }
  
  return (
    <>
      <div>
        {meatShow ? <IngredientButton onClick={getMeatRecipe} style={{backgroundColor: "#ED8141", color: "white"}}>MEAT</IngredientButton> : <IngredientButton onClick={getMeatRecipe}>MEAT</IngredientButton>}
        {seafoodShow ? <IngredientButton onClick={()=>getSeafoodRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>SEAFOOD</IngredientButton> : <IngredientButton onClick={getSeafoodRecipe}>SEAFOOD</IngredientButton>}
        {vegetableShow ? <IngredientButton onClick={()=>getVegetableRecipe(1)} style={{backgroundColor: "#ED8141", color: "white"}}>VEGETABLE</IngredientButton> : <IngredientButton onClick={getVegetableRecipe}>VEGETABLE</IngredientButton>} 
        {meatShow ? <SubIngredient ref={childSubIngredient}/> : null}
      </div>
      { meatShow ? null : 
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
            />
          ))}
        </CardContainer>
      }
      { meatShow === false && RecipeList.length !== 0 ?  
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
    </>
  );
});

export default Ingredient;