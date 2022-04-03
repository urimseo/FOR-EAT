import { React, useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { getRecipeList } from "api/CategoryApi";
import Card from "components/commons/Card";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";

const Container = styled.div`
  margin: 1rem 0;
`

const SubIngredientButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 0.5rem 0 0 0;
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



const SubIngredient = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getSubIngredientRecipe(){
      getBeefRecipe();
    }
  }))

  const [beafShow, setBeafShow] = useState(true);
  const [porkShow, setporkShow] = useState(false);
  const [lambShow, setLambShow] = useState(false);
  const [poultryShow, setPoultryShow] = useState(false);
  const [chickenShow, setChickenShow] = useState(false);
  const [RecipeList, setRecipeList] = useState([]);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    setPage(page); 
    if (beafShow === true) {
      getBeefRecipe(page);
    }
    if (porkShow === true) {
      getPorkRecipe(page);
    }
    if (lambShow === true) {
      getLambRecipe(page);
    }
    if (poultryShow === true) {
      getPoultryRecipe(page);
    }
    if (chickenShow === true) {
      getChickenRecipe(page);
    }
  };

  const getBeefRecipe = async(page) => {
    setBeafShow(true);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Beef");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getPorkRecipe = async(page) => {
    setBeafShow(false);
    setporkShow(true);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Pork");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getLambRecipe = async(page) => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(true);
    setPoultryShow(false);
    setChickenShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Lamb");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getPoultryRecipe = async(page) => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(true);
    setChickenShow(false);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Poultry");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  const getChickenRecipe = async(page) => {
    setBeafShow(false);
    setporkShow(false);
    setLambShow(false);
    setPoultryShow(false);
    setChickenShow(true);
    if (isNaN(page) === true) {
      setPage(1); 
      page = 1;
    }
    const Recipe = await getRecipeList(page, "Chicken");
    if (Recipe) {
      setRecipeList(Recipe)
    }
  }

  return (
    <Container>
      <div>
        {beafShow ? <SubIngredientButton onClick={()=>getBeefRecipe(1)} style={{color: "#ED8141"}}>BEEF</SubIngredientButton> : <SubIngredientButton onClick={getBeefRecipe}>BEEF</SubIngredientButton>}
        {porkShow ? <SubIngredientButton onClick={()=>getPorkRecipe(1)} style={{color: "#ED8141"}}>PORK</SubIngredientButton> : <SubIngredientButton onClick={getPorkRecipe}>PORK</SubIngredientButton>}
        {lambShow? <SubIngredientButton onClick={()=>getLambRecipe(1)} style={{color: "#ED8141"}}>LAMB</SubIngredientButton> : <SubIngredientButton onClick={getLambRecipe}>LAMB</SubIngredientButton>}
        {poultryShow ? <SubIngredientButton onClick={()=>getPoultryRecipe(1)} style={{color: "#ED8141"}}>POULTRY</SubIngredientButton> : <SubIngredientButton onClick={getPoultryRecipe}>POULTRY</SubIngredientButton>}
        {chickenShow ? <SubIngredientButton onClick={()=>getChickenRecipe(1)} style={{color: "#ED8141"}}>CHICKEN</SubIngredientButton> : <SubIngredientButton onClick={getChickenRecipe}>CHICKEN</SubIngredientButton>}
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


export default SubIngredient;