import React from "react";
// import Search from "components/commons/Search";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typography from "components/commons/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  padding: 1rem 0;
`;

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items:center
  position: relative;
  padding: 0 30vw 0 30vw;
`

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography ff="Philosopher" fs="3rem">FOR:EAT</Typography>
      <Typography ff="Playfair Display" fs="0.8rem" fw="500" pb="1rem">ONLY FOR YOU</Typography>
      <TabContainer>
        <Typography fs="1rem" fw="600" cursor="pointer" hoverColor="#ED8141" onClick={() => { navigate("/recommend")}}>FEED</Typography>
        <Typography fs="1rem" fw="600" cursor="pointer" hoverColor="#ED8141" onClick={() => { navigate("/ingredients")}}>INGREDIENTS</Typography>
        <Typography fs="1rem" fw="600" cursor="pointer" hoverColor="#ED8141" onClick={() => { navigate("/categories")}}>CATEGORIES</Typography>
      </TabContainer>
    </Container>
  );
};

export default SearchBar;
