import styles from './airports-page.module.scss';

/* eslint-disable-next-line */
export interface AirportsPageProps {}

export function AirportsPage(props: AirportsPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AirportsPage!</h1>
    </div>
  );
}

export default AirportsPage;
