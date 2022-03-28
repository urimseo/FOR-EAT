import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styled from "styled-components";

import { getSearchList } from "api/SearchApi";
import Profile from "components/commons/Profile"
import reading_glasses from "assets/img/reading_glasses.png";

const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`
const Input = styled.input`
  display: inline-flex;
  width: 17rem;
  height: 1.5rem;
  font-size: 0.7rem;
  margin: 0;
  border-radius: 10rem;
  border: 1px solid grey;
  padding-left: 1rem;
`

const SearchImgWrapper = styled.a`
  display: flex;
  cursor: pointer;
  margin-left: 0.5rem;
`

const ReadingGlassesImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`

const SearchInput = () => {

  const [ word, setWord ] = useState(null);  // api
  const navigate = useNavigate();

  // 검색어 input
  const onChange = (e) => {
    setWord(e.target.value)
  };


  const onClickSearch = async (e) => {
    e.preventDefault()
    const response = await getSearchList(1, word)
    if (response) {
      // 검색 결과 페이지로 이동. 데이터랑 같이 보내줌.
      navigate('/recipes/search', { state: [word, response] })
      setWord("")
    }
  }

  return (
    <SearchContainer>
      <Input 
        placeholder=" search in result"
        value={word || ''}
        type="text"
        onChange={onChange}
        onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
      />
      <SearchImgWrapper>
        <ReadingGlassesImg 
          src={reading_glasses} 
          alt="reading_glasses"
          type="submit"
          onClick={onClickSearch}
        />
      </SearchImgWrapper>
      <Profile />
    </SearchContainer>
    );
  };
  
  export default SearchInput;