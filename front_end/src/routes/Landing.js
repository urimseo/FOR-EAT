import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Landing_1 from "assets/img/Landing_1.jpg";
import Landing_2 from "assets/img/Landing_2.jpg";

const Container = styled.div`
  display: inline-flex;
`
const BackgroundImgContainer = styled.div`
  display: inline-flex;
  width: 50%
`;

const Title = styled.p`
  font-family : Philosopher;
  font-size: 2.2rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  letter-spacing: -1%;
`;

const Img = styled.img`
  width: 100%;
  display: flex;
`;

const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width:50%;
  .text__wrapper {
    padding: 26rem 4rem 4rem 4rem; 
  }
  .point { 
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 300;
  }
  .title {
    font-family: Playfair Display;
    font-size: 3.8rem;
    margin: 2rem 0 1.5rem 0;
  }
  .title__2 {
    font-family: Playfair Display;
    font-size: 3.8rem;
    margin: 1rem 0 1rem 0;
  }
  .hr__left {
    border: 0;
    width: 3rem;
    height: 0.1rem;
    background: black;
    text-align: right;
  }
  .Hr_right {
    border: 0;
    width: 3rem;
    height: 0.1rem;
    background: black;
    margin: 0 0 0 95.5%;
  }
  .content {
    font-size: 1rem;
    font-weight: 200;
    margin: 2rem 0;
  }
  .content__wrapper {
    padding-left: 12rem;
  }
`
const Discover = styled.a`
  display: inline-block;
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 2rem 0;
  .rignt {
    padding-left 20rem;
  }
`
const Landing = () => {
  return (
    <>
      <div>
        <Container>
          <Title>FOR:EAT</Title>
          <BackgroundImgContainer>
            <Img src={Landing_1}/>
          </BackgroundImgContainer>
          <TextContainer>
            <div className="text__wrapper">
              <div className="point">Recommends  Thousands of  Recipes</div>
              <div className="hr__left"/>
              <div className="title">Personalized</div>
              <div className="content">
                FOR:EAT recommends thousands of international recipes based on your preferences.
                <br />
                Collects your choices by a survey and gives you the recipes that you are looking for.
              </div>
              <div className="content">
                The more specific answers, the more exact result you will get.
              </div>
              <div className="content">
                FOR:EAT recommends thousands of international recipes based on your preferences.
                <br />
                Collects your choices by a survey and gives you the recipes that you are looking for.
              </div>
              <Discover href="">DISCOVER</Discover>
            </div>
          </TextContainer>
        </Container>
        <Container>
          <Title>FOR:EAT</Title>
          <TextContainer>
            <div className="text__wrapper">
              <div className="point" style={{textAlign: "right"}}>Tags</div>
              {/* <Hr_left /> */}
              <div className="Hr_right" />
              <div className="title__2" style={{paddingLeft: "3rem"}}>Dessert</div>
              <div className="title__2" style={{paddingLeft: "6rem"}}>Christmas</div>
              <div className="title__2" style={{paddingLeft: "9rem"}}>Vegetarian</div>
              <div className="content__wrapper">
                <div className="content">
                  Find the best recipes for your special occasions.
                  <br />
                  FOR:EAT provides several purified tags that helps you easily find great recipes.
                </div>
                <div className="content">
                  Enjoy your meal:)
                </div>
                <div style={{alignItems: "end"}}>
                  <Discover href="" style={{marginLeft: "73%"}}>DISCOVER</Discover>
                </div>
              </div>
            </div>
          </TextContainer>
          <BackgroundImgContainer>
            <Img src={Landing_2}/>
          </BackgroundImgContainer>
        </Container>

      </div>
      <Outlet />
    </>
  );
};

export default Landing;
