import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyles from './tabs.module.css'
import { TAB_NAME } from '../../services/actions/tab'

export default function Tabs({ currentTab, onTabClick }) {

  return (

    <div className={tabsStyles.container}>
      <Tab value={TAB_NAME.BUN} active={currentTab === TAB_NAME.BUN} onClick={onTabClick}>
        Булки
      </Tab>
      <Tab value={TAB_NAME.SAUCE} active={currentTab === TAB_NAME.SAUCE} onClick={onTabClick}>
        Соусы
      </Tab>
      <Tab value={TAB_NAME.STUFFING} active={currentTab === TAB_NAME.STUFFING} onClick={onTabClick}>
        Начинки
      </Tab>
    </div>
  );
}