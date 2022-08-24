import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import BunElementsStyles from "./bun-elements.module.css";

export default function BunElements({ children }) {
  return (
    <div className={BunElementsStyles.dragContainer}>
      <div className={BunElementsStyles.elementWrapper}>
        <ConstructorElement
          className={BunElementsStyles.dragContainer}
          type="top"
          isLocked={true}
          text="Краторная булка N-200i(верх)"
          price={1255}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </div>
      {children}
      <div className={BunElementsStyles.elementWrapper}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i(низ)"
          price={1255}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </div>
    </div>
  );
}

BunElements.propTypes = {
  children: PropTypes.element.isRequired,
};
