import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getSearchList } from "api/SearchApi";


const KeywordContainer = styled.div`
  padding: 1rem 0;
`

const Keyword = styled.div`
  display: inline-flex;
  margin: 0 0.6rem 0.6rem 0;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  border: 1px solid #ED8141;
  border-radius: 5rem;
  font-weight: 500;
  cursor: pointer;
`


const KeywordList = ({ keywords }) => {

  const navigate = useNavigate();

  return (
    <KeywordContainer>
      { keywords ? keywords.map((keyword) => (
          <Keyword 
          // 클릭시 검색 페이지로 이동 (SearchInput.js 참고하기)
          // function으로 뺐더니 e.target.value 못 잡아서 안에 넣음
            onClick={
              async (e) => {
                const response = await getSearchList(1, keyword.keyword_name)
                console.log(response)
                if (response) {
                  navigate('/recipes/search', { state: [keyword.keyword_name, response] })
                }
              }
          }
          >#{keyword.keyword_name}</Keyword>
        )) : null }
    </KeywordContainer>
  )
}

export default KeywordList;