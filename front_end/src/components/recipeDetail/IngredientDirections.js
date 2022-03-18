import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const TextContainer = styled.div`
  text-align: ${(props) => (props.ta ? props.ta : "left")};
  width: 50%;
  margin: 0 5rem;
  .title {
    font-size: 2.25rem;
    font-weight: 600;
    margin: 0 0 7rem 0;
  }
  .content_bold {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
  }
  .content_light {
    font-size: 1.5rem;
    font-weight: 300;
    margin: 1rem 0;
    list-style: auto;
  }
`
const IngredientList = () => {
  const ingredients = [ "1cup butter, softened", "1 1⁄2 cups sugar", "2 large eggs", "2 3⁄4cups flour", "2 teaspoons cream of tartar", "1 teaspoon baking soda", "1⁄4 teaspoon salt", "3 tablespoons sugar", "3 teaspoons cinnamon", "1 teaspoon vanilla extract"]
  const ingredientList = ingredients.map((ingredient) => (<li className="content_bold">{ingredient}</li>))
    return (
      <TextContainer ta="right">
        <div className="title">INGREDIENTS</div>
        <ul>
          {ingredientList}
        </ul>
      </TextContainer>
    )
}

const DirectionList = () => {
  const directions = [
    "Preheat oven to 350°F.",
    "Mix softened butter, 1 1/2 cups sugar, 1tps of vanilla extract and eggs thoroughly in a large bowl.",
    "Combine flour, cream of tartar, baking soda and salt in a separate bowl.",
    "Blend dry ingredients into butter mixture.",
    "Chill dough, and chill an ungreased cookie sheet for about 10-15 minutes in the fridge.",
    "Meanwhile, mix 3 tablespoons sugar, and 3 teaspoons cinnamon in a small bowl.",
    "Scoop 1 inch globs of dough into the sugar/ cinnamon mixture.",
    "Coat by gently rolling balls of dough in the sugar mixture.",
    "Place on chilled ungreased cookie sheet, and bake 10 minutes.",
    "Remove from pan immediately."
  ]
  const directionList = directions.map((direction) => (<li className="content_light">{direction}</li>))
    return (
      <TextContainer>
        <div className="title">DIRECTION</div>
        <ul>
          {directionList}
        </ul>
      </TextContainer>
    )
}

const IngredientDirections = () => {
  return (
    <Container>
      <IngredientList />
      <DirectionList />
    </Container>
  )
}

export default IngredientDirections;