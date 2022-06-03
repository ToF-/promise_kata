
2022-06-01
1) write a test on a function performing a delayed calculation

- `setTimeout` 
- `Promise` 
- mistake 1: give setTimeout an evaluation instead of a callback
- `then` the then part takes the test in charge
- mistake 2: if you don't call the `done` function then the test execution stops until the jest standard 5 seconds delay is past
- when the expect fails, the `done` function is not called, so the test execution stops until the 5 seconds delay is past
- surround the test into a `try` `catch` and catch the case where the expect fails
- use `done(error)` inside the catch part
- mistake 3: the current implementation is done with a Promise. It should be done only with a callback
