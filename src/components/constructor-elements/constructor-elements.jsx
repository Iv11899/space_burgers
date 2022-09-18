import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorElementsStyles from "./constructor-elements.module.css";
import { useDispatch } from "react-redux";
import { REMOVE_CONSTRUCTOR_ELEMENT } from "../../services/actions/drop-container";
import { useMotionValue, Reorder } from "framer-motion";

const ConstructorElements = React.memo(({ ingredient, type, isLocked }) => {
  const dispatch = useDispatch();
  const y = useMotionValue(0);

  const handleClose = () => {
    dispatch({ type: REMOVE_CONSTRUCTOR_ELEMENT, id: ingredient._id });
  };

  if (type === "top") {
    return (
      <div className={ConstructorElementsStyles.elementWrapper}>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={`${ingredient.name} (верх)`}
          price={ingredient.price}
          thumbnail={ingredient.image}
        />
      </div>
    );
  } else if (type === "bottom") {
    return (
      <div className={ConstructorElementsStyles.elementWrapper}>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={`${ingredient.name} (низ)`}
          price={ingredient.price}
          thumbnail={ingredient.image}
        />
      </div>
    );
  } else if (type === "stuffing") {
    return (
      <Reorder.Item
        value={ingredient}
        id={ingredient}
        style={{ y }}
      >
        <div className={ConstructorElementsStyles.container}>
          <DragIcon />
          <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
            isLocked={isLocked}
            handleClose={handleClose}
          />
        </div>
      </Reorder.Item>
    );
  }
});

export default ConstructorElements;
