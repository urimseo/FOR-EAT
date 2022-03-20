import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Typography from "components/commons/Typography";
import logo from 'assets/img/logo.png'
import notion from 'assets/img/Notion.png'
import gitlab from 'assets/img/Gitlab.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 280px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  width: 20%;
  padding: 60px 0;
`;

const Logo = styled.img`
  background: url(${logo}) no-repeat;
  width: 90px;
  height: 30px;
  `;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  width: 80%;
`;

const RightTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

const Phrases = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 25%;
  margin-top: 30px;
`;

const Team = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 65%;
  margin-top: 30px;
  margin-left: 50px;
`;

const TeamName = styled.div`
  color: white;
  width: 15%;
  margin-top: 30px;
`;

const PersonName = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 15%;
  margin-top: 30px;
`;

const Front = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
`;

const Back = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  margin-top: 30px;
`;

const Link = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  margin-top: 50px;
`;

const Gitlab = styled.div`
  background: url(${gitlab}) no-repeat;
  width: 10%;
  height: 30%;
  cursor: pointer;
`;

const Notion = styled.div`
  background: url(${notion}) no-repeat;
  width: 10%;
  height: 30%;
  margin-left: 30px;
  cursor: pointer;
`;

const Hr = styled.div`
  border-top:1px solid #fff;
  width: 90%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const RightBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 80px;
`;

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftContainer>
        <Logo />
        <Typography ff="Philosopher" fs="3rem">FOR:EAT</Typography>
        <Typography ff="Playfair Display" fs="0.8rem" fw="500" pb="1rem">personalized recipes</Typography>
      </LeftContainer>
      
      <RightContainer>
        <RightTopContainer>
          <Phrases>
            <Typography ff="Playfair Display" fs="1.8rem" fw="bold" c="white" hoverColor="white" mt="0.5rem">LOVE.</Typography>
            <Typography ff="Playfair Display" fs="1.8rem" fw="bold" c="white" hoverColor="white" mt="0.5rem">EAT.</Typography>
            <Typography ff="Playfair Display" fs="1.8rem" fw="bold" c="white" hoverColor="white" mt="0.5rem">PRAY.</Typography>
          </Phrases>

          <Team>
            <TeamName>
              <Typography fs="1rem" fw="100" c="white" hoverColor="white">TEAM A103</Typography>
            </TeamName>

            <PersonName>
              <Front>
                <Typography fs="1rem" fw="bold" c="white" hoverColor="white" >YUNHA</Typography>
                <Typography fs="1rem" fw="bold" c="white" hoverColor="white" ml="5rem">SEULGI</Typography>
                <Typography fs="1rem" fw="bold" c="white" hoverColor="white" ml="5rem">JUNBEOM</Typography>
              </Front>
              <Back>
                <Typography fs="1rem" fw="bold" c="white" hoverColor="white" >URIM</Typography>
                <Typography fs="1rem" fw="bold" c="white" hoverColor="white" ml="5rem">HYUNKYU</Typography>
                <Typography fs="1rem" fw="bold" c="white" hoverColor="white" ml="5rem">JAEGYUNG</Typography>
              </Back>
            </PersonName>
          </Team>

          <Link>
            <Gitlab />
            <Notion />
          </Link>
        </RightTopContainer>

        <Hr />

        <RightBottomContainer>
          <Typography ff="Playfair Display" fw="600" c="white" hoverColor="white" ml="5rem">+82 2 1234.5678 / +82 10 1234.5678</Typography>
          <Typography ff="Playfair Display" fw="400" c="white" hoverColor="white" ml="5rem">508, Eonju-ro, Gangnam-gu, Seoul, Republic of Korea, 06152</Typography>
          <Typography ff="Playfair Display" fw="600" c="white" hoverColor="white" ml="5rem">Copyright © FOR:EAT All Rights Reserved.</Typography>
        </RightBottomContainer>
      </RightContainer>
    </Container>
  );
};

export default Footer;
