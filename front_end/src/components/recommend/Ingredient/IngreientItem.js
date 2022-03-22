import React from "react";
import styled from "styled-components";
import egg from "assets/img/IngredientItem/egg.PNG"
import bacon from "assets/img/IngredientItem/bacon.jpg"
import beef from "assets/img/IngredientItem/beef.jpg"
import bread from "assets/img/IngredientItem/bread.PNG"
import carrot from "assets/img/IngredientItem/carrot.PNG"
import cheese from "assets/img/IngredientItem/cheese.jpg"
import chicken from "assets/img/IngredientItem/chicken.jpg"
import chocolate from "assets/img/IngredientItem/chocolate.jpg"
import flour from "assets/img/IngredientItem/flour.jpg"
import garlic from "assets/img/IngredientItem/garlic.jpg"
import milk from "assets/img/IngredientItem/milk.jpg"
import mushroom from "assets/img/IngredientItem/mushroom.jpg"
import noodle from "assets/img/IngredientItem/noodle3.jpg"
import onion from "assets/img/IngredientItem/onion.jpg"
import pork from "assets/img/IngredientItem/pork.jpg"
import potato from "assets/img/IngredientItem/potato.jpg"
import salmon from "assets/img/IngredientItem/salmon.jpg"
import shrimp from "assets/img/IngredientItem/shrimp.PNG"
import tomato from "assets/img/IngredientItem/tomato.jpg"
import turkey from "assets/img/IngredientItem/turkey.png"
import zucchini from "assets/img/IngredientItem/zucchini.PNG"


const Container = styled.div`
  margin-top: 3rem;
  min-width: 32vh;
`
const Image = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 55%;
  margin: 1rem 1.5rem 0 1.5rem;
`

const IngredientContainer = styled.div`
  display: flex;
  justify-content: center;
`

const IngredientItem = () => {
  return (
    <>
    <Container>
      <IngredientContainer>
        <Image src={onion}></Image>
        <Image src={garlic}></Image>
        <Image src={zucchini}></Image>
        <Image src={carrot}></Image>
        <Image src={mushroom}></Image>
        <Image src={potato}></Image>
        <Image src={tomato}></Image>
      </IngredientContainer>
      <IngredientContainer>
        <Image src={beef}></Image>
        <Image src={pork}></Image>
        <Image src={chicken}></Image>
        <Image src={turkey}></Image>
        <Image src={bacon}></Image>
        <Image src={salmon}></Image>
        <Image src={shrimp}></Image>
      </IngredientContainer>
      <IngredientContainer>
        <Image src={egg}></Image>
        <Image src={milk}></Image>
        <Image src={cheese}></Image>
        <Image src={flour}></Image>
        <Image src={noodle}></Image>
        <Image src={bread}></Image>
        <Image src={chocolate}></Image>
      </IngredientContainer>
    </Container>
    </>
  );
};

export default IngredientItem;