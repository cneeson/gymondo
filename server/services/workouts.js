const moment = require('moment');
const db = require('../database');


const handleError = (res, err) => res.status(400).json({ error: err.message });
const surroundInQuotes = (val) => `'${val}'`;
const toSqlMonthStr = (month ) => moment().month(moment(month, 'MMM').month()).format('MM');

const createIndexQuery = (isCount, { size, page, categories, month }) => { 
    const whereParams = [categories, month].filter(Boolean).length;

    const query = `
        SELECT ${isCount ? 'COUNT(rowid) as count' : 'rowid as id, *'} 
        FROM workouts
        ${whereParams ? 'WHERE ' : ''} 
            ${categories ? `category in (${categories.map(surroundInQuotes)}) ` : ''}
            ${whereParams > 1 ? 'AND' : ''}
            ${month ? `strftime('%m',startDate) = '${toSqlMonthStr(month)}'` : ''}

        ${isCount ? '' : 'LIMIT (?) OFFSET (?)'}
    `;

    const params = [];

    if (!isCount) {
        params.push(size);
        params.push(page * size);
    }
    
    return [query, params];
}

const getIndex = (res, { page, size, categories, month }) => {
    const queryParams = {
        size,
        page, 
        categories, 
        month
    };

    db.all(...createIndexQuery(false, queryParams), (err, rows) => {
        if (err) {
            return handleError(res, err);
        }

        db.all(...createIndexQuery(true, queryParams), (countErr, [{ count }]) => {
            if (err) {
                return handleError(res, countErr);
            }

            res.json({
                message: 'success',
                data: rows,
                page,
                size,
                totalElements: count,
                totalPages: Math.ceil(count / size)
            });
        })
    });
};

const get = (res, id) => {
    db.all(`SELECT rowid as id, strftime('%m', startDate) as test, * FROM workouts where rowid=(?)`, [id], (err, rows) => {
        if (err) {
            return handleError(res, err);
        }
        res.json({
            message: 'success',
            data: rows.length > 0 ? rows[0] : null
        });
    });
};

module.exports = {
    getIndex,
    get
};
