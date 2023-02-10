import styles from './sua-page.module.scss';

/* eslint-disable-next-line */
export interface SuaPageProps {}

export function SuaPage(props: SuaPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SuaPage!</h1>
    </div>
  );
}

export default SuaPage;
