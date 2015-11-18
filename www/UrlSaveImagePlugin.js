/**
 * UrlSaveImagePlugin.js
 */

module.exports = {
    
    saveImage:function(url, successCallback, failureCallback, type) {

        if (typeof successCallback != "function") {

            console.log("UrlSaveImagePlugin Error: successCallback is not a function");

        } else if (typeof failureCallback != "function") {
          
            console.log("UrlSaveImagePlugin Error: failureCallback is not a function");

        } else {
            if (type == 2) {
                var parts = url.split('/'),
                    fileTransfer = new FileTransfer();

                fileTransfer.download(
                    url,
                    cordova.file.externalRootDirectory + '/Pictures/' + parts[parts.length - 1],
                    function(entry) {
                        var imagePath = entry.toURL().replace(/^file:\/\//i, '');
                        return cordova.exec(successCallback, failureCallback, 'UrlSaveImagePlugin', 'saveImage', [imagePath]);
                    },
                    failureCallback
                );
            } else {
                return cordova.exec(successCallback, failureCallback, "UrlSaveImagePlugin", "saveImage", [url]);
            }

        }
    }
};
