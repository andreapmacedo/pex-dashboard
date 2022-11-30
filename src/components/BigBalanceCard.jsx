import styles from './Sidebar.module.css';

export function BigBalanceCard({ title, amount, avarage }) {

  return (
    <sidebar className={styles.sidebar}>
      <h1>{title}</h1>
      <h1>{amount}</h1>
      <h1>{avarage}</h1>
      <h1>Media por cliente</h1>
    </sidebar>
  );
}