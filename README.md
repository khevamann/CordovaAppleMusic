# CordovaAppleMusic
Access Apple Music from Cordova. I built this plugin to extend zwand19's plugin, and provides other features that the original plugin does not have. Please feel free to ask me any questions you may have.

## Installation

```bash
cordova plugin add cordova-plugin-applemusic
```

## Usage

#### Initialize the plugin 
```js
appleMusic.init(successFunction, failureFunction)  
```
Run `init()` to listen to native events.

#### Request Authorization
```js
appleMusic.requestAuthorization(function(isAuthorized){}, failureFunction)
```

#### Request Token

- The `DEVELOPER_TOKEN` is generated from [Create a MusicKit identifier and private key](https://help.apple.com/developer-account/#/devce5522674) | [中文版本](https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E5%95%8F%E9%A1%8C%E8%A7%A3%E7%AD%94%E9%9B%86/%E7%94%9F%E6%88%90-musickit-app-%E9%9C%80%E8%A6%81%E7%9A%84-developer-token-1e4195f517e0)

```javascript
appleMusic.requestAuthorization(function(isAuthorized){
  if (isAuthorized) {
    appleMusic.requestToken(`${DEVELOPER_TOKEN}`, function(token) {}, failureFunction)
  }
}, failureFunction)
```

#### Get Play Lists 

```js
  appleMusic.getPlayLists(function(playLists){}, failureFunction) 
```
Return: playLists is an array with each index containing id, name fields; 

#### Get Songs 
```js
appleMusic.getSongs(playListId, function(songList){}, failureFunction) 
```
Return: songList is an array with each index containing id, name fields; 

#### Create Play List with Songs
```js
appleMusic.createPlayList(playListName, trackIds, function(status){}, failureFunction) 
```
return: status success on play list creation. 

#### Add Single Song to Playlist 
```js
appleMusic.addSongstoPlayList(playListId, trackId,  function(status){}, failureFunction) 
```
Return: status success on song addition. 
Arguments: Playlist id, array of track ids 

### Player

#### Play a Track
```js
appleMusicPlugin.playTrack(trackId, successFunction, failureFunction)
```
Queues a track by id.

Example id: itunes.apple.com/fr/album/unstoppable/id984653860?i=<b>984653861</b>

The following methods will allow you to manipulate the currently playing track.

#### Get Current Track Duration
```js
appleMusicPlugin.getDuration(successFunction, failureFunction)
```
Returns the current track's duration (in seconds)

#### Get Current Track Position
```js
appleMusicPlugin.getPosition(successFunction, failureFunction)
```
Returns the current track's position (in seconds)

#### Other Methods
```js
appleMusicPlugin.pause(successFunction, failureFunction)

appleMusicPlugin.resume(successFunction, failureFunction)

appleMusicPlugin.seek(seconds, successFunction, failureFunction)

appleMusicPlugin.stop(successFunction, failureFunction)
```

### EVENTS

The following methods will allow you to set up event handlers for the apple music player.

#### Track stopped playing
```js
appleMusicPlugin.onStop(callback)
```
Called whenever an apple music track is stopped, interrupted, or paused.

#### Track seeked
```js
appleMusicPlugin.onSeek(callback)
```
Called when the user seeks a new position within a track

#### Track started playing
```js
appleMusicPlugin.onPlay(callback)
```
Called whenever an apple music track starts playing
