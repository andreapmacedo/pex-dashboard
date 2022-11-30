import styles from './Sidebar.module.css';
import { MidBalanceCard } from './MidBalanceCard';
import { BigBalanceCard } from './BigBalanceCard';
import { SmallBalanceCard } from './SmallBalanceCard';
import { bigBalance } from '../data';

export function Wrapper() {



  return (
    <sidebar className={styles.sidebar}>
      {bigBalance.map(({ title, amount, avarage }, index) => (
        <BigBalanceCard
          key={index} 
          title={title}
          amount={amount}
          avarage={avarage} 
        />
      ))}
      {bigBalance.map(({ title, amount, avarage }, index) => (
        <BigBalanceCard
          key={index} 
          title={title}
          amount={amount}
          avarage={avarage} 
        />
      ))}
      {bigBalance.map(({ title, amount, avarage }, index) => (
        <BigBalanceCard
          key={index} 
          title={title}
          amount={amount}
          avarage={avarage} 
        />
      ))}
      {bigBalance.map(({ title, amount, avarage }, index) => (
        <BigBalanceCard
          key={index} 
          title={title}
          amount={amount}
          avarage={avarage} 
        />
      ))}
    </sidebar>
  );
}