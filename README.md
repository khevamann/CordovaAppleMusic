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
