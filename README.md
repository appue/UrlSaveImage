# UrlSaveImagePlugin
This plugin allows you to save an image form a URL to the iOS Photo Library, or Android Gallery from your app.

## Supported Platforms
- IOS
- Android

## Installation
cordova plugin add https://github.com/appue/UrlSaveImagePlugin.git

```
window.UrlSaveImagePlugin.saveImage(
	url,
    function (res) {
      console.log('success');
    },
    function (err) {
      console.log('failure');
    },
)
```

