/**
 * UrlSaveImagePlugin.h
 */

#import <Cordova/CDV.h>

@interface UrlSaveImagePlugin : CDVPlugin
{
    NSString* callbackId;
}

@property (nonatomic, copy) NSString* callbackId;

- (void)saveImage:(CDVInvokedUrlCommand*)command;

@end