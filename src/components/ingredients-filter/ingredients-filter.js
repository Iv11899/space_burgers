import IngredientCard from "../ingredient-card/ingredient-card";
import PropTypes from "prop-types";

export default function IngredientsFilter({ ingredients, type, openModal }) {
  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === type
  );

  return (
    <>
      {filteredIngredients.map((ingredient) => {
        return (
          <IngredientCard
            ingredient={ingredient}
            key={ingredient._id}
            openModal={openModal}
          />
        );
      })}
    </>
  );
}

IngredientsFilter.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
