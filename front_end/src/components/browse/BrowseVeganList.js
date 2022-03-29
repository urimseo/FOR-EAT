import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getBrowseList } from "api/BrosweApi";
import Card3 from "components/commons/Card3";



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
    const response = await getBrowseList(1, "Vegan");  // one대신 vegan 넣기
    setResultList(response)
  }

  useEffect (() => {
    getVeganList()
  }, [])



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