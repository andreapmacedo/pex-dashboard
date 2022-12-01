import styles from './Sidebar.module.css';
import pexlogo from '../assets/logo.svg';
import active from '../assets/active.svg';
import { menuElements } from '../data';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src={pexlogo} alt="Logotipo Pex Construção" />
      {menuElements.map(({text, icon, focus}, index) => (
         
        <div key={index} className={styles.menuElement}>
          <img src={icon} alt={`icon ${text}`} />
          {!focus 
            ?
              <span>{text}</span>
            : 
              <div className={styles.focused}>
                <span>{text}</span>
                <img src={active} alt="" />
              </div>
          }
        </div>
      ))}
    </div>
  );
}