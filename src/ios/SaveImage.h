/**
 * SaveImage.h
 */

#import <Cordova/CDV.h>

@interface SaveImage : CDVPlugin
{
    NSString* callbackId;
}

@property (nonatomic, copy) NSString* callbackId;

- (void)saveImage:(CDVInvokedUrlCommand*)command;

@end
