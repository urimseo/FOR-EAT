import React from "react";
import styled from "styled-components";
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

const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  margin-top: 50px;
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
  const onGitlab = () => {
    document.location.href = "https://lab.ssafy.com/s06-bigdata-rec-sub2/S06P22A103"
  }

  const onNotion = () => {
    document.location.href = "https://bittersweet-talos-845.notion.site/FOR-EAT-e294d1ecbda54887aa3d1930119d6e95"
  }
  return (
    <Container>
      <LeftContainer>
        <img src={logo} />
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

          <Links>
            <img src={gitlab} style={{width : "10%" , height:"30%", cursor:"pointer"}} onClick={onGitlab} />
            <img src={notion} style={{width : "10%" , height:"30%", cursor:"pointer", marginLeft:"30px"}} onClick={onNotion} />
          </Links>
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
