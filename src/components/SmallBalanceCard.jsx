import { FormatNoFraction, FormatPtBr } from '../utils';
import styles from './SmalllBalanceCard.module.css';

export function SmallBalanceCard({ title, amount, percent, extraData, format }) {

  return (
    <div className={styles.smallBalanceCard}>
      <h4>{title}</h4>
      <div className={styles.amountContainer}>
        {format === 'noFraction' && <h2>{FormatNoFraction(amount)}</h2> }
        {format === 'percent' && <h2>{`${FormatPtBr(amount)}%`}</h2> }
        {format === 'ptBr' && <h2>{`R$ ${FormatPtBr(amount)}`}</h2> }
        {extraData && <p>{extraData}</p>}
      </div>
      <p className={percent > 0 ? styles.green : styles.red } >{percent}</p>
    </div>
  );
}