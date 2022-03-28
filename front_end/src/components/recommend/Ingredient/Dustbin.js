import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { getIngredientRecipeList } from 'api/IngredientApi';
import { useNavigate } from 'react-router-dom';
import { Alert } from "components/commons/Alert";


const style = {
  height: '25rem',
  width: '45rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const DustbinContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`


const BowlContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MixButton = styled.button`
  font-size: 1rem;
  margin: 2.5rem 0 0 0.5rem;
  width: 8rem;
  background-color: white;
  cursor: pointer;
  border: none;

`

const firstBall = keyframes`
  0% {
    top: 0;
  }
  100% {
    top: 20rem;
  } 
`

const secondBall = keyframes`
  0% {
    top: -5rem;
  }
  100% {
    top: 14rem;
  } 
`

const thirdBall = keyframes`
  0% {
    top: -9.5rem;
  }
  100% {
    top: 9.2rem;
  } 
`

const Foodimg1 = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 55%;
  position: relative;
  animation: ${firstBall} 1s ease-in infinite alternate;
`

const Foodimg2 = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 55%;
  position: relative;
  animation: ${secondBall} 1s ease-in infinite alternate;
`

const Foodimg3 = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 55%;
  position: relative;
  animation: ${thirdBall} 1s ease-in infinite alternate;
`

const FoodContainer = styled.div`
  display: flex-wrap;
  margin: 2rem 0 2rem 0;
  padding: 0 9rem;
  min-height: 10vh;
`

const FoodButton = styled.button`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  background-color: white;
  margin: 0 1rem 1rem 0;
  padding-inline: 1rem;
  border: none;
  box-shadow: 3px 4px 3px 0px gray;
  border-radius: 10rem;
  height: 2rem;
  &:hover{
    opacity: 0.3;
    // filter: brightness(50%);
  }
`



const Dustbin = React.memo(function Dustbin() {
    const navigate = useNavigate();
    const [foods, setFood] = useState([]);

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: (accept) => {
            setFood(foods => [...foods, accept])
            console.log(foods.length)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    
    const isActive = canDrop && isOver;

    let backgroundColor = '#ED8141';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = '#ED8141';
    }

    const deleteFood = (food) => {
        setFood(foods.filter(item => item.title !== food.title));
    }

    const getResult = async (ingredient) => {
        if (ingredient.length === 0) {
            Alert("✅ Select an ingredient!")
        } else {
            const result = await getIngredientRecipeList(1, ingredient);
            if (result.data.length !== 0) {
                navigate('/search/ingredient', { state: [result, foodsUnique]})
            } else {
                Alert("❌ No recipe result, choose the ingredients again.")
            }
        }
    }

    const foodsUnique = foods.filter((value, idx) => {
        return foods.indexOf(value) === idx; 
    });


    return (
        <>
        <Container>
          <DustbinContainer>
            <div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
              <div>{isActive ? 'Release to drop' : 'Drag a ingredient here!'}</div>
              {foodsUnique.map((food, index) => (
                (index <= 8 ? 
                  <Foodimg1 key={index} src={food.src} alt={food.title} /> : ( index <= 17 ?
                  <Foodimg2 key={index} src={food.src} alt={food.title} /> : <Foodimg3 key={index} src={food.src} alt={food.title} />
                  )
                )
              ))}
            </div>
          </DustbinContainer>
          <BowlContainer>
            <MixButton onClick={()=>getResult(foodsUnique)}>Let's Mix! →</MixButton>
          </BowlContainer>
          <FoodContainer>
            {foodsUnique.map((food, index) => (
              <FoodButton key={index} onClick={()=>{deleteFood(food)}}>{food.title}</FoodButton>
            ))}
          </FoodContainer>  
        </Container>
        </>
    );
});


export default React.memo(Dustbin);
