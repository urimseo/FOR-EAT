import styled from "styled-components";
import Rating from '@mui/material/Rating';

import Typography from "components/commons/Typography";
import NutritionCard from "components/recipeDetail/NutritionCard";

const Container = styled.div`
  width: 50%;
  padding-inline: 1rem;
`
const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`
const CategoryTag = styled.div`
display: flex;
#flag {
  width: 9rem;
  height: 2rem;
  box-sizing: content-box;
  padding-right: 1rem;
  padding-top: 1rem;
  position: relative;
  background: #ED8141;
  color: white;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
}
#flag:after {
  content: "";
  position: absolute;
  left: 9rem;
  bottom: 0;
  width: 0;
  height: 0;
  border-right: 1rem solid #FFFFFF;
  border-top: 1.5rem solid transparent;
  border-bottom: 1.5rem solid transparent;
}
`
const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  row-gap: 1rem;
  margin: 1rem 0;
  .itemTitle{
    font-weight: 600;
  }
  .nutriTitle{
    grid-template-rows: 0 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .item{
    align-self: center;
  }
`
const CardContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0.5rem;
`
const RecipeInfo = () => {
  const value = 4;
  const grams = 20;
  return (
    <Container>
      <Typography 
      ff="Playfair Display" fs="3rem" fw="600"
      ta="start" dp="flex"
      mb="1rem"
      >Recipe Name Recipe Name Recipe Name</Typography>
      <SpaceBetweenContainer>
        <CategoryTag>
          <div id="flag">Vegan</div>
        </CategoryTag>
        <Rating name="read-only" value={value} readOnly />
      </SpaceBetweenContainer>
      <hr />
        <TextContainer>
          <div className="itemTitle">SERVINGS</div>
          <div className="item">1</div>
          <div className="itemTitle">PREPATION TIME</div>
          <div className="item">120 MIN</div>
          <div className="itemTitle">COOKING TIME</div>
          <div className="item">60 MIN</div>
        </TextContainer>
      <hr />
        <TextContainer>
          <div className="nutriTitle">NUTRITION</div>
          <div className="item">Standard Daily Intake for One Meal</div>
        </TextContainer>
        <div style={{display: "grid", gridTemplateColumns:"2fr 8fr", gap: "0.5vw" }}>
          <NutritionCard title="CALORIES" style={{ gridRow: 1/2, height: "35vh" }} />
          <CardContainer>
            {/* 여기다 map으로 card 보여주기 */}
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
            <NutritionCard title="PROTEIN" grams={grams} />
          </CardContainer>
        </div>
    </Container>
  )
}

export default RecipeInfo;