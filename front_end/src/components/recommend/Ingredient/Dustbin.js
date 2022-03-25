import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import React, { useState } from 'react';
import styled from 'styled-components';
import { getIngredientRecipeList } from 'api/IngredientApi';
import { useNavigate } from 'react-router-dom';


const style = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
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

const FoodContainer = styled.div`
    display: flex-wrap;
    margin: 2rem 0 2rem 0;
    padding: 0 9rem;
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
        drop: (accept) => (
            setFood(foods => [...foods, accept])
        ),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    
    const isActive = canDrop && isOver;

    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }

    const deleteFood = (food) => {
        setFood(foods.filter(item => item.title !== food.title));
    }

    const getResult = async (ingredient) => {
        const result = await getIngredientRecipeList(0, ingredient);
        if (result.length !== 0) {
            navigate('/search/ingredient', { state: [result, foodsUnique]})
        } else {
            alert("레시피 결과가 존재하지 않습니다. 다시 조합해보세요!")
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
                {isActive ? 'Release to drop' : 'Drag a box here'}
            </div>
          </DustbinContainer>
          <FoodContainer>
            {foodsUnique.map((food, index) => (
              <FoodButton key={index} onClick={()=>{deleteFood(food)}}>{food.title}</FoodButton>
            ))}
            <FoodButton onClick={()=>getResult(foodsUnique)}>Mix</FoodButton>
          </FoodContainer>  
        </Container>
        </>
    );
});


export default React.memo(Dustbin);
