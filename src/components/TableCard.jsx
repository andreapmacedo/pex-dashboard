import styles from './Sidebar.module.css';

export function TableCard({ club, customers, value }) {

  return (
    <sidebar className={styles.sidebar}>
      <h1>{club}</h1>
      <h1>{customers}</h1>
      <h1>{value}</h1>
    </sidebar>
  );
}