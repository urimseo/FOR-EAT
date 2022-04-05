import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "components/commons/Title";
import { getRecommendRecipeList } from "api/RecommendApi";
import Card from "components/commons/Card";
import { CircularProgress } from "@mui/material";
import { setApiHeaders } from "api/Axios";

const Container = styled.div`
  margin-bottom: 10rem;
`

const CircularProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 21.5rem 21.5rem 21.5rem;
  justify-content: center;
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
  const [isLoading, setIsLoading] = useState(true);
  const [isSpinner, setIsSpinner] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [memberType, setMemberType] = useState();
  const [number, setNumber] = useState(2);

  const getRecipeList = async(type, page) => {
    setIsLoading(true);
    setApiHeaders();
    if (type === "foryou") {
      if (page === 1) {
        setNumber(2);
        setRecipeList([]);
      }
      setForYouRecipe(true);
      setYouLikeRecipe(false);
      const response = await getRecommendRecipeList(type, page);
      setRecipeList(recipeList => [...recipeList, response.data])
      setMemberType(response.member_type)
      setIsLoading(false);
      setIsSpinner(false);
    } else {
      setIsLoading(true);
      if (page === 1) {
        setNumber(2);
        setRecipeList([]);
      }
      if (page !== 0) {
        setForYouRecipe(false);
        setYouLikeRecipe(true);
        const response = await getRecommendRecipeList(type, page);
        setRecipeList(recipeList => [...recipeList, response.data]);
        setMemberType(response.member_type);
        setIsLoading(false);
        setIsSpinner(false);
      }
    }
  }

  useEffect(() => {   
    getRecipeList("foryou", 1);
  }, [])

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if(scrollTop + clientHeight >= scrollHeight) {
      setNumber( number + 1 );
      if (forYouRecipe === true && number <= 4 ) {
        setIsSpinner(true);
        getRecipeList("foryou", number);
      }
      else if (youLikeRecipe === true && number <= 4) {
        setIsSpinner(true);
        getRecipeList("likeyou", number);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
      return () => {window.removeEventListener('scroll', handleScroll)}
  })

  
return (
    <>
    <Container>
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
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans" style={{display: "flex", justifyContent: "center"}}>Write a survey and reviews to get more accurate recipe recommendations.</Title> : null 
      }
      { memberType === 1 ?
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans" style={{display: "flex", justifyContent: "center"}}>Write a survey to get more accurate recipe recommendations.</Title> : null
      } 
      { memberType === 2 ?
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans" style={{display: "flex", justifyContent: "center"}}>Write reviews to get more accurate recipe recommendations.</Title> : null
      }
      { forYouRecipe && memberType === 3 ?
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans" style={{display: "flex", justifyContent: "center"}}>We recommend recipes that you may like.</Title> : null
      }
      { youLikeRecipe && memberType === 3 ?
        <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans" style={{display: "flex", justifyContent: "center"}}>We recommend recipes that members with similar preference like.</Title> : null
      }
      <CircularProgressContainer>
        {recipeList.length === 0 && isLoading ? <CircularProgress style={{display: "flex", justifyContent: "center"}}/> : null}
      </CircularProgressContainer>
      <CardContainer>
        {recipeList.map((recipe, idx) => 
          ( recipe.map((recipeItem, index) => ( 
            <Card
              key={recipeItem.recipe_seq}
              recipeSeq={recipeItem.recipe_seq}
              index={index}
              recipeImg={recipeItem.images}
              recipeName={recipeItem.name}
              recipeKeywords={(recipeItem.keywords.length > 1 ? [recipeItem.keywords[0].keyword_name, recipeItem.keywords[1].keyword_name] : recipeItem.keywords[0].keyword_name)}
              recipeCalorie={recipeItem.calories}
              recipeRating={recipeItem.average_rating}
              likedCount={recipeItem.liked_count}
            />
          ))) 
        )}
      </CardContainer>
      <CircularProgressContainer>
        {recipeList.length >= 1 && isSpinner ? <CircularProgress style={{display: "flex", justifyContent: "center"}}/> : null}
      </CircularProgressContainer>
      </Container>
    </>
  )
}

export default FeedRecipeList;