import  { Sidebar } from  './components/Sidebar' ;
import { Wrapper } from  './components/Wrapper' ;
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <Wrapper />
      </div>
    </>
  )
};
