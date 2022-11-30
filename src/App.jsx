import  { Sidebar } from  './components/Sidebar' ;
import { Wrapper } from  './components/Wrapper' ;
import { FilterMenu } from  './components/FilterMenu' ;
import { SearchMenu } from './components/SearchMenu';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Sidebar />
        <Wrapper />
        <h1>Hello Worldd</h1>
      </div>
    </>
  )
};
