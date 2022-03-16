import React from "react";
import Search from "components/commons/Search";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typography from "components/commons/Typography";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: white;
`;

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      
      <Typography 
            ff="Philosopher" fs="2.2rem" p="absolute" ml="auto" mr="auto"
            l="0" r="0" lh="100px" w="10%" zi="99"
            cursor="pointer"
            onClick={() => {
              navigate("/");
            }}
          >FOR:EAT</Typography>
      <Search />
    </Container>
  );
};

export default SearchBar;
