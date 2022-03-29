import React from "react";
import BrowseLiseItem from "components/browse/BrowseListItem";


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
    <>
      { Data.map((item, idx) => ( 
        <BrowseLiseItem 
          key={idx}
          {...item} 
        />
      ))}
    </>
  )
}

export default BrowseList;