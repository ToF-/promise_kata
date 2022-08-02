
const fetchUrl = require("../src/fetchUrl.js");

// using fetch *without* await : pass a callback to fetch, the callback runs the expects

describe("fetchUrl", () => {
    it("should acquire data from the catfacts URL", (done_callback) => {
        fetchUrl("https://catfact.ninja/fact", (content,error) => {
            expect(content).not.toBeUndefined();
            expect(content.fact).not.toBeUndefined();
            done_callback(); // terminate the test process so that log can be displayed
        });
    });

    it("should log some message if url is not available", (done_callback) => {
        fetchUrl("http://foobar", (content,error) => {
            if(content !== null) {
                expect(content).not.toBeUndefined();
                expect(content.fact).not.toBeUndefined();
                console.log("hello not in catch");
                done_callback();
            }
            else {
                expect(error).not.toBeUndefined();
                done_callback();
            }
        });
    });
});
