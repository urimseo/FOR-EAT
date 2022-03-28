import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ReviewCard from "components/recipeDetail/ReviewCard"
import ReviewForm from "components/recipeDetail/ReviewForm"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 32px;
`

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
`



const ReviewList = ({ReviewList, UserInfo}) => {
  const [reviews, setReviews] = useState([]); 
  console.log(ReviewList)

  return (
      <Container>
        <Top>
          <Title>All Reviews</Title>
          <See href={'/' + UserInfo + '/mypage/reviews'}>See all →</See>
        </Top>
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