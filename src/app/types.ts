export interface Geometry {
    type: string;
    coordinates: number[] | number[][];
}

export interface Properties {
    OBJECTID: number;
    GLOBAL_ID: string;
    NAME: string;
    LATITUDE: string;
    LONGITUDE: string;
    CITY: string;
    STATE: string;
    STATUS_CODE: string;
    OPENING_ON?: any;
}

export interface Feature {
    type: string;
    id: number;
    geometry: Geometry;
    properties: Properties;
}

export interface DataTypes {
    type: string;
    features: Feature[];
}
