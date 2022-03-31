import React from "react";
import styled from "styled-components";
import BrowseLiseItem from "components/browse/BrowseListItem";

const Container = styled.div`
  margin: 0 0 10rem 0;
`

const BrowseList = () => {
  
  const Data = [
    { keyword: "Vegan", title: "Vegan Recipes" },
    { keyword: "Kid Friendly", title: "FOR:KIDS" },
    { keyword: "Weeknight", title: "FOR:Weeknight" },
    { keyword: "Brunch", title: "Brunch" },
    { keyword: "Oven", title: "WITH:OVEN" },
    { keyword: "From Scratch", title: "From Scratch" },
  ]

  return (
    <Container>
      { Data.map((item, idx) => ( 
        <BrowseLiseItem 
          key={idx}
          {...item} 
        />
      ))}
    </Container>
  )
}

export default BrowseList;