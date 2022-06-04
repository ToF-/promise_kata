const catFact = require('../src/catFact')

describe('a cat fact function', () => {
    it('it should return a cat fact', (done) => {
        catFact(result => {
            expect(result).not.toBeUndefined()
            expect(result.fact).not.toBeUndefined()
            expect(result.length).toBeGreaterThan(0)
            done()
        })
    })
})
