import React, { useState } from "react";
import styled from "styled-components";
import Card4 from "components/commons/Card4";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1.4rem;
  margin: 1rem 2rem 0 0;
  border-radius: 0.5rem;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  .title { 
    font-size: 1.5rem;
    font-weight: 500;
    padding: 0;
    margin: 0 0 1rem 0;
  }
`

const CardContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const RelatedRecipeList = () => {
  // api 연결시
  const [resultList, setResultList] = useState([])

  const recipe_seq = 2259
  const name="Vanilla Cream Pie"
  const calories = 389
  const images = "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/18/74/0/hDs8RxdQMK13opyS1XZD_untitled-1942.jpg"
  const average_rating = 4
  const liked_count = 100
  const keywords = []

  return (
    <Container>
      <TextContainer>
        <div className="title">Women in her 10's</div>
      </TextContainer>
      <CardContainer>
          {/* { resultList.map((result, idx) => {
            // 5개만 잘라서 보여주기
            if ( idx < 5 ) {
              return (
              <Card4 key={idx} {...result} 
              />
              )
            }
          })} */}
          <Card4 
            recipe_seq={recipe_seq} name={name}
            calories={calories} images={images}
            average_rating={average_rating} liked_count={liked_count}
            keywords={keywords}
          />
          <Card4 
            recipe_seq={recipe_seq} name={name}
            calories={calories} images={images}
            average_rating={average_rating} liked_count={liked_count}
            keywords={keywords}
          />
          <Card4 
            recipe_seq={recipe_seq} name={name}
            calories={calories} images={images}
            average_rating={average_rating} liked_count={liked_count}
            keywords={keywords}
          />
          <Card4 
            recipe_seq={recipe_seq} name={name}
            calories={calories} images={images}
            average_rating={average_rating} liked_count={liked_count}
            keywords={keywords}
          />
        </CardContainer>
    </Container>
  )
}

export default RelatedRecipeList;