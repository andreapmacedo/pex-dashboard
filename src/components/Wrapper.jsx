import styles from './Sidebar.module.css';
import { MidBalanceCard } from './MidBalanceCard';
import { BigBalanceCard } from './BigBalanceCard';
import { SmallBalanceCard } from './SmallBalanceCard';
import { TableCard } from './TableCard';
import * as data from '../data';

export function Wrapper() {
  return (
    <sidebar className={styles.sidebar}>
      {data.bigBalance.map(({ title, amount, avarage }, index) => (
        <BigBalanceCard
          key={index} 
          title={title}
          amount={amount}
          avarage={avarage} 
        />
      ))}
      {data.smallBalance.map(({ title, amount, percent }, index) => (
        <SmallBalanceCard
          key={index} 
          title={title}
          amount={amount}
          percent={percent} 
        />
      ))}
      {data.midBalance.map(({ title, amount, percent }, index) => (
        <MidBalanceCard
          key={index} 
          title={title}
          amount={amount}
          percent={percent} 
        />
      ))}
      {data.tableDataA.map(({ club, customers, value }, index) => (
        <TableCard
          key={index} 
          club={club}
          customers={customers}
          value={value} 
        />
      ))}
      {data.tableDataB.map(({ club, customers, value }, index) => (
        <TableCard
          key={index} 
          club={club}
          customers={customers}
          value={value} 
        />
      ))}
      {data.tableDataC.map(({ club, customers, value }, index) => (
        <TableCard
          key={index} 
          club={club}
          customers={customers}
          value={value} 
        />
      ))}
    </sidebar>
  );
}