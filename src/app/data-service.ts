import axios from "axios";

export const getAirportsData = async () => {
    try {
        const response = await axios.get("https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/US_Airport/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getStadiumsData = async () => {
    try {
        const response = await axios.get("https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Stadiums/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getSuaData = async () => {
    try {
        const response = await axios.get("https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Special_Use_Airspace/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
