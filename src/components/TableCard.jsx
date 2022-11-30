import styles from './TableCard.module.css';
import { GenericTable } from './GenericTable';

export function TableCard({ title, sub, tableData, tableHeader }) {

  return (
    <div className={styles.tableCard}>
      <h2>{title}</h2>
      <h4>{sub}</h4>
      <GenericTable tableData = { tableData } tableHeader = {tableHeader} />
    </div>
  );
}