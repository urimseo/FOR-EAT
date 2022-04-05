import React from "react";
import styled from "styled-components";
import Card4 from "components/commons/Card4";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.4rem;
  margin: 1rem 2rem 0 0;
  border-radius: 0.5rem;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  .title { 
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0 0 1rem 0;
  }
`

const CardContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const RelatedRecipeList = ({popular_recipe, user}) => {

  return (
    <Container>
      <TextContainer>
        <div className="title">
          { user ?  user.gender ? "Women in their ": "Men in their " : ""} 
          { user ? 
            user.age === 1 ? " 10's" :
            user.age === 2 ? " 20's" :
            user.age === 3 ? " 30~40's" :
            user.age === 4 ? " 50~64's" :
            user.age === 5 ? " 65~74's" : " 75's" : "Popular Recipes"
          }
        </div>
      </TextContainer>
      <CardContainer>
          { popular_recipe ? popular_recipe.map((result, idx) => {
            // 5개만 잘라서 보여주기
            if ( idx < 5 ) {
              return (
              <Card4 key={idx} {...result} 
              />
              )
            }
          }): null}
        </CardContainer>
    </Container>
  )
}

export default RelatedRecipeList;