import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedCarousel from "components/recommend/Feed/FeedCarousel";
import Title from "components/commons/Title";
import { getRecommendRecipeList } from "api/RecommendApi";
import Card from "components/commons/Card";


const Container = styled.div`
  margin: 0 10vw;
  min-height: 100vh;
`

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
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

const Feed = () => {
  const [forYouRecipe, setForYouRecipe] = useState(true);
  const [youLikeRecipe, setYouLikeRecipe] = useState(false);
  const [recipeList, setRecipeList] = useState([]);

  const getRecipeList = async (type, page) => {
    if (type === "foryou") {
      setForYouRecipe(true);
      setYouLikeRecipe(false);
      const response = await getRecommendRecipeList(type, page);
      setRecipeList(response);
    } else {
      setForYouRecipe(false);
      setYouLikeRecipe(true);
      const response = await getRecommendRecipeList(type, page);
      setRecipeList(response);
    }
  }

  useEffect(() => {   
    setForYouRecipe(true);
  }, [])

  return (
    <>
    <FeedCarousel /> 
      <Container>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Title mt="3rem">Recommend</Title>
          <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
            <div>
              <CategoryButton fs="1.3rem" fw="300" mr="1rem" onClick={()=>getRecipeList("foryou")}>FOR:YOU</CategoryButton>
              {forYouRecipe ? <BorderLine /> : null}
            </div>
            <div>
              <CategoryButton fs="1.3rem" fw="300" ml="1rem" onClick={()=>getRecipeList("likeyou")}>YOU:LIKE</CategoryButton>
              {youLikeRecipe ? <BorderLine ml="1.1rem" /> : null}
            </div>
          </div>
          {/* { recipeList.member_type === 0 ?           
            <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans">Write a survey and reviews to get more accurate recipe recommendations.</Title> : null 
          }
          { recipeList.member_type === 1 ?
            <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans">Write a survey to get more accurate recipe recommendations.</Title> : null
          } 
          { recipeList.member_type === 2 ?
            <Title fs="1.1rem" mt="1rem" fw="300" ff="Noto sans">Write reviews to get more accurate recipe recommendations.</Title> : null
          }
          <CardContainer>
            { recipeList.data.map((recipe, index) => (
              <Card 
                key={index}
                {...recipe} 
              />
            ))}
          </CardContainer> */}
        </div>
      </Container>
    </>
  );
};

export default Feed;
