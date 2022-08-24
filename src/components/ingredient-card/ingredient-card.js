import IngredientCardStyles from "./ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

export default function IngredientCard({ ingredient, openModal }) {
  return (
    <li
      className={IngredientCardStyles.card}
      onClick={() => openModal(ingredient)}
    >
      <img
        className={IngredientCardStyles.image}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={IngredientCardStyles.costContainer}>
        <p
          className={`${IngredientCardStyles.cost} text text_type_digits-default`}
        >
          {ingredient.price}
        </p>
        <CurrencyIcon
          className={IngredientCardStyles.currency}
          type="primary"
        />
      </div>
      <h2 className={`${IngredientCardStyles.name} text text_type_main-small`}>
        {ingredient.name}
      </h2>
      <Counter
        className={IngredientCardStyles.counter}
        count={1}
        size="default"
      />
    </li>
  );
}

IngredientCard.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired,
};
