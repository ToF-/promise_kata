/*

 problèmes à résoudre :
 - appeler le site sur l'url https://github.com/ToF-/promise_kata.git
    (forcément asynchrone)
 - automatiquement afficher une info chaque minute sur la console
    (fait appel à une fonction de delay)
 - écrire ce programme test par test (test first)

 problème plus simple :
 - effectuer une multiplication en asynchrone, par exemple : dans 3 secondes, et afficher ce résultat


 */

const repeated_multiplication = require("../src/repeatedMultiplication");
const delayed_multiplication = require("../src/delayedMultiplication");

describe("a delayed multiplication", () => {
    it("should produce a result after 1 seconds", (done_callback) => {
        const zeroTime = new Date().getTime()
        delayed_multiplication(4,5, (result) => {
            try{
                expect(result).toEqual(20);

                const doneTime = new Date().getTime()
                expect(doneTime - zeroTime).toBeGreaterThan(999)
                done_callback();
            }
            catch(error) {
                done_callback(error)
            }
        })
    })
})

describe("a repeated multiplication", () => {
    // ce test est contradictoire et à réparer
    it("should produce a result every 1 seconds", (done_callback) => {
        let zeroTime = new Date().getTime()
        const id = repeated_multiplication(4, 5, (result) => {
            let doneTime = new Date().getTime()
            console.log(doneTime)
            expect(doneTime - zeroTime).toBeGreaterThan(990)
            expect(doneTime - zeroTime).toBeLessThan(1110)
            zeroTime = new Date().getTime()
        })
        setTimeout(() => {
            clearInterval(id);
            done_callback();
            },3500);
    })
})

