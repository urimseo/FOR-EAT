import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Title from "components/commons/Title";
import Login from "components/accounts/login/Login"

import Landing_1 from "assets/img/Landing_1.jpg";
import Landing_2 from "assets/img/Landing_2.jpg";
import Landing_3 from "assets/img/Landing_3.jpg";
import Ingredient_broccoli from "assets/img/Ingredient_broccoli.jpg";
import Ingredient_cucumber from "assets/img/Ingredient_cucumber.jpg";
import Ingredient_egg from "assets/img/Ingredient_egg.jpg";
import Ingredient_rosemary from "assets/img/Ingredient_rosemary.jpg";
import Ingredient_spaghetti from "assets/img/Ingredient_spaghetti.jpg";
import Ingredient_kiwi from "assets/img/Ingredient_kiwi.jpg";
import Ingredient_asparagus from "assets/img/Ingredient_asparagus.jpg";
import Ingredient_shrimp from "assets/img/Ingredient_shrimp.jpg";

AOS.init();

const Container = styled.div`
  display: flex;
`
const BackgroundImgContainer = styled.div`
  display: inline-flex;
  width: 50%;
`

const SpaceBetweenContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.mb ? props.mb : "3rem")};
`

const Img = styled.img`
  width: 100%;
  display: flex;
`

const TextContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: ${(props) => (props.w ? props.w : "50%")};
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
  .content__2{
    font-size: 1rem;
    font-weight: 200;
    margin: 1rem 0;
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
  .right {
    padding-left: 20rem;
  }
`

const ImgArchWrapper = styled.div`
  width: 19rem;
  height: 19rem;
  overflow: hidden;
  margin: 1rem 1rem;
`
const ImgArch = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50% 50% 0 0;
`
const Landing = () => {
  return (
    <>
      <div>
        <Container>
        <Title 
            ff="Philosopher" p="absolute" mr="auto" ml="auto" mt="2rem"
            left="0" right="0"
          >FOR:EAT</Title>
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
              <Login></Login>
            </div>
          </TextContainer>
        </Container>
        <Container>
          <Title 
            ff="Philosopher" p="absolute" mr="auto" ml="auto" mt="2rem"
            left="0" right="0"
          >FOR:EAT</Title>
          <TextContainer>
            <div className="text__wrapper">
              <div className="point" style={{textAlign: "right"}}>Tags</div>
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
              <div
                data-aos="fade-up-left"
                data-aos-delay="300"
              >
                <Img src={Landing_2}/>
              </div>
            </BackgroundImgContainer>
        </Container>
        <Container style={{padding: "3rem 10rem", flexDirection:"column"}}>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <Title 
              dp="inlinex" mt="2rem" mb="3rem"
              fs="4rem" ta="left" 
            >WHAT'S IN MY FRIDGE?</Title>
          </AnimationOnScroll>
          <SpaceBetweenContainer>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_broccoli}/>
            </ImgArchWrapper>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_cucumber}/>
            </ImgArchWrapper>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_egg}/>
            </ImgArchWrapper>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_rosemary}/>
            </ImgArchWrapper>
          </SpaceBetweenContainer>
          <SpaceBetweenContainer mb="5rem">
            <ImgArchWrapper>
              <ImgArch src={Ingredient_asparagus}/>
            </ImgArchWrapper>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_spaghetti}/>
            </ImgArchWrapper>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_kiwi}/>
            </ImgArchWrapper>
            <ImgArchWrapper>
              <ImgArch src={Ingredient_shrimp}/>
            </ImgArchWrapper>
          </SpaceBetweenContainer>
        </Container>  
        <Container>
          <Title 
              ff="Philosopher" p="absolute" mr="auto" ml="auto" mt="2rem"
              left="0" right="0"
          >FOR:EAT</Title>
          <BackgroundImgContainer style={{width:"39%", height:"100%", overflow:"hidden"}}>
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
              <Img src={Landing_3}/>
            </div>
          </BackgroundImgContainer>
          <TextContainer w="61%">
            <div className="text__wrapper">
              <div className="point">Recommends  Thousands of  Recipes</div>
              <div className="hr__left"/>
              <div className="title">Personalized</div>
              <TextContainer style={{display: "flex", flexDirection: "row", width:"100%"}}>
                <TextContainer style={{display: "flex", paddingRight:"3rem"}}>
                  <div className="content__2">
                    FOR:EAT recommends thousands of international recipes based on your preferences.
                    <br />
                    Collects your choices by a survey and gives you the recipes that you are looking for.
                  </div>
                  <div className="content__2">
                    The more specific answers, the more exact result you will get.
                  </div>
                  <div className="content__2">
                    FOR:EAT recommends thousands of international recipes based on your preferences.
                    <br />
                    Collects your choices by a survey and gives you the recipes that you are looking for.
                  </div>
                  <Discover href="">DISCOVER</Discover>
                </TextContainer>
                <TextContainer style={{display: "flex", paddingRight:"3rem"}}>
                  <div className="content__2">
                    FOR:EAT recommends thousands of international recipes based on your preferences.
                    <br />
                    Collects your choices by a survey and gives you the recipes that you are looking for.
                  </div>
                  <div className="content__2">
                    The more specific answers, the more exact result you will get.
                  </div>
                </TextContainer>
              </TextContainer>
            </div>
          </TextContainer>
        </Container>
      </div>
      <Outlet />
    </>
  );
};

export default Landing;
