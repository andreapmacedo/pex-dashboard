import styles from './Sidebar.module.css';

export function MidBalanceCard({ title, amount, percent }) {

  return (
    <sidebar className={styles.sidebar}>
      <h1>{title}</h1>
      <h1>{amount}</h1>
      <h1>{percent}</h1>
    </sidebar>
  );
}