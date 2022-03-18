import styled from "styled-components";

const IngredientsContainer = styled.div`
  text-align: right;
  .title {
    font-size: 2.25rem;
    font-weight: 600;
  }
  .content {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1rem 0;
  }
`
const IngredientList = () => {
  const ingredients = [ "1cup butter, softened", "1 1⁄2 cups sugar", "2 large eggs", "2 3⁄4cups flour", "2 teaspoons cream of tartar", "1 teaspoon baking soda", "1⁄4 teaspoon salt", "3 tablespoons sugar", "3 teaspoons cinnamon", "1 teaspoon vanilla extract"]
  const ingredientList = ingredients.map((ingredient) => (<li className="content">{ingredient}</li>))
    return (
      <IngredientsContainer>
        <div className="title">INGREDIENTS</div>
        <ul>
          {ingredientList}
        </ul>
      </IngredientsContainer>
    )
}

export default IngredientList;