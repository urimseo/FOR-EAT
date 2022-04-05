import React from "react";
import styled from "styled-components";

import ReviewForm from "components/recipeDetail/ReviewForm"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextContainer = styled.div`
  margin: 5rem 0 2rem 0;
  display: flex;
  justify-content: center;
  .text {
    display: block;
    text-align: left;
    font-size: 2.5rem;
    font-weight: 300;
  }
`

const ReviewList = ({ recipeId }) => {

  return (
      <Container>
        <TextContainer>
          <div className="text">Reviews</div>
        </TextContainer>
        <ReviewForm recipeId={recipeId}  />
      </Container>
  );
};

export default ReviewList;