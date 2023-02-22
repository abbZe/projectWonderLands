import s from './Data.module.css';

const Data = () => {
  return (
    <div className={s.text}>
      <h2 className={s.title}>DMITRII</h2>
      <ul className={s.list}>
        <li className={s.item}>Date of birth: 05.06.1996</li>
        <li className={s.item}>City: Kaliningrad</li>
        <li className={s.item}>Education: MFUA</li>
        <li className={s.item}>Web-site: abbzew.github.io</li>
      </ul>
    </div>
  );
}

export default Data;