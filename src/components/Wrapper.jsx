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
        {data.smallBalance.map(({ title, amount, percent, value, extraData, format }, index) => (
          <SmallBalanceCard
            key={index} 
            title={title}
            amount={amount}
            percent={percent} 
            value={value} 
            extraData={extraData}
            format={format}
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        {data.midBalance.map(({ title, amount, value, extraData, percent }, index) => (
          <MidBalanceCard
            key={index} 
            title={title}
            amount={amount}
            value={value}
            extraData={extraData}
            percent={percent} 
          />
        ))}
      </div>
      <div className={styles.wrapperIn}>
        <TableCard
          title={'Planos'}
          sub={'123 planos ativos'}
          tableData={data.tableDataA}
          tableHeader={'PREÇO'}                        
          />
        <TableCard
          title={'Categorias'}
          sub={'4 categorias em uso'} 
          tableData={data.tableDataB}
          tableHeader={'PREÇO MÉDIO'}                        
        />
        <TableCard
          title={'Tipos de planos'}
          sub={'2 tipos em uso'} 
          tableData={data.tableDataC}
          tableHeader={'PREÇO MÉDIO'}                        
        />
      </div>
    </div>
  );
}