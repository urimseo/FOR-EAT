import React from "react";
import styled from "styled-components";
import img from "assets/img/Landing_1.jpg";
import img1 from "assets/img/Ingredient_cucumber.jpg";


const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  height: 13rem;
  margin: 0 8rem 1rem 8rem;
`
const ImgWrapper = styled.div`
  width: 100%;
  overflow: hidden; 
  background-position: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const TextContainer = styled.div`
  background-color: #F2F2F2;
  padding: 2.5rem;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  font-weight: 300;
`

const Date = styled.div`
  margin-top: 0.3rem;
  font-size: 1rem;
  color: #999999;

`

const Rate = styled.div`
  margin-top: 0.3rem;
  font-size: 1.3rem;
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

const ReviewCard = () => {
  return (
    <>
      <Container>
        <ImgWrapper>
          <Img src={img} alt="이미지를 찾을 수 없습니다." />
        </ImgWrapper>
        <TextContainer>
          <Title>
            PASTA WITH SAUSAGE, TOMATOES, AND CREAM
          </Title>
          <Date>
            2022.03.09
          </Date>
          <Rate>
            ★★★★★
          </Rate>
          <Contents>
            FOR:EAT recommends thousands of international recipes based on your preferences.
            Collects your choices by a survey and gives you the recipes that you are looking for.
          </Contents>
        </TextContainer>
      </Container>

    </>
  );
};

export default ReviewCard;
