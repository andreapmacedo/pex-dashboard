import dollar_sign from '../assets/dollar_sign.svg';
import styles from './BigBalanceCard.module.css';
import { FormatPtBr } from '../utils';

export function BigBalanceCard({ title, amount, avarage, cardColor }) {
  
  return (
    <div 
      className={styles.bigBalanceCard}
      style={{backgroundColor: cardColor}}
    >
      <img src={dollar_sign} alt={'icon dollar'} />
      <h1>{`R$ ${FormatPtBr(amount)}`}</h1>
      <h4>{title}</h4>
      <hr></hr>
      <h3>{`R$ ${FormatPtBr(avarage)}`}</h3>
      <p>Média por cliente</p>
    </div>
  );
}