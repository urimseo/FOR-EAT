import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getBrowseList } from "api/BrosweApi";
import BrowseCard from "components/browse/BrowseCard";



const Title = styled.div`
  font-size: 2rem;
  font-weight: 00;
  margin: 2rem 0 0.3rem 0.7rem;
`

const CardContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const BrowseListItem = ({keyword, title}) => {
  // api 연결시
  const [resultList, setResultList] = useState([])

  const getBrowseListItem = async () => {
    const response = await getBrowseList(1, keyword);  // one대신 vegan 넣기
    setResultList(response)
  }

  useEffect (() => {
    getBrowseListItem()
  }, [])


    return (
      <div>
        <Title>{title}</Title>
        <CardContainer>
          { resultList.map((result, idx) => {
            // 5개만 잘라서 보여주기
            if ( idx < 5 ) {
              return (
              <BrowseCard key={idx} {...result} 
                card_width="15rem"
                image_width="10rem"
              />
              )
            }
          })}
          
        </CardContainer>
      </div>
    )
}

export default BrowseListItem;