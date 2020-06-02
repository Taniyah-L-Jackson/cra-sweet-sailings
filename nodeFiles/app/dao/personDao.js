const pool = require('../config/dbconfig');

class PersonDao {
    
    constructor() {
        this.pool = pool;
    }

    //person info
    newPersonInfo(req, res) {
        if(!req.body.st_address || !req.body.city_town || !req.body.province || !req.body.zip) {

            res.json({
                'error': true,
                'message': "Main data incomplete"
            })

        }

        let fields = Object.keys(req.body);
        let values = Object.values(req.body);

        fields[fields.indexOf('condition')] = `condition`;
        let sql = `INSERT INTO person_info (${fields.join(',')}) VALUES (${Array(values.length).fill('?').join(',')})`;

        this.pool.query(sql, values, (err, rows) => {
            if (err) {
                res.json({
                    error: true,
                    message: err
                });
            };
            res.json(rows);
            
        });
    }
}

module.exports = PersonDao

//select columns from the main table
//from main_table (variable name)
//join starting with the side tables
//on main_table (column) = side_table(id) {numbers used for main_table}
//where side_table (column) = (certain type name)