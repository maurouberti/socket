module.exports = function (app) {
    var model = app.model.user;
    var service = require('../service/crud')(model);
    return {
        index: function (req, res) {
            service.list()
                .then(result => res.render('users/index', { data: result.data }))
                .catch(err => res.json(err));
        },
        add: function (req, res) {
            if (req.method == 'POST') {
                service.insert(req.body)
                    .then(() => res.redirect('/users'))
                    .catch(err => res.json(err));
            } else {
                return res.render('users/add');
            }
        },
        view: function (req, res) {
            service.get(req.params.id)
                .then((result) => {
                    return res.render('users/view', { data: result.data });
                })
                .catch(err => res.send(404, 'Página não encontrada.'));
        },
        remove: function (req, res) {
            service.delete(req.params.id)
                .then(() => {
                    return res.redirect('/users');
                })
                .catch(err => res.json(err));
        }
    }
}