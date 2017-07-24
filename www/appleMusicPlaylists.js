var exec = require('cordova/exec');

/*exports.coolMethod = function(arg0, success, error) {
    exec(success, error, "appleMusicPlaylists", "coolMethod", [arg0]);
};*/

window.appleMusicPluginPlaying = (function(){})
window.appleMusicPluginSeeked = (function(){})
window.appleMusicPluginStopped = (function(){})
module.exports = {
    getCountryCode: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "getCountryCode", []);
    },
    getDuration: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "getDuration", []);
    },
    getPosition: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "getPosition", []);
    },
    getStatus: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "getStatus", []);
    },
    init: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "init", []);
    },
    getPlayLists: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "getPlayLists", []);
    },
    getSongs: function (playlistId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "getSongs", [playlistId]);
    },
    createPlayList: function (playlistName, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "createPlayList", [playlistName]);
    },
    onPlay: function(f) {
        window.appleMusicPluginPlaying = f
    },
    onSeek: function(f) {
        window.appleMusicPluginSeeked = f
    },
    onStop: function(f) {
        window.appleMusicPluginStopped = f
    },
    pause: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "pause", []);
    },
    playTrack: function (trackId, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "playTrack", [trackId]);
    },
    requestAuthorization: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "requestAuthorization", []);
    },
    resume: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "resume", []);
    },
    seek: function (seconds, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "seek", [seconds]);
    },
    stop: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "AppleMusicPlaylists", "stop", []);
    }
};
