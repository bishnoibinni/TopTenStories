'use strict';

var helper = {
    pickRandomDataFromArray : function (arrayData, limitOfRandomData) {
        var randomArray = [];
        for (var counter = 0; counter < limitOfRandomData; counter++) {
            var randomIndex = Math.floor(Math.random() * arrayData.length);
            randomArray.push(arrayData[randomIndex]);
            arrayData.splice(randomIndex, 1);
        }
        return randomArray;
    },
    convertUnixTimeToLocalFormat : function(timeInMilliSecond) {
        return new Date(timeInMilliSecond * 1000);
    },
    sortStoriesByScores : function (a, b) {
        return a.score === b.score ? 0 : (a.score > b.score ? 1 : -1);
    }

};