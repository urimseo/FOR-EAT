import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "@mui/material/Rating";

import { deleteReview } from "api/ReviewApi";
import iconDelete from "assets/img/icon_delete.png";
import { getRecipeDetail } from "api/RecipeDetailApi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60rem;
  margin: 1rem;
`;

const CardContainer = styled.div`
  background-color: #f2f2f2;
  padding: 2rem;
  display: flex;
  width: 53%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`;

const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0 0.5rem 0.1rem;
`;

const Date = styled.div`
  font-size: 0.8rem;
  color: #999999;
  margin: 0.1rem 0.5rem 0 0;
`;

const Contents = styled.div`
  margin: 0.5rem 0.3rem 0 0;
  padding: 0 0.8rem 0 0.2rem;
  font-size: 1rem;
  text-align: justify;
  word-wrap: break-word;
  color: #4a4a4a;
  width: 29rem;
  height: 5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7e7e7e;
    border-radius: 10px;
  }
`;

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  &:hover {
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  width: 20%;
  overflow: hidden;
  background-position: center;
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

  const onClickDelete = async () => {
    await deleteReview(reviewId);
    window.location.reload();
  };
  useEffect(() => {
    getRecipeDetail(recipe_seq).then((res) => {
      setRecipeImg(res.images);
      setRecipeName(res.name);
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
                <Date>{lastModifiedDate.slice(0, 10)}</Date>
                <Icon src={iconDelete} onClick={onClickDelete} />
              </FlexContainer>
            </SpaceBetweenContainer>
            <FlexContainer style={{ justifyContent: "space-between" }}>
              <Rating name="read-only" value={ratings} readOnly size="small" />
            </FlexContainer>
            <Contents>{content}</Contents>
          </TextContainer>
        </FlexContainer>
      </CardContainer>
      <ImgWrapper>
        <Link to={`/recipes/${recipe_seq}`} style={{}}>
          <Img src={recipeImg} alt="이미지를 찾을 수 없습니다." />
        </Link>
      </ImgWrapper>
    </Container>
  );
};

export default ReviewCard;