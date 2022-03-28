import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedCarousel from "components/recommend/Feed/FeedCarousel"

const Container = styled.div`
  margin: 0 10vw;
  min-height: 100vh;
`

const CardContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: ${(props) => (props.ff ? props.ff : "Playfair Display")};
  font-size: ${(props) => (props.fs ? props.fs : "3rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "300")};
  margin-top: ${(props) => (props.mt ? props.mt : "")};
  margin-left: ${(props) => (props.ml ? props.ml : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "")};
  margin-right: ${(props) => (props.mr ? props.mr : "")};
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
  const [likeYouRecipe, setLikeYouRecipe] = useState(false);

  const getForYouRecipe = () => {
    setForYouRecipe(true);
    setLikeYouRecipe(false);
  }

  const getLikeYouRecipe = () => {
    setForYouRecipe(false);
    setLikeYouRecipe(true);
  }

  useEffect(() => {   
    setForYouRecipe(true);
  }, [])

  return (
    <>
      <FeedCarousel /> 
      <Container>
        <Title mt="3rem">Recommend</Title>
        <div style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
          <div>
            <CategoryButton fs="1.3rem" fw="300" mr="1rem" onClick={getForYouRecipe}>FOR:YOU</CategoryButton>
            {forYouRecipe ? <BorderLine /> : null}
          </div>
          <div>
            <CategoryButton fs="1.3rem" fw="300" ml="1rem" onClick={getLikeYouRecipe}>LIKE:YOU</CategoryButton>
            {likeYouRecipe ? <BorderLine ml="1.1rem" /> : null}
          </div>
        </div>
        <CardContainer>
        </CardContainer>
      </Container>
    </>
  );
};

export default Feed;
