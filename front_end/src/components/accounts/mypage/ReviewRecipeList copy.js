import React from "react";
import styled from "styled-components";
// import img from "assets/img/Ingredient_rosemary.jpg";
import img from "assets/img/Landing_1.jpg";

const Container = styled.div`
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
  font-size: 64px;
`

const See = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
  text-decoration: none;
`

const Review = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
`

const Image = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14rem;
  width: 14rem;
  margin-left: 1rem;
`

const Text = styled.div`
  background-color: #F2F2F2;
  padding: 3rem;
  padding-left: 5rem;
  margin-top: 3rem;
`

const Sub = styled.div`
  font-weight: bold;
  font-size: 25px;
`

const Date = styled.div`
  margin-top: 0.3rem;
  font-size: 17px;
  color: #999999;

`

const Rate = styled.div`
margin-top: 0.3rem;
  font-size: 22px;

`

const Contents = styled.div`
margin-top: 1rem;
  font-size: 18px;

`

const ReviewRecipeList = ({ReviewList}) => {
  console.log(ReviewList)
  return (
    <>
      <Container>
        <Top>
          <Title>All Reviews</Title>
          <See href="/mypage">See all →</See>
        </Top>
        <Review>
          <Image src={img} alt="이미지를 찾을 수 없습니다." />
          <Text>
            <Sub>
                PASTA WITH SAUSAGE, TOMATOES, AND CREAM
            </Sub>
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
          </Text>
        </Review>
      </Container>
    </>
  );
};

export default ReviewRecipeList;
