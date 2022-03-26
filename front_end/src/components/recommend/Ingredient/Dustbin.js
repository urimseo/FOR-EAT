import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import React, { useState } from 'react';
import styled from 'styled-components';
import { getIngredientRecipeList } from 'api/IngredientApi';
import { useNavigate } from 'react-router-dom';
import mixing from 'assets/img/mixing.png'


const style = {
    height: '22rem',
    width: '30rem',
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

const BowlContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  .mixing {
      margin: 2.5rem 0 0 0.5rem;
  }
`

const BowlImg = styled.img`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  &:hover{
    opacity: 0.5;
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
        const result = await getIngredientRecipeList(1, ingredient);

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
              <div>{isActive ? 'Release to drop' : 'Drag a ingredient here!'}</div>
              {foodsUnique.map((food, index) => (
                <img key={index} src={food.src} style={{ width: '4rem', height: '4rem', borderRadius: "55%"}} alt={food.title} />
              ))}
            </div>
          </DustbinContainer>
          <BowlContainer>
            <BowlImg src={mixing} alt="bowl" onClick={()=>getResult(foodsUnique)} />
            <div className='mixing'>Let's Mix!</div>
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
