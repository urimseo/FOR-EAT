import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typography from "components/commons/Typography";
import Profile from "components/commons/Profile";
import reading_glasses from 'assets/img/reading_glasses.png'
import { useEffect, useState } from "react";

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
  align-items:center;
  position: relative;
  padding: 0 30vw 0 30vw;
`

const SearchContainer = styled.div`
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
const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
        <div></div>
        <Typography ff="Philosopher" fs="3rem" cursor="pointer" onClick={() => navigate("/recommend")} >FOR:EAT</Typography>
        <SearchContainer>
          <Input placeholder=" search in result" />
          <SearchImgWrapper>
            <ReadingGlassesImg src={reading_glasses} alt="reading_glasses" />
          </SearchImgWrapper>
          <Profile />
        </SearchContainer>
      </div>
      <Typography ff="Playfair Display" fs="0.8rem" fw="500" pb="1rem">ONLY FOR YOU</Typography>
      <TabContainer>
        <Typography fs="1rem" fw="600" cursor="pointer" hoverColor="#ED8141" onClick={() => { navigate("/recommend")}}>FEED</Typography>
        <Typography fs="1rem" fw="600" cursor="pointer" hoverColor="#ED8141" onClick={() => { navigate("/ingredients")}}>INGREDIENTS</Typography>
        <Typography fs="1rem" fw="600" cursor="pointer" hoverColor="#ED8141" onClick={() => { navigate("/category")}}>CATEGORIES</Typography>
      </TabContainer>
    </Container>
  );
};

export default SearchBar;
