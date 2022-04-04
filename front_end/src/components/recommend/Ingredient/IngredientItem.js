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
`

const IngredientItemContainer = styled.div`
  display: flex;
  margin: 0 2rem 1.5rem 0;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: center;
    font-weight: 300;
  }
`


export const IngredientItem = memo(function IngredientItem() {
    return (<div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Container>
          <IngredientContainer>
            <IngredientItemContainer>
              <Box src={onion} title="onion" />
              <div className='title'>onion</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={garlic} title="garlic"/>
              <div className='title'>garlic</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={zucchini} title="zucchini"/>
              <div className='title'>zucchini</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={carrot} title="carrot"/>
              <div className='title'>carrot</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={mushroom} title="mushroom"/>
              <div className='title'>mushroom</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={potato} title="potato"/>
              <div className='title'>potato</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={tomato} title="tomato"/>
              <div className='title'>tomato</div>
            </IngredientItemContainer>
          </IngredientContainer>
          <IngredientContainer>
            <IngredientItemContainer>
              <Box src={beef} title="beef"/>
              <div className='title'>beef</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={pork} title="pork"/>
              <div className='title'>pork</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={chicken} title="chicken"/>
              <div className='title'>chicken</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={turkey} title="turkey"/>
              <div className='title'>turkey</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={bacon} title="bacon"/>
              <div className='title'>bacon</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={salmon} title="salmon"/>
              <div className='title'>salmon</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={shrimp} title="shrimp"/>
              <div className='title'>shrimp</div>
            </IngredientItemContainer>     
          </IngredientContainer>
          <IngredientContainer>
            <IngredientItemContainer>
              <Box src={egg} title="egg"/>
              <div className='title'>egg</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={milk} title="milk"/>
              <div className='title'>milk</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={cheese} title="cheese"/>
              <div className='title'>cheese</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={flour} title="flour"/>
              <div className='title'>flour</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={noodle} title="noodle"/>
              <div className='title'>noodle</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={rice} title="rice"/>
              <div className='title'>rice</div>
            </IngredientItemContainer>
            <IngredientItemContainer>
              <Box src={chocolate} title="chocolate"/>
              <div className='title'>chocolate</div>
            </IngredientItemContainer>
          </IngredientContainer>
        </Container>
			</div>
			<div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
			</div>
		</div>);
});
