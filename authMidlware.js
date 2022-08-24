const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") next()
    
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) return res.status(400).json({message: 'Token is not authorized'})

        const decodedData = jwt.verify(token, "RANDOM_SECRET_WORD")
        console.log(decodedData)
        req.user = decodedData
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: 'Error'})
    }
}