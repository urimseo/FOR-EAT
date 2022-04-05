import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import avocado_pizza from "assets/img/browse_avocado_pizza.png";
import buncha from "assets/img/browse_buncha.png";
import hummus from "assets/img/browse_hummus.png";
import lamb_stew from "assets/img/browse_lamb_stew.png";
import vanilla_pie from "assets/img/browse_vanilla_pie.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0 0;
  transition: 0.5s ease;
  backface-visibility: hidden;
  object-fit: cover;
  &:hover .image-wrapper {
    background-color: black;
  }
  &:hover .image {
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 60%;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.m ? props.m : "")};
  transition: 0.5s ease;
  backface-visibility: hidden;
  :hover {
    opacity: 0.5;
  }
`;

const BrowseArticle = () => {
  return (
    <Container>
      <FlexRow>
        <Item>
          <Link to={`/recipes/25146`} style={{ display: "flex" }}>
            <Img src={avocado_pizza} width="98%" m="0 2% 1.8% 0" />
          </Link>
          <Link to={`/recipes/55709`} style={{ display: "flex" }}>
            <Img src={buncha} width="97%" m="0 0 2.5% 0" />
          </Link>
        </Item>
        <Item>
          <Link to={`/recipes/7437`} style={{ display: "flex" }}>
            <Img src={hummus} width="97%" />
          </Link>
          <Link to={`/recipes/2259`} style={{ display: "flex" }}>
            <Img src={vanilla_pie} width="98%" />
          </Link>
        </Item>
      </FlexRow>
      <Link to={`/recipes/1991`} style={{ display: "flex" }}>
        <Img src={lamb_stew} width="100%" />
      </Link>
    </Container>
  );
};

export default BrowseArticle;