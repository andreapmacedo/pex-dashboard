import dollar_sign from '../assets/dollar_sign.svg';
import styles from './Sidebar.module.css';

export function BigBalanceCard({ title, amount, avarage, cardColor }) {

  return (
    <sidebar className={styles.sidebar}>
      <img src={dollar_sign} alt={'icon dollar'} />
      <h1>{cardColor}</h1>
      <h1>{amount}</h1>
      <h1>{title}</h1>
      <h1>{avarage}</h1>
      <h1>Media por cliente</h1>
    </sidebar>
  );
}