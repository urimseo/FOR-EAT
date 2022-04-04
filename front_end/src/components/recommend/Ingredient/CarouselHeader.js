import React from 'react';
import Carousel from 'react-material-ui-carousel'
import styled from "styled-components";
import { Paper, Button } from '@mui/material'
import MainImg from "assets/img/IngredientMain.jpg";
import Carousel3 from "assets/img/Carousel3.jpg";
import Carousel4 from "assets/img/Carousel4.jpg";
import Carousel5 from "assets/img/Carousel5.jpg";
import Carousel6 from "assets/img/Carousel6.jpg";
import Carousel7 from "assets/img/Carousel7.jpg";
import Carousel8 from "assets/img/Carousel8.jpg";

const Header = styled.div`
  height: 20rem;
  background-image: url(${(props) => (props.image ? props.image : MainImg)});
  background-size: cover;
  position: center;
  background-repeat: no-repeat;
`

const HeaderTitle = styled.div`
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translate(-50%, -50%);                                                                   
  font-size: 2.5rem;
  color: white;
  z-index: 2;
  text-align: center;
`

const HeaderContent = styled.div`
  position: absolute;
  top: 11rem;
  left:50%;
  transform: translate(-50%, -50%);                                                                   
  font-size: 1.3rem;
  font-weight: 400;
  color: white;
  z-index: 2;
  text-align: center;
`

const CarouselHeader = () => {
  const Example = (props) => 
  {
    var items = [
      {
        name: "Fresh Strawberry Cake",
        description: "Decorative, Fresh, Delicious",
        image: Carousel3,
        recipe_seq: 4942
      },
      {
        name: "Egg Curry",
        description: "#Beginner_Cook #Indian",
        image: Carousel4,
        recipe_seq: 5945
      },
      {
        name: "The Best Pork Chop Dinner",
        description: "Combine soup, mushrooms, mustard, chicken broth",
        image: Carousel5,
        recipe_seq: 1620
      },
      {
        name: "Quick Cinnamon Rolls",
        description: "No Yeast",
        image: Carousel6,
        recipe_seq: 44550
      },
      {
        name: "Judy's Grilled Flank Steak",
        description: "# High Protein #Steak #Grill #Oven",
        image: Carousel7,
        recipe_seq: 7266
      },
      {
        name: "Cajun Lobster Pasta",
        description: "For Special Anniversary",
        image: Carousel8,
        recipe_seq: 63070
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
          top: "16rem",
          left:"50%",
          transform: "translate(-50%, -50%)", 
          fontSize: "0.8rem",
          color: "white",
          zIndex: "2",
          textAlign: "center",
          fontFamily: "Work Sans",
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
