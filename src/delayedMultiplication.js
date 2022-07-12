const delayed_multiplication = (x, y, callback) => {
    const result = x * y;
    setTimeout(() => {
        callback(result);
    }, 1000)
};

module.exports = delayed_multiplication;