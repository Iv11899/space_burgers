import detailsStyles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

export default function IngredientDetails() {
  
  const currentModalIngredient = useSelector(
    (state) => state.modalReducer.currentModalIngredient
  );

  return (
    <div className={detailsStyles.main}>
      <h2 className={`${detailsStyles.title} text text_type_main-large`}>
        Детали ингредиента
      </h2>
      <figure className={detailsStyles.imgContainer}>
        <img
          className={detailsStyles.img}
          src={currentModalIngredient.image_large}
          alt={currentModalIngredient.name}
        />
        <figcaption
          className={`${detailsStyles.caption} text text_type_main-medium`}
        >
          {currentModalIngredient.name}
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
            <td>{currentModalIngredient.calories}</td>
            <td>{currentModalIngredient.proteins}</td>
            <td>{currentModalIngredient.fat}</td>
            <td>{currentModalIngredient.carbohydrates}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
