const validateUser = (req, res, next) => {

    if (req.headers.usuario == "Carmen" && req.headers.password == "carmen123") {
        next();
    } else {
        res.status(400).json({
            Error: 'Usuario o contraseña invalida'
        });
    }
}

module.exports = validateUser;