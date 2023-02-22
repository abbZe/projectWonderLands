import s from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" width='100' height='100' alt='logo'/>
      <h1 className={s.title}>My Site</h1>
      <div className={s.avatar}></div>
    </header>
  );
};

export default MainHeader;