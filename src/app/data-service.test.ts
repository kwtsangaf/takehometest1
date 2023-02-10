import {getAirportsData, getStadiumsData, getSuaData} from "./data-service";
import {expect} from "vitest";

describe("data-service", function () {
    it("should get airports data", async function () {
        const data = await getAirportsData();
        expect(data).toHaveProperty("features");
        expect(data).toHaveProperty("type");
    }, 10000);

    it("should get stadium data", async function () {
        const data = await getStadiumsData();
        expect(data).toHaveProperty("features");
        expect(data).toHaveProperty("type");
    }, 10000);

    it("should get sua data", async function () {
        const data = await getSuaData();
        expect(data).toHaveProperty("features");
        expect(data).toHaveProperty("type");
    }, 10000);
});
