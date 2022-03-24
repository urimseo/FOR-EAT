import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import React, { useState } from 'react';
import Test from 'components/recommend/Ingredient/IngredientInDustbin'
import styled from 'styled-components';


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
    display: flex;
    margin: 2rem 0 2rem 0;
    padding: 0 9rem;
`



const Dustbin = React.memo(function Dustbin() {
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
    return (
        <>
        <Container>
          <DustbinContainer>
            <div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
                {isActive ? 'Release to drop' : 'Drag a box here'}
            </div>
          </DustbinContainer>
          <FoodContainer>
            <Test foods={foods} />
          </FoodContainer>  
        </Container>
        </>
    );
});

export default React.memo(Dustbin);
