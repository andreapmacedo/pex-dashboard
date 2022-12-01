import styles from './FilterMenu.module.css';
export function FilterMenu() {

  return (
    <div className={styles.filterMenu}>
      <h4>Filtrar por data</h4>
      <input
        name='startDate'
        type='text'
        placeholder='Data inicial'
      >
      </input>
      <input
        name='endDate'
        type='text'
        placeholder='Data final'
      />
    </div>
  );
}