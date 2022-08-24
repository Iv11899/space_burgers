import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppHeaderStyle from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className={AppHeaderStyle.main}>
      <ul className={AppHeaderStyle.navbar}>
        <ul className={AppHeaderStyle.navbarItemContainer}>
          <li className={`${AppHeaderStyle.navbarItem} text text_type_main-default`}>
            <BurgerIcon type="primary" />
            <a className={AppHeaderStyle.link} href="index.html">
              Конструктор
            </a>
          </li>

          <li className={`${AppHeaderStyle.navbarItem} text text_type_main-default text_color_inactive`}>
            <ListIcon type="secondary" />
            <a className={AppHeaderStyle.link} href="index.html">
              Лента заказов
            </a>
          </li>
        </ul>

        <li className={`${AppHeaderStyle.navbarItem} ${AppHeaderStyle.navbarItem_type_logo}`}>
          <a className={AppHeaderStyle.link} href="index.html">
            <Logo />
          </a>
        </li>

        <li className={`${AppHeaderStyle.navbarItem} text text_type_main-default text_color_inactive`}>
          <ProfileIcon type="secondary" />
          <a className={AppHeaderStyle.link} href="index.html">
            Личный кабинет
          </a>
        </li>
      </ul>
    </header>
  );
}
