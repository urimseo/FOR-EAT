import React from "react";
import Title from "components/commons/Title";
import styled from "styled-components";
import reading_glasses from "assets/img/reading_glasses.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: translate(100vw - 120px);
  height: 100px;
  left:120px;
  border: 1px solid black;
  background-color: white;
`;

const Search = styled.div`
  background: url(${reading_glasses});
  width:30px;
  height:auto;
`;

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title 
          ff="Philosopher" p="absolute" left="50%" top="50%"
          cursor="pointer"
          onClick={() => {
            navigate("/");
          }}
        >FOR:EAT</Title>
      <Search></Search>
    </Container>
  );
};

export default SearchBar;
