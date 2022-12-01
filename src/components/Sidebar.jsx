import styles from './Sidebar.module.css';
import pexlogo from '../assets/logo.svg';
import { menuElements } from '../data';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={pexlogo} alt="Logotipo Pex Construção" />
      {menuElements.map(({text, icon}, index) => (
        <div key={index} className={styles.menuElement}>
          <img src={icon} alt={`icon ${text}`} />
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}