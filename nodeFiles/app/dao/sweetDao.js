const pool = require('../config/dbconfig');

class SweetDao {
    
    constructor() {
        this.pool = pool;
    }

    //all sweets
    findAllProducts (req, res) {
        let sql = 'SELECT * FROM product_list';
        this.pool.query(sql, (err, rows) => {
            if (err) {
                res.json({
                    error: true,
                    message: err
                });
            };
            res.json(rows);
        });
    };

    //specific genre of sweets (turn into a join)
    findByType (req, res, type) {
        let sql = `SELECT
        pl.id,
        pl.title,
        pl.image
        FROM product_list pl
        JOIN types t ON pl.typeId = t.id
        WHERE t.type = ?`;
        this.pool.query(sql, [type], (err, rows) => {
            
            if (err) {
                res.json({
                    error: true,
                    message: err
                });
            };
            res.json(rows);
        });
    };

    //one sweet
    findById (req, res, id) {
        let sql = 'SELECT * FROM product_list where id = ?';
        this.pool.query(sql, [id], (err, rows) => {
            if (err) {
                res.json({
                    error: true,
                    message: err
                });
            };
            res.json(rows); //display one item info
        });
    };
}

module.exports = SweetDao

//select columns from the main table
//from main_table (variable name)
//join starting with the side tables
//on main_table (column) = side_table(id) {numbers used for main_table}
//where side_table (column) = (certain type name)