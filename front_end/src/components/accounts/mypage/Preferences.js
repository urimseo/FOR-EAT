import React from "react";
import styled from "styled-components";
import Modal from "components/commons/Modal";
import Plus from "assets/img/Plus.png"
import Rosemary from "assets/img/Ingredient_rosemary.jpg"

const Container = styled.div`
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 64px;
  margin-top: 3rem;
`

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const SubTheme = styled.div`
  margin-top: 3rem;
`

const SubTitle = styled.div`
  font-size: 25px;
`

const Sub = styled.div`
  font-size: 15px;
  color: #8C8B8B;
  margin-top: 1rem;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`;

const Image = styled.img`
  border-radius: 4rem;
  height: 8rem;
  width: 8rem;
  cursor: pointer;
`;

const ImageSub = styled.div`
  font-size: 15px;
  margin-top: 1rem;
  font-weight: bold;

`;

const Diets = styled.div`
`

const Allergies = styled.div`
`

const DislikedIngredients = styled.div`
`

const FavoriteCuisines = styled.div`
`

const Goals = styled.div`
`

const Preferences = () => {
  return (
    <>
      <Container>
        <Title>My Preferences</Title>

        <SurveyContainer>

          <Diets>
            <SubTheme>
              <SubTitle>Diets</SubTitle>
              <Sub>Click ‘ADD DIETS’ and Select from the diets below.</Sub>
            </SubTheme>

            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
                
              <ImageContainer>
                <Image src={Plus}/>
                <ImageSub>ADD DIETS</ImageSub>
              </ImageContainer>
            </Item>
          </Diets>

          <Allergies>
            <SubTheme>
            <SubTitle>Allergies</SubTitle>
              <Sub>Click ‘Allergies’ and Select from the allergies below.</Sub>
            </SubTheme>

            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
                
              <ImageContainer>
                <Image src={Plus}/>
                <ImageSub>ADD DIETS</ImageSub>
              </ImageContainer>
            </Item>
          </Allergies>

          <DislikedIngredients>
            <SubTheme>
              <SubTitle>Disliked Ingredients</SubTitle>
              <Sub>Click ‘ADD DISLIKED INGREDIENTS’ and Add ingredient that you don’t like.</Sub>
            </SubTheme>

            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
                
              <ImageContainer>
                <Image src={Plus}/>
                <ImageSub>ADD DIETS</ImageSub>
              </ImageContainer>
            </Item>
          </DislikedIngredients>

          <FavoriteCuisines>
            <SubTheme>
              <SubTitle>Favorite Cuisines</SubTitle>
              <Sub>Click ‘ADD FAVORITE CUISINES’ and Add Cuisine that you like.</Sub>
            </SubTheme>

            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
                
              <ImageContainer>
                <Image src={Plus}/>
                <ImageSub>ADD DIETS</ImageSub>
              </ImageContainer>
            </Item>
          </FavoriteCuisines>

          <Goals>
            <SubTheme>
              <SubTitle>Goals</SubTitle>
              <Sub>Click ‘ADD GOALS’ and Select your goals.</Sub>
            </SubTheme>

            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
                
              <ImageContainer>
                <Image src={Plus}/>
                <ImageSub>ADD DIETS</ImageSub>
              </ImageContainer>
            </Item>
          </Goals>

        </SurveyContainer>
      </Container>
    </>
  );
};

export default Preferences;
