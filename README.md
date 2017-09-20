# CordovaAppleMusic
Access Apple Music from Cordova


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
