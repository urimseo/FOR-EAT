import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReviewCard from "components/recipeDetail/ReviewCard"
import ReviewForm from "components/recipeDetail/ReviewForm"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.div`
  display: flex;
  font-family: Playfair Display;
  font-size: 64px;
`



const ReviewList = ({ReviewList}) => {
  const [reviews, setReviews] = useState([]); 
  console.log(ReviewList)

  return (
      <Container>
        <Title>My Wish Recipes</Title>
        { ReviewList.map((review) => ( 
          <ReviewForm recipeId={review.recipe_seq} />
        ))}
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap" }}>
          { ReviewList.map((review) => ( 
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