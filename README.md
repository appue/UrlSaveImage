# UrlSaveImage
This plugin allows you to save an image from a url to the iOS Photo Library.

## Supported Platforms
IOS


window.UrlSaveImagePlugin.saveImage(
    {
      url: imageurl
    },
    function (res) {
      console.log('success');
    },
    function (err) {
      console.log('failure');
    },
)

