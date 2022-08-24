import orderStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderDetails() {
  return (
    <div className={orderStyles.container}>
      <p className={`${orderStyles.number} text text_type_digits-large`}>
        034536
      </p>
      <p className={`${orderStyles.caption} text text_type_main-medium`}>
        идентификатор заказа
      </p>
      <div className={orderStyles.done}>
        <CheckMarkIcon type="primary" />
      </div>
      <div className={orderStyles.confirmationContainer}>
        <p className={`${orderStyles.paragraph} text text_type_main-default`}>
          Ваш заказ начали готовить
        </p>
        <p
          className={`${orderStyles.paragraph} text text_type_main-default text_color_inactive`}
        >
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
}
