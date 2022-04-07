import React from "react";
import styled from "styled-components";
import BrowseLiseItem from "components/browse/BrowseListItem";

const Container = styled.div`
  margin: 0 0 10rem 0;
`

const BrowseList = () => {
  
  const Data = [
    { keyword: "Vegan", title: "Vegan Recipes" },
    { keyword: "Kid Friendly", title: "FOR:Kids" },
    { keyword: "Weeknight", title: "FOR:Weeknight" },
    { keyword: "Brunch", title: "Brunch" },
    { keyword: "Oven", title: "WITH:Oven" },
    { keyword: "From Scratch", title: "From Scratch" },
    { keyword: "No Cook", title: "No Cook" },
    { keyword: "Christmas", title: "Christmas" },
    { keyword: "Spicy", title: "Spicy" },
    { keyword: "Very Low Carbs", title: "Very Low Carbs" },
    { keyword: "Microwave", title: "WITH:Microwave" },
    { keyword: "Camping", title: "Camping" },
    { keyword: "Dairy Free Foods", title: "Dairy Free" },
    { keyword: "One Dish Meal", title: "One Dish Meal" },
    { keyword: "Inexpensive", title: "Inexpensive" },
    { keyword: "Egg Free", title: "Egg Free" },
    { keyword: "Thanksgiving", title: "Thanksgiving" },
    { keyword: "From Scratch", title: "From Scratch" },
    { keyword: "Broil/Grill", title: "Broil/Grill" },
    { keyword: "Breakfast", title: "Breakfast" },
    { keyword: "Potluck", title: "Potluck" },
    { keyword: "Beverages", title: "Beverages" },
    { keyword: "Lactose Free", title: "Lactose Free" },
    { keyword: "Spring", title: "Spring" },
  ]

    let randomIndexArray = []
    for (var i=0; i< 9; i++) { 
      var randomNum = Math.floor(Math.random() * 24)
      if (randomIndexArray.indexOf(randomNum) === -1) {
        randomIndexArray.push(randomNum)
      } else { 
        i--
      }
    }

  return (
    <Container>
      { randomIndexArray.map((item, idx) => ( 
        <BrowseLiseItem 
          key={idx}
          {...Data[item]} 
        />
      ))}
    </Container>
  )
}

export default BrowseList;