const userMiddleware = (req, res, next) => {
    const users = [
        'ada',
        'greta',
        'vim',
        'tim'
    ];
    const user = req.query.user?.toLowerCase();
    if(users.includes(user)) {
        req.user = user;
        return next();
    }
    res.render('error', {
        message: 'No tienes los privilegios para ingresar',
        error: {
            status: 401
        },
        path: req.url
    });
}

module.exports = userMiddleware;