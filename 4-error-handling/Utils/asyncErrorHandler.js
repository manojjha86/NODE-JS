module.exports = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => next(err));
    }
}