import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Landing_1 from "assets/img/Landing_1.jpg";

const Container = styled.div`
  display: flex
`
const BackgroundImgContainer = styled.div`
  display: inline-flex;
`;

const Title = styled.p`
  font-family : Philosopher;
  font-size: 2.2rem;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  left: 0.8rem;
  right: 0;
  text-align: center;
  letter-spacing: -1%;
`;

const Img = styled.img`
  width: 50vw;
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  .point { 
    height: 2rem;
    display: inline;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 17rem;
  }
  .hr__short {
    border: 0;
    width: 3rem;
    align: left;
    height: 0.1rem;
    background: black;
    margin: 0.2rem 0
  }
  .title {
    font-family: Playfair Display;
    font-size: 3.8rem;
    margin: 2rem 0 1.5rem 0;
  }
  .content {
    font-size: 1rem;
    font-weight: 200;
    margin: 0.8rem 0;
  }
`
const Discover = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 3rem 0;
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
            <div className="point">Recommends  Thousands of  Recipes</div>
            <div className="hr__short" />
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
          </TextContainer>
        </Container>
      </div>
      <Outlet />
    </>
  );
};

export default Landing;


// const BackgroundImgContainer = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const Img = styled.div`
//   width: 100%;
//   height: 100%;
//   display: inline-block;
// `

// const Landing = () => {
//   return (
//     <>
//         <h1>
//           FOR:EAT
//         </h1>
//         <BackgroundImgContainer>
//           <img src={Landing} alt=""/>
//         </BackgroundImgContainer>
//       <Outlet />

//     </>
//   );
// };

// export default Landing;
