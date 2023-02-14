import styles from "./map-modal.module.scss";
import {IconButton, Modal} from "@mui/material";
import {useEffect, useState} from "react";
import Map, {Layer, Source} from "react-map-gl";
import CloseIcon from "@mui/icons-material/Close";

export type LocationType = "airport" | "stadium" | "sua";

/* eslint-disable-next-line */
export interface MapModalProps {
    open: boolean;
    handleClose: any;
    geojson: any;
    locationType: LocationType;
    origin: number[];
}


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const token = import.meta.env.VITE_MAPBOX_TOKEN;

const layerStyles: any = {
    airport: {
        id: "point",
        type: "circle",
        paint: {
            "circle-radius": 10,
            "circle-color": "#0026bf"
        }
    },
    stadium: {
        id: "point",
        type: "circle",
        paint: {
            "circle-radius": 10,
            "circle-color": "#0dbf00"
        }
    },
    sua: {
        "id": "water",
        "type": "fill",
        "paint": {
            "fill-color": "#fff200"
        }
    }
};

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
                <div className={styles["map-container"]}>
                    <div className={styles["map-inner-container"]}>
                        <Map
                            initialViewState={{
                                longitude: (props.origin != null) ? props.origin[0] : 0,
                                latitude: (props.origin != null) ? props.origin[1] : 0,
                                zoom: 8
                            }}
                            style={{width: 600, height: 400}}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                            mapboxAccessToken={token}
                        >
                            <Source id="my-data" type="geojson" data={props.geojson}>
                                <Layer {...layerStyles[props.locationType]} />
                            </Source>
                        </Map>
                        <IconButton className={styles["cross-button"]} aria-label="delete" onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default MapModal;
