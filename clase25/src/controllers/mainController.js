const controller = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.render('admin', { user: req.user });
    }
}

module.exports = controller;