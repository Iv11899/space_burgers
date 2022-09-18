import React from "react";
import IngredientCardStyles from "./ingredient-card.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

const IngredientCard = React.memo(({ ingredient, openModal }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: "items",
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const qty = useSelector(
    (state) =>
      state.dropContainerReducer.orderIngredients.filter(
        (item) => item._id === ingredient._id
      ).length
  );

  return (
    <li
      ref={dragRef}
      style={{ opacity }}
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
      {qty ? (
        <Counter
          className={IngredientCardStyles.counter}
          count={qty}
          size="default"
        />
      ) : null}
    </li>
  );
});

IngredientCard.propTypes = {
  ingredient: PropTypes.shape(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default IngredientCard;
