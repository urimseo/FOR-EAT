import React from 'react';
import Carousel from 'react-material-ui-carousel'
import styled from "styled-components";
import { Paper, Button } from '@mui/material'
import MainImg from "assets/img/RecommendCarousel1.PNG";
import Carousel1 from "assets/img/RecommendCarousel2.PNG";
import Carousel2 from "assets/img/RecommendCarousel3.PNG";
import Carousel3 from "assets/img/RecommendCarousel4.PNG";


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

const FeedCarousel = () => {
  const Example = (props) => 
  {
    var items = [
      {
        name: "Fusilli With Spinach and Asiago Cheese",
        description: "#Fusilli #Tomato #Vegan",
        image: MainImg,
        recipe_seq: 49322
      },
      {
        name: "Fast Fruit Tarts",
        description: "Fresh Tarts Topped With Any Fruits",
        image: Carousel1,
        recipe_seq: 1939
      },
      {
        name: "Cool Veggie Pizza",
        description: "A Little Step To Save The Planet : Adding Plant-Based Diet On Table Movement",
        image: Carousel2,
        recipe_seq: 863
      },
      {
        name: "Sagebrush Slush",
        description: "Crush, Fresh, Slush, Punch",
        image: Carousel3,
        recipe_seq: 55682
      },
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

export default FeedCarousel;
