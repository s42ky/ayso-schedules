/**
 * @ngdoc factory
 * @name SQLite
 * @desc Provides a SQLite database. See {@link SchedulesDAO_Sqlite} for use.
 * @requires $cordovaSQLite
 * @requires localStorageService
 * @deprecated cordova-sqlite-storage doesn't work on browser platform
 */

angular.module('aysoApp').factory('SQLite', function($cordovaSQLite, $q, localStorageService){
    "use strict";
    var dbUtil = {};
    /**
     * @todo move to config section
     * @type {{name: string, location: number}}
     */
    dbUtil.config = {
        name: "ayso-ks.db",
        location: 2
    };

    var ls = localStorageService;
    var db, resolve, reject;

    /**
     * Opens database and injects callbacks
     * @param {Function} _resolve_
     * @param {Function} _reject_
     */
    dbUtil.openDB = function(_resolve_, _reject_) {
        resolve = _resolve_;
        reject = _reject_;

        $cordovaSQLite.openDatabase(dbUtil.config, dbUtil.initConnection, dbUtil.error);
    };

    /**
     * Function on initial connection to make sure database has been setup.
     * If doesn't exist, will create tables and move for data download.
     *
     * @param {Object} _db_ - database returned from successful connection
     */
    dbUtil.initConnection = function(_db_) {
        db = _db_;
        if(ls.get('dbInit') !== 'A') {
            dbUtil.createDB();
        }

        resolve(db);
    };

    /**
     * Create tables
     */
    dbUtil.createDB = function() {
        db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS `games` (" +
                " `ID` int(11) PRIMARY KEY," +
                " `Field` text NOT NULL," +
                " `Week` int(11) NOT NULL DEFAULT '0'," +
                " `Jour` date NOT NULL DEFAULT '0000-00-00'," +
                " `Heur` time NOT NULL DEFAULT '00:00:00'," +
                " `Divis` text NOT NULL," +
                " `Away` text NOT NULL," +
                " `Home` text NOT NULL" +
                    //+ " `RefLead` text NOT NULL," +
                    //+ " `RefAsst1` text NOT NULL," +
                    //+ " `RefAsst2` text NOT NULL" +
                " ) ");

            tx.executeSql("CREATE TABLE IF NOT EXISTS `coaches` (" +
                "  `ID` int(11) PRIMARY KEY," +
                "  `Divis` text NOT NULL," +
                "  `TeamNo` text NOT NULL," +
                "  `Coach` text NOT NULL," +
                "  `Phone` text NOT NULL" +
                " ) "
            );
        }, dbUtil.error);
    };

    /**
     * Error message callback that rejects/fails a promise object
     * @param msg
     */
    dbUtil.error = function(msg) {
        reject(msg);
    };

    /**
     * Error-handling function that formats message based on type
     * @param {string|SQLError|{message: string}} msg
     */
    dbUtil.sqlError = function(msg) {
        var message = "";
        switch(typeof msg) {
            case "string": message = msg; break;
            case "SQLError": message = msg.message; break;
            case "object":
                if(typeof msg.message !== "undefined") {
                    message = msg.message;
                } else {
                    message = "No further details known.";
                }
                break;

            default:
                message = "Error sent object type: " + (typeof msg);
                break;
        }

        //Create error message and display
        console.error(message);
        //aysoUtil.errorMsg(message);
    };

    /**
     * @prop promise
     * @desc the promise object from opening the database
     * @type {Promise}
     */
    dbUtil.promise = $q(dbUtil.openDB);


    return dbUtil;
});
