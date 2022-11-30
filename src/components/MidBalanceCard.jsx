import dollar_icon from '../assets/dollar_icon.svg';
import styles from './MidBalanceCard.module.css';

export function MidBalanceCard({ title, amount, percent, value, extraData }) {

  return (
    <div className={styles.midBalanceCard}>
      <img src={dollar_icon} alt={'icon dollar'} />
      <h2>{amount}</h2>
      {extraData && <p>{extraData}</p>}
      <h4>{title}</h4>
      <div className={styles.percentContainer}>
        <p className={styles.green}>{`+${percent}%`}</p>
        <p className={styles.green}>{`(+${value})`}</p>
      </div>
    </div>
  );
}