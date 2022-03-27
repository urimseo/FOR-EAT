import React, { useEffect } from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';

import { deleteReview } from "api/ReviewApi";
import profileImg from "assets/img/Landing_1.jpg";
import iconDelete from "assets/img/icon_delete.png";

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 15rem;
  margin: 1rem;
`

const CardContainer = styled.div`
  background-color: #F2F2F2;
  padding: 2.5rem;
  display: flex;
  width: 70%;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ImgWrapper = styled.div`
  width: 30%;
  overflow: hidden; 
  background-position: center;
`

const ProfileImgWrapper = styled.div`
  width: 7rem;
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
  width: 30rem;
`

const Name = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.3rem;
  font-weight: 300;
  padding-left: 0.1rem;
`

const Date = styled.div`
  margin-top: 0.3rem;
  font-size: 1rem;
  color: #999999;
  padding: 1rem 0 1rem 0.1rem;
`

const Contents = styled.div`
  margin-top: 1rem;
  font-size: 18px;
  color: #4A4A4A;
  text-overflow:ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
const Icon = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  &:hover {
    cursor : pointer;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ReviewCard = ({ reviewId, memberName, imgUrl, profileImgUrl, content, ratings, lastModifiedDate }) => {

  const onClickDelete = async () => {
    await deleteReview(reviewId);
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
                  <Icon src={iconDelete} onClick={onClickDelete}/>
                </FlexContainer>
              </SpaceBetweenContainer>
              <Date>
                {(lastModifiedDate).slice(0, 10)}
              </Date>
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
          <Img src={imgUrl} alt="이미지를 찾을 수 없습니다." />
        </ImgWrapper>
      </Container>
  );
};

export default ReviewCard;
