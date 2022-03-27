import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "components/commons/Card";
import Pagination from "react-js-pagination";
import "assets/css/Pagination.css";

const Container = styled.div`
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  font-family: Playfair Display;
`

const Title = styled.div`
  display: flex;
  font-family: Playfair Display;
  font-size: 64px;
`

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
  min-width: 10vh;
`

const Sub = styled.div`
  font-size: 20;
`

const PageContainer = styled.div`
  margin: 2rem 0 5rem 0;
`

const WishRecipeList = ({RecipeList}) => {
  const [page, setPage] = useState(1); 

  const handlePageChange = (page) => { 
    setPage(page); 
  };

  console.log(RecipeList)

  return (
    <>
      <Container>
        <Top>
          <Title>My Wish Recipes</Title>
          <See href="/mypage">See all →</See>
        </Top>
        
        <CardContainer>
        {RecipeList.map((recipe, index) => (
          <Card
            key={recipe.recipe_seq}
            recipeSeq={recipe.recipe_seq}
            index={index}
            recipeImg={recipe.images}
            recipeName={recipe.name}
            recipeKeywords={(recipe.keywords.length > 1 ? [recipe.keywords[0].keyword_name, recipe.keywords[1].keyword_name] : recipe.keywords[0].keyword_name)}
            recipeCalorie={recipe.calories}
          />
        ))}
      </CardContainer>
      {RecipeList.length !== 0 ?      
        <PageContainer>
          <Pagination 
            activePage={page} 
            itemsCountPerPage={3}
            totalItemsCount={RecipeList.length} 
            pageRangeDisplayed={5} 
            prevPageText={"‹"} 
            nextPageText={"›"} 
            onChange={handlePageChange}
          />
        </PageContainer> : <Sub>레시피를 등록해주세요</Sub>
      }
      </Container>
    </>
  );
};

export default WishRecipeList;