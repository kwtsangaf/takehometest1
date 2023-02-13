import styles from "./map-modal.module.scss";
import {Box, Button, Modal, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import Map, {Layer, Source} from "react-map-gl";

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



// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const token = import.meta.env.VITE_MAPBOX_TOKEN;

const geojson: any = {
    type: "FeatureCollection",
    features: [
        {type: "Feature", geometry: {type: "Point", coordinates: [-122.4, 37.8]}},
        {type: "Feature", geometry: {type: "Point", coordinates: [-122.41, 37.8]}},
        {type: "Feature", geometry: {type: "Point", coordinates: [-122.4, 37.805]}}
    ]
};

const geojson2: any = {
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [-67.13734351262877, 45.137451890638886],
                [-66.96466, 44.8097],
                [-68.03252, 44.3252],
                [-69.06, 43.98],
                [-70.11617, 43.68405],
                [-70.64573401557249, 43.090083319667144],
                [-70.75102474636725, 43.08003225358635],
                [-70.79761105007827, 43.21973948828747],
                [-70.98176001655037, 43.36789581966826],
                [-70.94416541205806, 43.46633942318431],
                [-71.08482, 45.3052400000002],
                [-70.6600225491012, 45.46022288673396],
                [-70.30495378282376, 45.914794623389355],
                [-70.00014034695016, 46.69317088478567],
                [-69.23708614772835, 47.44777598732787],
                [-68.90478084987546, 47.184794623394396],
                [-68.23430497910454, 47.35462921812177],
                [-67.79035274928509, 47.066248887716995],
                [-67.79141211614706, 45.702585354182816],
                [-67.13734351262877, 45.137451890638886]
            ]
        ]
    }
};

const parkLayer: any = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
        'fill-color': '#4E3FC8'
    }
};

const layerStyle: any = {
    id: "point",
    type: "circle",
    paint: {
        "circle-radius": 10,
        "circle-color": "#49bf00"
    }
};

const layerStyle2: any = {
    "id": "water",
    "type": "fill",
    "paint": {
        "fill-color": "#00ffff"
    }
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
                <Map
                    initialViewState={{
                        longitude: -122.4,
                        latitude: 37.8,
                        zoom: 4
                    }}
                    style={{width: 600, height: 400}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={token}
                >
                    <Source id="my-data" type="geojson" data={geojson}>
                        <Layer {...layerStyle} />
                    </Source>
                </Map>
            </Modal>
        </div>
    );
}

export default MapModal;
