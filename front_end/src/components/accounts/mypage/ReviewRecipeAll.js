import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userInfoState } from 'atoms/atoms';
import { useRecoilValue } from 'recoil';

import Card3 from "components/commons/Card3";
import Tile from "assets/img/Tile.jpg";
import "assets/css/Pagination.css";
import Pagination from "react-js-pagination";
import { getReview } from "api/MyPageApi";

const Container = styled.div`
`

const Header = styled.div`
  height: 24rem;
  background-image: url(${Tile});
`

const HeaderContent = styled.div`
  position: absolute;
  top: 19rem;
  left:50%;
  transform: translate(-50%, -50%);                                                                   
  font-size: 3rem;
  font-style: italic;
  color: white;
  z-index: 2;
  text-align: center;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 16rem;
`

const Result = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 300;
  .result {
    padding: 1rem;
  }
  .count {
    color: #ED8141;
    padding: 1rem;
  }
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const PageContainer = styled.div`
  margin: 2rem 0 5rem 0;
`

const ReviewRecipeAll = () => {
  const UserInfo = useRecoilValue(userInfoState);
  const [ count, setCount ] = useState(0)
  const [ resultList, setResultList ] = useState([])

  const [ page, setPage ] = useState(1);

  const handlePageChange = async(page) => {
    setPage(page);
    getReview(page, UserInfo)
  }

  useEffect(() => {
    getReview(page, UserInfo).then((res) => {
      console.log(res)
      setCount(res.review_count)
      setResultList(res.review_list)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <Container>
      <Header />
      <HeaderContent>"All Reviews"</HeaderContent>
      <BodyContainer>
        <Result>
          <div className="result">Search Result</div>
          <div className="count">{count}</div>
        </Result>
        <CardContainer>
          { resultList.map((result) => ( 
            <Card3
              key={result.recipe_seq}
              {...result} 
            />
          ))}

          

        </CardContainer>
        { resultList.length !== 0 ?
          <PageContainer>
            <Pagination 
              activePage={page} 
              itemsCountPerPage={10} 
              totalItemsCount={resultList.length} 
              pageRangeDisplayed={5} 
              prevPageText={"‹"} 
              nextPageText={"›"} 
              onChange={handlePageChange}
            />
          </PageContainer> : null  // rendering 되기 전 pagination만 보이는 것 방지
        }
      </BodyContainer>
    </Container>
  )
}

export default ReviewRecipeAll;