import {useEffect, useState} from "react";
import {DataTypes} from "../types";
import {getSuaData} from "../data-service";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

/* eslint-disable-next-line */
export interface SuaPageProps {
}

export function SuaPage(props: SuaPageProps) {
    const [data, setData] = useState<DataTypes>({features: [], type: ""});

    useEffect(() => {
        getSuaData().then(
            (data: DataTypes) => {
                setData(data);
            }
        );
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Geo Type</TableCell>
                        <TableCell align="right">Coor.</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.features.map((row, index) => (
                        <TableRow
                            key={row.type + index}
                            sx={{"&:last-child td, &:last-child th": {border: 0}}}
                        >
                            <TableCell align="right">{row?.geometry.type}</TableCell>
                            <TableCell align="right">{row?.geometry.coordinates}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SuaPage;
