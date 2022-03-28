import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

import { deleteReview } from "api/ReviewApi";
import iconDelete from "assets/img/icon_delete.png";
import { getRecipeDetail } from "api/RecipeDetailApi";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 15rem;
  margin: 1rem;
`;

const CardContainer = styled.div`
  background-color: #f2f2f2;
  padding: 2.5rem;
  display: flex;
  width: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ImgWrapper = styled.div`
  width: 30%;
  overflow: hidden;
  background-position: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.3rem;
  font-weight: 300;
  padding-left: 0.1rem;
`;

const Date = styled.div`
  margin-top: 0.3rem;
  font-size: 1rem;
  color: #999999;
  padding: 1rem 0 1rem 0.1rem;
`;

const Contents = styled.div`
  margin-top: 1rem;
  font-size: 18px;
  color: #4a4a4a;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const ReviewCard = ({
  reviewId,
  content,
  ratings,
  lastModifiedDate,
  recipe_seq,
}) => {
  const [recipeImg, setRecipeImg] = useState([]);
  const [recipeName, setRecipeName] = useState([]);
  const [flag, setFlag] = useState(0);

  const onClickDelete = async () => {
    await deleteReview(reviewId);
    setFlag(1);
  };
  useEffect(() => {
    getRecipeDetail(recipe_seq).then((res) => {
      setRecipeImg(res.images);
      setRecipeName(res.name);
      console.log("getRecipeDetail", res);
    });
  }, []);
  return (
    <Container>
      <CardContainer>
        <FlexContainer>
          <TextContainer>
            <SpaceBetweenContainer>
              <Name>{recipeName}</Name>
              <FlexContainer>
                <Icon src={iconDelete} onClick={onClickDelete} />
              </FlexContainer>
            </SpaceBetweenContainer>
            <Date>{lastModifiedDate.slice(0, 10)}</Date>
            <FlexContainer style={{ justifyContent: "space-between" }}>
              <Rating name="read-only" value={ratings} readOnly size="small" />
            </FlexContainer>
            <Contents>{content}</Contents>
          </TextContainer>
        </FlexContainer>
      </CardContainer>
        <ImgWrapper>
      <Link to={`/recipes/${recipe_seq}`} style={{ }}>
          <Img src={recipeImg} alt="이미지를 찾을 수 없습니다." />
      </Link>
        </ImgWrapper>
    </Container>
  );
};

export default ReviewCard;
