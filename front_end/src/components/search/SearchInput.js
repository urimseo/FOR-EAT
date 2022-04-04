import {React, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
  width: 15rem;
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

const SearchInput = ({ onClick, url, isSelected }) => {
  const [ word, setWord ] = useState(null);  // api
  const navigate = useNavigate();

  // 검색어 input
  const onChange = (e) => {
    setWord(e.target.value)
  };


  const onClickSearch = async (e) => {
    const response = await getSearchList(1, word)
    if (response) {
      // 검색 결과 페이지로 이동. 데이터랑 같이 보내줌.
      navigate('/recipes/search', { state: [word, response] })
      setWord("")
    }
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  }
  return (
    <SearchContainer onSubmit={false}>
      <Input 
        placeholder=" search in result"
        value={word || ''}
        type="text"
        onChange={onChange}
        // onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} // enter 입력 방지
        onKeyPress={onKeyPress}
      />
      <input type="text" style={{ display: "none"}} />
      <SearchImgWrapper>
        <ReadingGlassesImg 
          src={reading_glasses} 
          alt="reading_glasses"
          type="submit"
          onClick={onClickSearch}
        />
      </SearchImgWrapper>
      <Profile
      url = {url}
      onClick={onClick}
      isSelected={isSelected} />
    </SearchContainer>
    );
  };
  
  export default SearchInput;