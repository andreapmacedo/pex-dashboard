import styles from './Wrapper.module.css';
import { MidBalanceCard } from './MidBalanceCard';
import { BigBalanceCard } from './BigBalanceCard';
import { SmallBalanceCard } from './SmallBalanceCard';
import { TableCard } from './TableCard';
import * as data from '../data';

export function Wrapper() {
  return (
    <div className={styles.wrapperOut}>
      <div className={styles.wrapperIn}>
        {data.bigBalance.map(({ title, amount, avarage, cardColor }, index) => (
          <BigBalanceCard
            key={index} 
            title={title}
            amount={amount}
            avarage={avarage} 
            cardColor={cardColor} 
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        {data.smallBalance.map(({ title, amount, percent }, index) => (
          <SmallBalanceCard
            key={index} 
            title={title}
            amount={amount}
            percent={percent} 
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        {data.midBalance.map(({ title, amount, percent }, index) => (
          <MidBalanceCard
            key={index} 
            title={title}
            amount={amount}
            percent={percent} 
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        {data.tableDataA.map(({ club, customers, value }, index) => (
          <TableCard
            key={index} 
            club={club}
            customers={customers}
            value={value} 
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        {data.tableDataB.map(({ club, customers, value }, index) => (
          <TableCard
            key={index} 
            club={club}
            customers={customers}
            value={value} 
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        {data.tableDataC.map(({ club, customers, value }, index) => (
          <TableCard
            key={index} 
            club={club}
            customers={customers}
            value={value} 
          />
        ))}
      </div>
    </div>
  );
}