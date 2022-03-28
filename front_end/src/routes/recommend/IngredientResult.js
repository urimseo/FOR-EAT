import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import IngredientResultCard from "components/recommend/Ingredient/IngredientResultCard";
import IngredientResultCardRight from "components/recommend/Ingredient/IngredientResultCardRight";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";
import { getIngredientRecipeList} from "api/IngredientApi";
import MainImg from "assets/img/IngredientMain.jpg";
import CarouselHeader from "components/recommend/Ingredient/CarouselHeader";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`

const Header = styled.div`
  height: 24rem;
  background-image: url(${MainImg});
  background-size: cover;
  background-repeat: no-repeat;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;    
  font-style: italic;
  font-weight: 300;
  color: #ED8141;
`

const PageContainer = styled.div`
  margin: 4rem 0 7rem 0;
`


const IngredientResult = () => {
  const location = useLocation();
  const recipeList = location.state[0].data
  const recipeIngredient = location.state[1]
  const [list, setRecipeList] = useState([]);
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    setPage(page); 
    getRecipeList(page);
  }
  
  useEffect(() => {
    setRecipeList(recipeList);
  },[recipeList]);

  const getRecipeList = async(page) => {
    const recipeList = await getIngredientRecipeList(page, recipeIngredient);
    if (recipeList) {
      setRecipeList(recipeList.data)
    }
  }
  return (
    <>
    {/* <Header /> */}
    <CarouselHeader />
    <Container>
      <Title>Combination result</Title>
      {list.map((recipe, index) => ( 
        (index %2 === 0 ?         
          <IngredientResultCard 
            key={index}
            recipeSeq={recipe.recipe_seq}
            recipeName={recipe.name}
            recipeCalorie={recipe.calories}
            recipeImage={recipe.images}
            recipeIngredients={recipe.ingredients}
          /> : 
          <IngredientResultCardRight
            key={index}
            recipeSeq={recipe.recipe_seq}
            recipeName={recipe.name}
            recipeCalorie={recipe.calories}
            recipeImage={recipe.images}
            recipeIngredients={recipe.ingredients}
          />
        )
      ))}
      {recipeList.length !== 0 ?      
        <PageContainer>
          <Pagination 
            activePage={page} 
            itemsCountPerPage={8} 
            totalItemsCount={location.state[0].count} 
            pageRangeDisplayed={5} 
            prevPageText={"‹"} 
            nextPageText={"›"} 
            onChange={handlePageChange}
          />
        </PageContainer> : null
      }
    </Container>
    </>
  )
}

export default IngredientResult;