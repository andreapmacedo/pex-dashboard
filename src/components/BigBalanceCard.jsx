import dollar_sign from '../assets/dollar_sign.svg';
import styles from './BigBalanceCard.module.css';

export function BigBalanceCard({ title, amount, avarage, cardColor }) {
  
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 } );
  }

  return (
    <div 
      className={styles.bigBalanceCard}
      style={{backgroundColor: cardColor}}
    >
      <img src={dollar_sign} alt={'icon dollar'} />
      <h1>{`R$ ${formatarValor(amount)}`}</h1>
      <h4>{title}</h4>
      <hr nodashed></hr>
      <h3>{`R$ ${formatarValor(avarage)}`}</h3>
      <p>Média por cliente</p>
    </div>
  );
}