import React from "react";
import styled from "styled-components";
// import img from "assets/img/Ingredient_rosemary.jpg";
import img from "assets/img/Landing_1.jpg";

const Container = styled.div`
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 64px;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const Review = styled.div`
    display: flex;
    flex-direction: row;
`

const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  height: 18rem;
  width: 18rem;
  margin-left: 2rem;
`

const Text = styled.div`
  background-color: #F2F2F2;
  padding: 3rem;
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

const ReviewRecipeList = () => {
  return (
    <>
      <Container>
        <Title>All Reviews</Title>
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
