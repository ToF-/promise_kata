const delayed_multiplication = (x, y, callback) => {
    const result = x * y;
    setTimeout(() => {
        callback(result);
    }, 3000)
};

module.exports = delayed_multiplication;