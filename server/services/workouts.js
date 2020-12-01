const db = require('../database');

const get = (res) => {
    db.all("SELECT rowid AS id, info FROM lorem", function(err, rows) {
        if (err) {
            res.status(400).json({error: err.message});
            return;
        }
        res.json({
            message: "success",
            data: rows
        });
    });
};

module.exports = get;
