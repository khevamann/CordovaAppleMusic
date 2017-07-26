# CordovaAppleMusic
Access Apple Music from Cordova


# Initialize the plugin 
  appleMusicPlaylists.init(successFunction, failureFunction)  
   
# Request Authorization 
  appleMusicPlaylists.requestAuthorization(function(isAuthorized){}, failureFunction) 
 
# Get Play Lists 
  appleMusicPlaylists.getPlayLists(function(playLists){}, failureFunction) 
    Return: playLists is an array with each index containing id, name fields; 
   
# Get Songs 
  appleMusicPlaylists.getSongs(playListId, function(songList){}, failureFunction) 
    return: songList is an array with each index containing id, name fields; 
 
# Create Play List 
  appleMusicPlaylists.createPlayList(playListName, function(status){}, failureFunction) 
   return: status success on play list creation. 
   
# Add songs to playlist 
  appleMusicPlaylists.addSongstoPlayList(playListId, trackIds,  function(status){}, failureFunction) 
    Return: status success on song addition. 
      Arguments: Playlist id, array of track ids 
