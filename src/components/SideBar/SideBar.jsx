import {NavLink} from "react-router-dom";
import s from './SideBar.module.css';

const selectedLink = () => {
  return (
    selected => selected.isActive ? s.active : undefined
);
}

const SideBar = () => {
  return (
  <aside className={s.sideBar}>
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/profile" className={selectedLink()}>Profile</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/dialogs" className={selectedLink()}>Dialogs</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/news" className={selectedLink()}>News</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/music" className={selectedLink()}>Music</NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/settings" className={selectedLink()}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  </aside>
)
  ;
}

export default SideBar;