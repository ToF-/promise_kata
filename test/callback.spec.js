const delayedSquare = (x =>  {
    return new Promise(resolve => setTimeout( () => { resolve(x*x) }, 5000))
})

describe('a delayed square function', () => {
    it('looks like it should compare result after a 5 secs yet compares result immediately', () => {
        delayedSquare(42).then(result => {
            expect(result).toStrictEqual(1764)
        })
    })
})
