
const fetchUrl = require("../src/fetchUrl.js");

describe("fetchUrl", () => {
    it("should acquire data from the catfacts URL", () => {
        const result = fetchUrl("https://catfact.ninja/fact");
        expect(result).not.toBeUndefined();
        expect(result.fact).not.toBeUndefined();
    })

    it("should acquire at least two different facts when called several times", () => {
        const result1 = fetchUrl("https://catfact.ninja/fact");
        const result2 = fetchUrl("https://catfact.ninja/fact");
        const result3 = fetchUrl("https://catfact.ninja/fact");
        expect(result1.fact !== result2.fact || result1.fact !== result3.fact).toBe(true);
    })
});
