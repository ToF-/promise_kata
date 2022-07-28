
const fetchUrl = require("../src/fetchUrl.js");

// using fetch *without* await : pass a callback to fetch, the callback runs the expects

describe("fetchUrl", () => {
    it("should acquire data from the catfacts URL", (done_callback) => {
        fetchUrl("https://catfact.ninja/fact", content => {
            expect(content).not.toBeUndefined();
            expect(content.fact).not.toBeUndefined();
            console.log(content);
            done_callback(); // terminate the test process so that log can be displayed
        });
    });
});
