import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import StuffElementsStyles from './stuff-elements.module.css';
import { ingredientType } from "../../utils/types";

export default function StuffElements({ ingredients }) {
  return (
    <div className={StuffElementsStyles.container}>
      <DragIcon />
      <ConstructorElement
        text={ingredients.name}
        price={ingredients.price}
        thumbnail={ingredients.image}
      />
    </div>
  );
}

StuffElements.propTypes = {
  ingredients: PropTypes.shape(ingredientType).isRequired,
}; 