'use strict';

var transport = {
    get : function(requestUrl, callback) {
        var newHttpRequest = new XMLHttpRequest();
        newHttpRequest.onreadystatechange = function () {
            if (newHttpRequest.readyState == 4 && newHttpRequest.status == 200) {
                callback(newHttpRequest.responseText);
            }
        };
        newHttpRequest.open("GET", requestUrl, true);
        newHttpRequest.send(null);
    }
};