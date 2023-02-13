import styles from "./layout.module.scss";
import {Link, Outlet} from "react-router-dom";
import {useState} from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import MapModal from "../map-modal/map-modal";

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

/* eslint-disable-next-line */
export interface LayoutProps {
}

export function Layout(props: LayoutProps) {
    const [open, setOpen] = useState(false);
    const [count, setCounter] = useState(0);
    const handleOpen = () => {
        setOpen(true);
        setCounter(count+1);
    };
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <MapModal open={open} count={count} handleClose={handleClose}></MapModal>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/airports">Airports</Link>
                    </li>
                    <li>
                        <Link to="/stadiums">Stadiums</Link>
                    </li>
                    <li>
                        <Link to="/sua">Special Use Airspace</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Layout;
