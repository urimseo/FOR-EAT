import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReviewCard from "components/recipeDetail/ReviewCard"
import ReviewForm from "components/recipeDetail/ReviewForm"
import { getReviewList } from "api/RecipeDetailApi";

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
  const [reviews, setReviews] = useState([]); 
  useEffect(() => {
    getReviewList(recipeId).then((res) => {
      setReviews(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
      <Container>
        <TextContainer>
          <div className="text">Reviews</div>
        </TextContainer>
        <ReviewForm recipeId={recipeId} />
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
          { reviews.map((review) => ( 
            <ReviewCard
              key={review.id}
              reviewId={review.id}
              recipeId={review.recipe_seq}
              memberName={review.member_nickname}
              profileImgUrl={review.profile_image_url}
              imgUrl={review.image_url}
              content={review.content}
              ratings={review.ratings}
              lastModifiedDate={review.last_modified_date}
            />
          ))}
        </div>
        
      </Container>
  );
};

export default ReviewList;
