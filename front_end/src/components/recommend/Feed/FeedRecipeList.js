import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "components/commons/Title";
import { getRecommendRecipeList } from "api/RecommendApi";
import Card from "components/commons/Card";


const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
  min-width: 10vh;
  margin: 1rem 0 6rem 0;
`

const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  border: none;
  font-family: ${(props) => (props.ff ? props.ff : "work sans")};
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`

const BorderLine = styled.div`
  width: 6rem;
  border-bottom: 1px solid black;
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
`


const FeedRecipeList = () => { 
  const [forYouRecipe, setForYouRecipe] = useState();
  const [youLikeRecipe, setYouLikeRecipe] = useState();
  const [recipeList, setRecipeList] = useState([]);
  const [memberType, setMemberType] = useState();

  const getRecipeList = async (type, page) => {
    if (type === "foryou") {
      setForYouRecipe(true);
      setYouLikeRecipe(false);
      const response = await getRecommendRecipeList(type, page);
      setRecipeList(response.data);
      setMemberType(response.member_type)
    } else {
      setForYouRecipe(false);
      setYouLikeRecipe(true);
      const response = await getRecommendRecipeList(type, page);
      setRecipeList(response.data);
      setMemberType(response.member_type)
    }
  }

  useEffect(() => {   
    getRecipeList("foryou", 0);
  }, [])

  
return (
    <>
      <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
        <div>
          <CategoryButton fs="1.3rem" fw="300" mr="1rem" onClick={()=>getRecipeList("foryou", 1)}>FOR:YOU</CategoryButton>
          {forYouRecipe ? <BorderLine /> : null}
        </div>
        <div>
          <CategoryButton fs="1.3rem" fw="300" ml="1rem" onClick={()=>getRecipeList("likeyou", 1)}>YOU:LIKE</CategoryButton>
          {youLikeRecipe ? <BorderLine ml="1.1rem" /> : null}
        </div>
      </div>
      { memberType === 0 ?           
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans">Write a survey and reviews to get more accurate recipe recommendations.</Title> : null 
      }
      { memberType === 1 ?
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans">Write a survey to get more accurate recipe recommendations.</Title> : null
      } 
      { memberType === 2 ?
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans">Write reviews to get more accurate recipe recommendations.</Title> : null
      }
      <CardContainer>
        {recipeList.map((Recipe, index) => ( 
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
    </>
  )
}

export default FeedRecipeList;