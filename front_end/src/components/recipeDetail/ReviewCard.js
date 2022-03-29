import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';


import iconDelete from "assets/img/icon_delete.png";
import FOREAT_logo from "assets/img/FOREAT_logo.png";
import { deleteReview } from "api/ReviewApi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 60rem;
  margin: 1rem;
`

const CardContainer = styled.div`
  background-color: #F2F2F2;
  padding: 2rem;
  display: flex;
  width: 60%;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`


const ProfileImgWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  background-position: center;
`

const ProfileImg = styled.img`
  border-radius: 4rem;
  height: 5rem;
  width: 5rem;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
`

const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0 0.5rem 0.1rem;
`

const Date = styled.div`
  font-size: 0.8rem;
  color: #999999;
  margin: 0.1rem 0.5rem 0 0;
`

const Contents = styled.div`
  margin: 0.5rem 0.3rem 0 0;
  padding: 0 0.8rem 0 0.2rem;
  font-size: 1rem;
  text-align: justify;
  word-wrap: break-word;
  color: #4A4A4A;
  width: 29rem;
  height: 5rem;
  overflow-x: hidden;
  overflow-y:scroll;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7e7e7e;
    border-radius: 10px;
  }

`

const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  &:hover {
    cursor : pointer;
  }
`
const ImgWrapper = styled.div`
  width: 20%;
  overflow: hidden; 
  background-position: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ReviewCard = ({ recipeId, reviewId, memberName, imgUrl, profileImgUrl, content, ratings, lastModifiedDate }) => {
  
  const onClickDelete = async () => {
    await deleteReview(reviewId)
    window.location.reload();
  }


  return (
      <Container>
        <CardContainer>
          <FlexContainer>
            <ProfileImgWrapper>
              <ProfileImg src={profileImgUrl} alt="" />
            </ProfileImgWrapper>
            <TextContainer>
              <SpaceBetweenContainer>
                <Name>
                  {memberName}
                </Name>
                <FlexContainer >
                  <Date>
                    {(lastModifiedDate).slice(0, 10)}
                  </Date>
                  <Icon src={iconDelete} onClick={onClickDelete}/>
                </FlexContainer>
              </SpaceBetweenContainer>
              <FlexContainer style={{justifyContent: "space-between"}}>
                <Rating name="read-only" value={ratings} readOnly size="small" />
              </FlexContainer>
              <Contents>
                {content}
              </Contents>
            </TextContainer>
          </FlexContainer>
        </CardContainer>
        <ImgWrapper>
          <Img src={imgUrl ? imgUrl : FOREAT_logo } alt="이미지를 찾을 수 없습니다." />
        </ImgWrapper>
      </Container>
  );
};

export default ReviewCard;
