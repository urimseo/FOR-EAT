import React, { useEffect, useState } from "react";
import PopularIngredients from "components/browse/BrowsePopularIngredient"
import VeganList from "components/browse/BrowseVeganList"
import styled from "styled-components";

const flexContainer = styled.div`
  display: flex;
  flex: wrap;
`

const BrowseList = () => {
  return (
    <>
      <PopularIngredients />
      <VeganList />
    </>
  )
}

export default BrowseList;