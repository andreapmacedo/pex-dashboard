import  { Sidebar } from  './components/Sidebar' ;
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <h1>Hello Worldd</h1>
      </div>
    </>
  )
};
