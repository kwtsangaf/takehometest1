import styles from "./airports-page.module.scss";
import {useEffect, useState} from "react";
import {getAirportsData} from "../data-service";

/* eslint-disable-next-line */
export interface AirportsPageProps {
}

export function AirportsPage(props: AirportsPageProps) {
    const [data, setData] = useState();

    useEffect(() => {
        getAirportsData().then(
            (data: any) => {
                setData(data);
            }
        );
    });
    return (
        <div className={styles["container"]}>
            <h1>Welcome to AirportsPage!</h1>
        </div>
    );
}

export default AirportsPage;
