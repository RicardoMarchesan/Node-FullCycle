const mysql = require('mysql')
const moniker = require('moniker');
const config = {
    host: 'db',
    user: 'root',
    password: 'passwd',
    database: 'nodedb'
};

const insertNew = () => {
    const newName = moniker.choose();
    const connection = mysql.createConnection(config)
    connection.query(`INSERT INTO people(name) values('${newName}')`)

    connection.end
}

const getAll = (callback) => {
    const connection = mysql.createConnection(config)

    connection.query(`SELECT name FROM people`, function (err, result, fields) {
        if (err) throw err

        const listOfNames = result.map((entry) => ({ name: entry.name }));

        return callback(listOfNames)
    });

    connection.end
}

exports.insertNew = insertNew;
exports.getAll = getAll;