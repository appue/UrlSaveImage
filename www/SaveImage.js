/**
 * SaveImage.js
 */

module.exports = {
    
    saveImage:function(url, successCallback, failureCallback, type) {

        if (typeof successCallback != "function") {

            console.log("SaveImage Error: successCallback is not a function");

        } else if (typeof failureCallback != "function") {
          
            console.log("SaveImage Error: failureCallback is not a function");

        } else {
            var device = device;

            console.log(device);

            console.log(device.getPlatform());
            if (type == 2) {
                var parts = url.split('/'),
                    fileTransfer = new FileTransfer();

                fileTransfer.download(
                    url,
                    cordova.file.externalRootDirectory + '/Pictures/' + parts[parts.length - 1],
                    function(entry) {
                        var imagePath = entry.toURL().replace(/^file:\/\//i, '');
                        return cordova.exec(successCallback, failureCallback, 'SaveImage', 'fromUrl', [imagePath]);
                    },
                    failureCallback
                );
            } else {
                return cordova.exec(successCallback, failureCallback, "SaveImage", "fromUrl", [url]);
            }

        }
    }
};
