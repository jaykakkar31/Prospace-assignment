export const numberValidator = (_, value) => {
    if (parseFloat(value) < 0)
        return Promise.reject("Please enter a valid revenue");
    const isNumber = !isNaN(parseFloat(value)) && isFinite(value);
    if (!isNumber) {
        return Promise.reject("Please enter a valid revenue");
    }
    return Promise.resolve();
};
