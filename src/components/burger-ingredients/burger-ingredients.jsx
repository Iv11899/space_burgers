import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";
import Tabs from "../tabs/tabs";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import IngredientsFilter from "../ingredients-filter/ingredients-filter.jsx";
import { useSelector } from "react-redux";
import {
  RESET_MODAL_INGREDIENT,
  SET_MODAL_INGREDIENT,
} from "../../services/actions/modal";
import { getIngredients } from "../../services/actions/api-data";
import { TAB_NAME, TAB_SWITCH } from "../../services/actions/tab";

export default function BurgerIngredients() {
  const currentModalIngredient = useSelector(
    (state) => state.modalReducer.currentModalIngredient
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const [isVisible, setVisability] = useState(false);

  function handleOpenModal(ingredient) {
    dispatch({ type: SET_MODAL_INGREDIENT, payload: ingredient });
    setVisability(true);
  }

  function handleCloseModal() {
    setVisability(false);
    dispatch({ type: RESET_MODAL_INGREDIENT });
  }

  const modalIngredientDetails = (
    <Modal onClose={handleCloseModal} isOpened={isVisible}>
      <IngredientDetails ingredient={currentModalIngredient} />
    </Modal>
  );

  function getDistanceBetweenPoints(element, viewportCoords) {
    const coordsChild = element.getBoundingClientRect();
    return Math.abs(viewportCoords.top - coordsChild.top);
  }

  const currentTab = useSelector((state) => state.tabReducer.currentTab);
  const bunRef = useRef();
  const sauceRef = useRef();
  const stuffingRef = useRef();

  useEffect(() => {
    function changeTab() {
      const viewportCoords = document
        .getElementById("scroll")
        .getBoundingClientRect();
      getDistanceBetweenPoints(bunRef.current, viewportCoords) <
      getDistanceBetweenPoints(sauceRef.current, viewportCoords)
        ? dispatch({
            type: TAB_SWITCH,
            value: TAB_NAME.BUN,
          })
        : getDistanceBetweenPoints(sauceRef.current, viewportCoords) <
          getDistanceBetweenPoints(stuffingRef.current, viewportCoords)
        ? dispatch({
            type: TAB_SWITCH,
            value: TAB_NAME.SAUCE,
          })
        : dispatch({
            type: TAB_SWITCH,
            value: TAB_NAME.STUFFING,
          });
    }

    const scrollSection = document.getElementById("scroll");
    scrollSection.addEventListener("scroll", changeTab);
    return () => scrollSection.removeEventListener("scroll", changeTab);
  }, [dispatch]);

  const onTabClick = (evt) => {
    dispatch({
      type: TAB_SWITCH,
      value: evt,
    });
    const paragraph = document.getElementById(evt);
    paragraph.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={BurgerIngredientsStyles.main}>
      <h1
        className={`${BurgerIngredientsStyles.title} text text_type_main-large`}
      >
        Соберите бургер
      </h1>
      <Tabs currentTab={currentTab} onTabClick={onTabClick} />
      <div
        className={` ${BurgerIngredientsStyles.ingredientsContainer} custom-scroll`}
        id="scroll"
      >
        <h2
          className={`${BurgerIngredientsStyles.ingredientSectionName} text text_type_main-medium`}
          id={TAB_NAME.BUN}
          ref={bunRef}
        >
          Булки
        </h2>
        <ul className={BurgerIngredientsStyles.cardsContainer}>
          <IngredientsFilter type="bun" openModal={handleOpenModal} />
        </ul>

        <h2
          className={`${BurgerIngredientsStyles.ingredientSectionName} text text_type_main-medium`}
          id={TAB_NAME.SAUCE}
          ref={sauceRef}
        >
          Соусы
        </h2>
        <ul className={BurgerIngredientsStyles.cardsContainer}>
          <IngredientsFilter type={"sauce"} openModal={handleOpenModal} />
        </ul>

        <h2
          ref={stuffingRef}
          className={`${BurgerIngredientsStyles.ingredientSectionName} text text_type_main-medium`}
          id={TAB_NAME.STUFFING}
        >
          Начинки
        </h2>
        <ul className={BurgerIngredientsStyles.cardsContainer}>
          <IngredientsFilter type={"main"} openModal={handleOpenModal} />
        </ul>
        {isVisible && modalIngredientDetails}
      </div>
    </section>
  );
}
