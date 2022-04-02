import React from "react";
import styled from "styled-components";

import ReviewCard from "components/accounts/mypage/ReviewCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-family: Playfair Display;
`;

const Title = styled.div`
  display: flex;
  font-family: Playfair Display;
  font-size: 32px;
  font-weight: 600;
`;

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
  color: #ed8141;
  font-family : Work Sans;
`;

const Sub = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 20px;
  font-weight: bold;
`

const ReviewList = ({ ReviewList, UserInfo }) => {
  return (
    <Container>
      <Top>
        <Title>My Reviews</Title>
        {ReviewList.length !== 0 ?
        <See href={"/" + UserInfo + "/mypage/reviews"}>See all →</See>
        :null}
      </Top>
      
      {ReviewList.length !== 0 ?
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {ReviewList.map((review) => (
          <ReviewCard
            key={review.id}
            reviewId={review.id}
            content={review.content}
            ratings={review.ratings}
            lastModifiedDate={review.last_modified_date}
            recipe_seq={review.recipe_seq}
          />
        ))}
      </div> : <Sub>Please register your review.</Sub>
      }
    </Container>
  );
};

export default ReviewList;