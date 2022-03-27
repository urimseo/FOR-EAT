import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getRecipeList } from "api/CategoryApi";
import Card3 from "components/commons/Card3";

// // test용
// import shrimp from "assets/img/IngredientItem/shrimp.PNG"
// import tomato from "assets/img/IngredientItem/tomato.jpg"



const Title = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin: 1rem 0;
`

const CardContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const VeganList = () => {
  // api 연결시
  const [resultList, setResultList] = useState([])

  const getVeganList = async () => {
    const response = await getRecipeList(1, "One");  // one대신 vegan 넣기
    setResultList(response)
  }

  useEffect (() => {
    getVeganList()
  }, [])

  // // test용
  // const resultList = [
  //   { recipe_seq: "", name: "shrimp", images: shrimp, calories: 400, average_rating: 4 },
  //   { recipe_seq: "", name: "tomato", images: tomato, calories: 500, average_rating: 4 },
  //   { recipe_seq: "", name: "tomato", images: tomato ,calories: 500, average_rating: 4 },
  // ]


    return (
      <div>
        <Title>Vegan Recipes</Title>
        <CardContainer>
          { resultList.map((result, idx) => {
            // 3개만 잘라서 보여주기
            if ( idx < 3 ) {
              return <Card3 key={idx} {...result} />
            }
          })}
          
        </CardContainer>
      </div>
    )
}

export default VeganList;