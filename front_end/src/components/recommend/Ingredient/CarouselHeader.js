import React from 'react';
import Carousel from 'react-material-ui-carousel'
import styled from "styled-components";
import { Paper, Button } from '@mui/material'
import MainImg from "assets/img/IngredientMain.jpg";
import Carousel1 from "assets/img/Carousel1.png";
import { borderRadius } from '@mui/system';

const Header = styled.div`
  height: 24rem;
  background-image: url(${(props) => (props.image ? props.image : MainImg)});
  background-size: cover;
  background-repeat: no-repeat;
`

const HeaderTitle = styled.div`
  position: absolute;
  top: 10rem;
  left:50%;
  transform: translate(-50%, -50%);                                                                   
  font-size: 3rem;
  color: white;
  z-index: 2;
  text-align: center;
`

const HeaderContent = styled.div`
  position: absolute;
  top: 14rem;
  left:50%;
  transform: translate(-50%, -50%);                                                                   
  font-size: 1rem;
  color: white;
  z-index: 2;
  text-align: center;
`

const CarouselHeader = () => {
  const Example = (props) => 
  {
    var items = [
      {
        name: "Low-Fat Berry Blue Frozen Dessert",
        description: "Probably the most random thing you have ever seen!",
        image: MainImg,
        recipe_seq: 1,
      },
      {
        name: "Blueberry Scones",
        description: "Hello World!",
        image: Carousel1,
        recipe_seq: 20
      }
    ]
    return (
      <Carousel>
          {
            items.map( (item, i) => <Item key={i} item={item} /> )
          }
      </Carousel>
    )
  }
  
  const Item = (props) =>
  {
    return (
      <Paper sx={{ boxShadow: 0 }}>
        <Header image={props.item.image}/>
        <HeaderTitle>{props.item.name}</HeaderTitle>
        <HeaderContent>{props.item.description}</HeaderContent>
        <Button href={`/recipes/${props.item.recipe_seq}`} variant="contained" className="CheckButton" color="warning"
        sx={{
          position: "absolute",
          top: "19rem",
          left:"50%",
          transform: "translate(-50%, -50%)", 
          fontSize: "0.8rem",
          color: "white",
          zIndex: "2",
          textAlign: "center",
          borderRadius: "4rem"
        }}>
          Check it out!
        </Button>
      </Paper>
    )
  }
  return (
    <Example />

  )
};

export default CarouselHeader;
