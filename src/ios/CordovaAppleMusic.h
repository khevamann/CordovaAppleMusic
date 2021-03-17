#import <Cordova/CDV.h>

@interface CordovaAppleMusic : CDVPlugin

- (void) getCountryCode:(CDVInvokedUrlCommand*)command;
- (void) getDuration:(CDVInvokedUrlCommand*)command;
- (void) getPosition:(CDVInvokedUrlCommand*)command;
- (void) getStatus:(CDVInvokedUrlCommand*)command;
- (void) init:(CDVInvokedUrlCommand*)command;
- (void) pause:(CDVInvokedUrlCommand*)command;
- (void) playTrack:(CDVInvokedUrlCommand*)command;
- (void) getPlayLists:(CDVInvokedUrlCommand*)command;
- (void) addSongtoPlayList:(CDVInvokedUrlCommand*)command;
- (void) createPlayList:(CDVInvokedUrlCommand*)command;
- (void) getSongs:(CDVInvokedUrlCommand*)command;
- (void) requestToken:(CDVInvokedUrlCommand*)command;
- (void) requestAuthorization:(CDVInvokedUrlCommand*)command;
- (void) resume:(CDVInvokedUrlCommand*)command;
- (void) seek:(CDVInvokedUrlCommand*)command;
- (void) stop:(CDVInvokedUrlCommand*)command;

@end
