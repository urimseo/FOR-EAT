import React from "react";
import styled from "styled-components";
import FeedCarousel from "components/recommend/Feed/FeedCarousel";
import Title from "components/commons/Title";
import FeedRecipeList from "components/recommend/Feed/FeedRecipeList";


const Container = styled.div`
  margin: 0 10vw;
  min-height: 100vh;
`


const Feed = () => {
  return (
    <>
      <FeedCarousel /> 
      <Container>
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Title mt="3rem">Recommend</Title>
          <FeedRecipeList />
        </div>
      </Container>
    </>
  );
};

export default Feed;
