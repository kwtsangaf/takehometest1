import styles from "./airports-page.module.scss";
import {useEffect, useState} from "react";
import {getAirportsData} from "../data-service";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DataTypes} from "../types";
import MapModal from "../map-modal/map-modal";

/* eslint-disable-next-line */
export interface AirportsPageProps {
}

export function AirportsPage(props: AirportsPageProps) {
    const [open, setOpen] = useState(false);
    const [geojson, setGeojson] = useState(null);
    const [origin, setOrigin] = useState([0, 0]);
    const openMapModal = (row: any) => {
        setOpen(true);
        setGeojson(row);
        setOrigin(row.geometry.coordinates);
    };
    const handleClose = () => setOpen(false);

    const [data, setData] = useState<DataTypes>({features: [], type: ""});

    useEffect(() => {
        getAirportsData().then(
            (data: DataTypes) => {
                setData(data);
            }
        );
    }, []);
    return (
        <>
            <MapModal open={open} geojson={geojson} locationType={"airport"} origin={origin}
                      handleClose={handleClose}></MapModal>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Geo Type</TableCell>
                            <TableCell align="right">Coor.</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.features.slice(0, 10).map((row, index) => (
                            <TableRow
                                key={row.type + index}
                                sx={{"&:last-child td, &:last-child th": {border: 0}}}
                            >
                                <TableCell align="right">{row?.geometry.type}</TableCell>
                                <TableCell align="right">{row?.geometry.coordinates}</TableCell>
                                <TableCell align="right"><Button variant="outlined"
                                                                 onClick={() => openMapModal(row)}>Details</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}

export default AirportsPage;
