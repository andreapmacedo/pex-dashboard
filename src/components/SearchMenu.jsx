import styles from './SearchMenu.module.css';
import avatar from '../assets/avatar.svg';
import notifications_none from '../assets/notifications_none.svg';
import moon_solid from '../assets/moon_solid.svg';
import info_outline from '../assets/info_outline.svg';

export function SearchMenu() {
  return (
    <div className={styles.searchMenu}>
      <input
        name='search'
        type='text'
        placeholder='Buscar'
      />
      <img src={notifications_none} alt={'icon'} />
      <img src={moon_solid} alt={'icon'} />
      <img src={info_outline} alt={'icon'} />
      <img src={avatar} alt={'icon'} />
    </div>
  );
}