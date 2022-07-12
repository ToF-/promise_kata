const repeated_multiplication = (x, y, callback) => {
    const result = x * y;
    return setInterval(() => {
        callback(result);
    }, 1000)
};

module.exports = repeated_multiplication;