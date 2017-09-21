# CordovaAppleMusic
Access Apple Music from Cordova. This plugin was built to extend zwand19's plugin, and provides other features that the original plugin does not have. Please feel free to ask me any questions you may have.

## Installation

```bash
cordova plugin add cordova-plugin-applemusic
```

## Usage

```js
appleMusic.init((data) => {
      console.log("Plugin Initialized")
    }, (err) => {
      console.log("Error Initializing Plugin")
    })
```

#### Initialize the plugin 
```
appleMusic.init(successFunction, failureFunction)  
```

#### Request Authorization 
```
appleMusic.requestAuthorization(function(isAuthorized){}, failureFunction) 
```

#### Get Play Lists 
```
  appleMusic.getPlayLists(function(playLists){}, failureFunction) 
```  
Return: playLists is an array with each index containing id, name fields; 
   
#### Get Songs 
```
appleMusic.getSongs(playListId, function(songList){}, failureFunction) 
```
Return: songList is an array with each index containing id, name fields; 
 
#### Create Play List with Songs
```
appleMusic.createPlayList(playListName, trackIds, function(status){}, failureFunction) 
```
return: status success on play list creation. 
   
#### Add Single Song to Playlist 
```
appleMusic.addSongstoPlayList(playListId, trackId,  function(status){}, failureFunction) 
```
Return: status success on song addition. 
Arguments: Playlist id, array of track ids 

### Player

#### Play a Track
```
appleMusicPlugin.playTrack(trackId, successFunction, failureFunction)
```
Queues a track by id.

Example id: itunes.apple.com/fr/album/unstoppable/id984653860?i=<b>984653861</b>

The following methods will allow you to manipulate the currently playing track.

#### Get Current Track Duration
```
appleMusicPlugin.getDuration(successFunction, failureFunction)
```
Returns the current track's duration (in seconds)

#### Get Current Track Position
```
appleMusicPlugin.getPosition(successFunction, failureFunction)
```
Returns the current track's position (in seconds)

#### Other Methods
```
appleMusicPlugin.pause(successFunction, failureFunction)

appleMusicPlugin.resume(successFunction, failureFunction)

appleMusicPlugin.seek(seconds, successFunction, failureFunction)

appleMusicPlugin.stop(successFunction, failureFunction)
```

### EVENTS

The following methods will allow you to set up event handlers for the apple music player.

#### Track stopped playing
```
appleMusicPlugin.onStop(callback)
```
Called whenever an apple music track is stopped, interrupted, or paused.

#### Track seeked
```
appleMusicPlugin.onSeek(callback)
```
Called when the user seeks a new position within a track

#### Track started playing
```
appleMusicPlugin.onPlay(callback)
```
Called whenever an apple music track starts playing
