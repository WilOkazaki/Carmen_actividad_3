const mysqlConnection = require('../database/database');

class Almacen {

    getMostrar(table) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM ${table}`, (error, results) => {
                if (error) reject(error);
                resolve(results);
            });
        });
    }

    getBuscar(table, id) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`SELECT * FROM ${table} WHERE id = ?`, [id], (error, results) => {
                if (error) reject(error);
                resolve(results[0]);
            });
        });
    }


    postIngresar(table, newEquipo) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`INSERT INTO ${table} SET ? `, [newEquipo], (error, results) => {
                if (error) reject(error);
                resolve(results);
            });
        });
    }

    putActualizar(table, equipo, id) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`UPDATE ${table} SET Marca = '${equipo.Marca}', Especificaciones = '${equipo.Especificaciones}' WHERE id = ${id}`, (error, results) => {
                if (error) reject(error);
                resolve(results);
            });
        });
    }

    deleteEliminar(table, id) {
        return new Promise((resolve, reject) => {
            mysqlConnection.query(`DELETE FROM ${table} WHERE id = ?`, [id], (error, results) => {
                if (error) reject(error);
                resolve(results);
            });
        });
    }

}

module.exports = Almacen;