import detailsStyles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

export default function IngredientDetails({ ingredient }) {
  return (
    <div className={detailsStyles.main}>
      <h2 className={`${detailsStyles.title} text text_type_main-large`}>
        Детали ингредиента
      </h2>
      <figure className={detailsStyles.imgContainer}>
        <img
          className={detailsStyles.img}
          src={ingredient.image_large}
          alt={ingredient.name}
        />
        <figcaption
          className={`${detailsStyles.caption} text text_type_main-medium`}
        >
          {ingredient.name}
        </figcaption>
      </figure>

      <table
        className={`${detailsStyles.nutrValTable} text text_type_main-small text_color_inactive`}
      >
        <thead>
          <tr>
            <td className={detailsStyles.nutrValCell}>Калории,ккал</td>
            <td>Белки, г</td>
            <td>Жиры, г</td>
            <td>Углеводы, г</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ingredient.calories}</td>
            <td>{ingredient.proteins}</td>
            <td>{ingredient.fat}</td>
            <td>{ingredient.carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape(ingredientType),
};
