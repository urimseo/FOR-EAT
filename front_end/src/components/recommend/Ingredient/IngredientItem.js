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
import zucchini from "assets/img/IngredientItem/zucchini.jpg"


const Container = styled.div`
  margin-top: 3rem;
  min-width: 32vh;
`

const IngredientContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Image = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 55%;
  margin: 1rem 1.5rem 0 1.5rem;
`



const IngredientItem = () => {
  return (
    <>
    <Container>
      <IngredientContainer>
        <Image src={onion} title="onion"></Image>
        <Image src={garlic} title="garlic"></Image>
        <Image src={zucchini} title="zucchini"></Image>
        <Image src={carrot} title="carrot"></Image>
        <Image src={mushroom} title="mushroom"></Image>
        <Image src={potato} title="potato"></Image>
        <Image src={tomato} title="tomato"></Image>
      </IngredientContainer>
      <IngredientContainer>
        <Image src={beef} title="beef"></Image>
        <Image src={pork} title="pork"></Image>
        <Image src={chicken} title="chicken"></Image>
        <Image src={turkey} title="turkey"></Image>
        <Image src={bacon} title="bacon"></Image>
        <Image src={salmon} title="salmon"></Image>
        <Image src={shrimp} title="shrimp"></Image>
      </IngredientContainer>
      <IngredientContainer>
        <Image src={egg} title="egg"></Image>
        <Image src={milk} title="milk"></Image>
        <Image src={cheese} title="cheese"></Image>
        <Image src={flour} title="flour"></Image>
        <Image src={noodle} title="noodle"></Image>
        <Image src={bread} title="bread"></Image>
        <Image src={chocolate} title="chocolate"></Image>
      </IngredientContainer>
    </Container>
    </>
  );
};

export default IngredientItem;