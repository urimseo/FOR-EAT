import React from "react";
import styled from "styled-components";

import ReviewCard from "components/accounts/mypage/ReviewCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  font-family: Playfair Display;
`;

const Title = styled.div`
  display: flex;
  font-family: Playfair Display;
  font-size: 32px;
`;

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
`;

const ReviewList = ({ ReviewList, UserInfo }) => {
  return (
    <Container>
      <Top>
        <Title>All Reviews</Title>
        <See href={"/" + UserInfo + "/mypage/reviews"}>See all →</See>
      </Top>
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
      </div>
    </Container>
  );
};

export default ReviewList;