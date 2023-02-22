import s from './SideBar.module.css';

const SideBar = () => {
  return (
    <aside className={s.sideBar}>
      <nav>
        <ul className={s.navList}>
          <li className={s.navItem}><a href="/profile">Profile</a></li>
          <li className={s.navItem}><a href="/dialogs">Dialogs</a></li>
          <li className={s.navItem}><a href="/news">News</a></li>
          <li className={s.navItem}><a href="/music">Music</a></li>
          <li className={s.navItem}><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;