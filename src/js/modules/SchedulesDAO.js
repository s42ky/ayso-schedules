angular.module('aysoApp').factory("SchedulesDAO", function(SchedulesDAO_IDB) {
    "use strict";
    return SchedulesDAO_IDB;
});

/**
 * Interface for classes that provide schedules info
 *
 * Provided as factory so can switch dependency at a single point
 * @ngdoc factory
 * @name SchedulesDAO
 * @interface SchedulesDAO
 */

/**
 * @function SchedulesDAO#findByWeek
 * @param {number} weekNum - week in season
 * @returns {Promise}. Success function has 1 parameter of type {Array.<Game>}
 */

/**
 * @function SchedulesDAO#findGames
 * @desc General search function
 * @param {String} region - region number
 * @param {String} divis - division (age) in form U10
 * @param {String} gender - One of <ul>
 *     <li>Boys</li>
 *     <li>Coed</li>
 *     <li>Girls</li>
 * </ul>
 * @returns {Promise}. Success function has 1 parameter of type {Array.<Game>}
 */

/**
 * @function SchedulesDAO#findByTeam
 * @param {String} team - Unique team code
 * @returns {Promise}. Success function has 1 parameter of type {Array.<Game>}
 */

/**
 * @function SchedulesDAO#findByDivWeek
 * @todo See where used
 * @param {String} team - unique ID for team
 * @param {number} week - week number in season
 * @returns {Promise}. Success function has 1 paramet

 /**
 * @function SchedulesDAO#findByFavorites
 * @desc List all games from teams stored in favorites
 * @returns {Promise}. Success function has 1 parameter of type {Array.<Game>}
 */

/**
 * @function SchedulesDAO#getCoachInfo
 * @desc Get coach information for a specific team
 * @param {String} team - unique ID for team
 * @return {Promise}. Success function has 1 parameter of type {Team}
 */
/**
 * @function SchedulesDAO#getGameDetail
 * @desc Get details for specific game
 * @param {String} gameID - unique game ID
 * @return {Promise}. Success function has 1 parameter of type {GameDetail}
 */

/**
 * @function SchedulesDAO#refreshCaches
 * @desc Updates the weekCache stores from what is in the database
 * @todo Return promise?
 */

/**
 * @function SchedulesDAO#putGames
 * @desc Add games to data store
 * @param {Array.<GameDataModel>} gamesList. Needs all optional properties
 * @param {boolean} resetTable - If true, removes all other games
 * @returns {Promise} with no params on success
 */

/**
 * @function SchedulesDAO#putCoaches
 * @desc Add coaches / team info to data store
 * @param {Array.<CoachDataModel>} coachesList - Rows to add
 * @param {boolean} resetTable - If true, removes all other rows
 * @returns {Promise} with no params on success
 */
