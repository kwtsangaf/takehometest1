import styles from "./map-modal.module.scss";
import {Box, Button, Modal, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

/* eslint-disable-next-line */
export interface MapModalProps {
    open: boolean;
    handleClose: any;
    count: number;
}

export function MapModal(props: MapModalProps) {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        props.handleClose();
    };

    useEffect(() => {
        setOpen(props.open);
    }, [props]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    {props.count}
                </Box>
            </Modal>
        </div>
    );
}

export default MapModal;
