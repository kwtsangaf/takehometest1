import styles from './stadiums-page.module.scss';

/* eslint-disable-next-line */
export interface StadiumsPageProps {}

export function StadiumsPage(props: StadiumsPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StadiumsPage!</h1>
    </div>
  );
}

export default StadiumsPage;
