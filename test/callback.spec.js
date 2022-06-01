const delayedSquare = (x =>  {
    return new Promise(resolve => setTimeout( () => { resolve(x*x) }, 2000))
})


describe('a delayed square function', () => {
    it('it should compare result after a 2 secs', (done) => {
        delayedSquare(42).then(result => {
            try{
                expect(result).toStrictEqual(1764)
                done()
            } catch(error) {
                done(error)
            }
        })
    })
})
