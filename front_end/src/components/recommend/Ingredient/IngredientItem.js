import React, { memo } from 'react';
import Dustbin from './Dustbin';
import Box from './Box';
import styled from "styled-components";
import egg from "assets/img/IngredientItem/egg.PNG"
import bacon from "assets/img/IngredientItem/bacon.jpg"
import beef from "assets/img/IngredientItem/beef.jpg"
import rice from "assets/img/IngredientItem/rice.jpg"
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


export const IngredientItem = memo(function IngredientItem() {
    return (<div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Container>
          <IngredientContainer>
            <Box src={onion} title="onion" />
            <Box src={garlic} title="garlic"/>
            <Box src={zucchini} title="zucchini"/>
            <Box src={carrot} title="carrot"/>
            <Box src={mushroom} title="mushroom"/>
            <Box src={potato} title="potato"/>
            <Box src={tomato} title="tomato"/>
          </IngredientContainer>
          <IngredientContainer>
            <Box src={beef} title="beef"/>
            <Box src={pork} title="pork"/>
            <Box src={chicken} title="chicken"/>
            <Box src={turkey} title="turkey"/>
            <Box src={bacon} title="bacon"/>
            <Box src={salmon} title="salmon"/>
            <Box src={shrimp} title="shrimp"/>
          </IngredientContainer>
          <IngredientContainer>
            <Box src={egg} title="egg"/>
            <Box src={milk} title="milk"/>
            <Box src={cheese} title="cheese"/>
            <Box src={flour} title="flour"/>
            <Box src={noodle} title="noodle"/>
            <Box src={rice} title="rice"/>
            <Box src={chocolate} title="chocolate"/>
          </IngredientContainer>
        </Container>
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
			</div>
		</div>);
});
