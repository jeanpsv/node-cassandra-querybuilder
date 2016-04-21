/**
 * UUID constructor
 * @param {string} uuid_string uuid text format
 */
function UUID(uuid_string) {
	this._uuid = uuid_string;
};


/**
 * get/set uuid string
 * @param  {string} uuid_string uuid text format
 * @return {string}             uuid text
 */
UUID.prototype.uuid = function(uuid_string) {
	if (uuid_string) {
		this._uuid = uuid_string;
		return;
	} else {
		return this._uuid;
	}
};

/**
 * to string
 * @return {string} string that represents the instance
 */
UUID.prototype.toString = function() {
	return this._uuid;
};


/*----------  Module exports  ----------*/
module.exports = UUID;
