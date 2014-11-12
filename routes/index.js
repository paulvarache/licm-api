
function route (router) {
    var TwatDB = require('../lib/twatdb');
    var db = new TwatDB();

    router.get('/api', function (req, res) {
        db.getAll(function (elements) {
            res.json({
                success: true,
                elements: elements
            });
        });
    });

    router.get('/api/:id', function(req, res) {
        if (req.params.id) {
            db.get(req.params.id, function (element) {
                res.json({
                    success: true,
                    element: element
                });
            });
        } else {
            res.send(300);
        }
    });

    router.put('/api', function (req, res) {
        if (req.body.element) {
            db.add(req.body.element, function () {
                res.json({
                    success: true
                });
            });
        } else {
            res.send(300);
        }
    });

    router.post('/api/:id', function (req, res) {
        if (req.body.element && req.params.id) {
            db.update(req.params.id, req.body.element, function () {
                res.json({
                    success: true
                });
            });
        } else {
            res.send(300);
        }
    });

    router.del('/api/:id', function (req, res) {
        if (req.params.id) {
            db.remove(req.params.id, function () {
                res.json({
                    success: true
                });
            });
        } else {
            res.send(300);
        }
    });
}

module.exports = route;
