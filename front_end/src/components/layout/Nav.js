import React from "react";
import logo from "assets/img/logo.png";
import profile from "assets/img/profile.png";
import profile_hover from "assets/img/profile_hover.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 100vh;
  border: 1px solid black;
`;

const Item = styled.div`
  width: 6rem;
  margin-top: 5rem;
  cursor: default;
`;

const Logo = styled.img`
  cursor: pointer;
  width: 88px;
`;

const Menu = styled.button`
  background-color: white;
  color: black;
  border-radius: 36px;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  padding: 0 15px;
  width: 10rem;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  
  &:hover{
    background-color: black;
    color:white
  }
`;

const Profile = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: url(${profile}) no-repeat;
  margin-bottom: 4rem;

  &:hover{
    background: url(${profile_hover}) no-repeat;
  }
`;


const Nav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Item
        onClick={() => {
          navigate("/");
        }}
      >
        <Logo src={logo}></Logo>
      </Item>
      <Menu
      onClick={() => {
        navigate("/feed");
      }}
      >FEED</Menu>
      <Menu
      onClick={() => {
        navigate("/ingredients");
      }}
      >INGREDIENTS</Menu>
      <Menu
      onClick={() => {
        navigate("/category");
      }}
      >CATEGORIES</Menu>
      <Profile />
    </Container>
  );
};

export default Nav;
