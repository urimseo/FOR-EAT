import React from "react";
import styled from "styled-components";
import reading_glasses from "assets/img/reading_glasses.png";

const SearchBox = styled.div`
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translate(-50%,-50%);
  height: 30px;
  background-color: #fff;
  border: 1px solid #51e3d4;
  border-radius: 30px;
  transition: 0.4s;
  width:30px;

  &:hover{
  box-shadow: 0px 0px .5px 1px #51e3d4;
  width: 282px;

  input{
  width: 240px;
  padding: 0 6px;
  }
}
`;

const SearchTxt = styled.input`
  display: flex;
  padding: 0;
  width: 0px;
  border:none;
  background: none;
  outline: none;
  float: left;
  font-size: 1rem;
  line-height: 30px;
  transition: .4s;
`;

const SearchBtn = styled.a`
  text-decoration: none;
  margin-left: auto;
  float: right;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #51e3d4;
`;

const Reading = styled.div`
  background: url(${reading_glasses}) no-repeat;
  width:30px;
  height:30px;
  cursor: pointer;
`;

const Search = () => {  
    return (
    <SearchBox>
        <SearchTxt />
        <SearchBtn>
            <Reading />
        </SearchBtn>
    </SearchBox>
    );
  };
  
  export default Search;