import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Rosemary from "assets/img/Ingredient_rosemary.jpg"
import Button from "../../commons/Button"

const Container = styled(motion.div)`
  box-sizing: border-box;
  width: 1200px;
  height: 700px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
  letter-spacing: -1px;
`

const Title = styled.div`
  font-family: Playfair Display;
  font-size: 40px;
  margin-top: 3rem;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
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
  margin: 3rem;
  margin-right: 7rem;
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
`

const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 30px;
`

const DislikedIngredientsModal = ({ layoutId, setWidgetId  }) => {
    const onClick = (event) => {
        event.stopPropagation();
      };

      const onButton = () => {
        setWidgetId(null);
      }

    return (
        <Container
          onClick={onClick}
          layout
          layoutId={layoutId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Title>DislikedIngredients</Title>
          <ItemContainer>
            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
              
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
              
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>

              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
            </Item>

            <Item>
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
              
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
              
              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>

              <ImageContainer>
                <Image src={Rosemary}/>
                <ImageSub>VEGETARIAN</ImageSub>
              </ImageContainer>
            </Item>
          </ItemContainer>

          <ButtonContainer>
            <Button
            name = "확인"
            onClick={onButton}
            />

            <Button
              name = "취소"
              bc="#C4C4C4"
              hoverColor="#a2a2a2"
              ml = "3rem"
              onClick={onButton}
            />
          </ButtonContainer>
        </Container>
      );
    }
  
  export default DislikedIngredientsModal;
  