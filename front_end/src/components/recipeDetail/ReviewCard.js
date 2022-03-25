import React from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import img from "assets/img/Ingredient_cucumber.jpg";
import profileImg from "assets/img/Landing_1.jpg";

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
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ImgWrapper = styled.div`
  width: 50%;
  overflow: hidden; 
  background-position: center;
`

const ProfileImgWrapper = styled.div`
  width: 20rem;
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
`

const Name = styled.div`
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

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`



const ReviewCard = ({ key, reviewId, memberName, imgUrl, content, ratings, lastModifiedDate }) => {
  return (
      <Container>
        <CardContainer>
          <FlexContainer>
            <ProfileImgWrapper>
              <ProfileImg src={imgUrl} alt="" />
            </ProfileImgWrapper>
            <TextContainer>
              <Name>
                {memberName}
              </Name>
              <Date>
                {(lastModifiedDate).slice(0, 10)}
              </Date>
              <Rating name="read-only" value={ratings} readOnly size="small" />
              <Contents>
                {content}
              </Contents>
            </TextContainer>
          </FlexContainer>
        </CardContainer>
        <ImgWrapper>
          <Img src={img} alt="이미지를 찾을 수 없습니다." />
        </ImgWrapper>
      </Container>
  );
};

export default ReviewCard;
