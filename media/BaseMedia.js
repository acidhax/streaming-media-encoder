var uuid = require('node-uuid');

// BaseMedia is a generic wrapper for file, url, magnet, torrent, stream

function BaseMedia() {
	this.id = uuid.v4();
	this.isAnalyzed = false;
	this.profile = null;
	this.filesize = null;
	this.filename = null; // 'RIPmatbee.mp4'
}

BaseMedia.prototype.getSize = function() {
	return this.filesize;
};

BaseMedia.prototype.setSize = function(size) {
	this.filesize = size;
	return this;
};

BaseMedia.prototype.setFileName = function(name) {
	this.filename = name;
	return this;
};

BaseMedia.prototype.getFileName = function() {
	return this.name;
};

BaseMedia.prototype.getMediaProfile = function() {
	return this.profile;
};

BaseMedia.prototype.setMediaProfile = function(profile) {
	this.profile = profile;
	this.isAnalyzed = true;
	return this;
};



module.exports = BaseMedia;