import styles from './GenericTable.module.css';
import { FormatPtBr } from '../utils';

export function GenericTable({ tableData }) {

  function geRows() {
    return (
      tableData.map(({club, customers, value}, index) => (
        <tr key={ index } className={ index % 2 === 0 ? 'Even' : 'Odd' }>
          <td>
            {club}
          </td>
          <td>
            {`${customers} clientes`}
          </td>
          <td>
            {`R$ ${FormatPtBr(value)}`}
          </td>
        </tr>
      ))
    );
  }

  return (
    <div className={styles.genericTable}>
      <table>
        <thead>
          <tr>
            <th>CLUBE</th>
            <th>CLIENTES</th>
            <th>PREÇO</th>
          </tr>
        </thead>
        {/* <hr /> */}
        <tbody>
          { tableData && (
            geRows()
          )}
        </tbody>
      </table>
    </div>
  );
}