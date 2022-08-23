import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from './tabs.module.css'

export default function Tabs() {
  const [current, setCurrent] = useState("bun");
  return (
    <div className={tabsStyles.container}>
      <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sause" active={current === "sause"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}