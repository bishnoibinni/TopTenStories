'use strict';

var tableTemplateCreator = {
    createAndPopulateTableTemplate : function (topStories) {
        var table = document.createElement('TABLE');
        table.setAttribute('id', 'storyTable');

        var tableBody = document.createElement('TABLE');
        tableBody.appendChild(createAndFillTableHeader());

        topStories.forEach(function(tableData) {
            tableBody.appendChild(createAndFillTableData(tableData));
        });

        table.appendChild(tableBody);
        return table;
    }
};

function createAndFillTableData (tableData) {
    var tableRow = document.createElement('TR');

    var tableDataTitleNode = document.createElement('TD');
    var tableDataUrlNode = document.createElement('TD');
    var tableDataTimeNode = document.createElement('TD');
    var tableDataScoreNode = document.createElement('TD');
    var tableDataIdNode = document.createElement('TD');
    var tableDataKarmaNode = document.createElement('TD');

    tableDataTitleNode.appendChild(document.createTextNode(tableData.title));
    tableDataUrlNode.appendChild(createURLTags(tableData.url));
    tableDataTimeNode.appendChild(document.createTextNode(tableData.time));
    tableDataScoreNode.appendChild(document.createTextNode(tableData.score));
    tableDataIdNode.appendChild(document.createTextNode(tableData.id));
    tableDataKarmaNode.appendChild(document.createTextNode(tableData.karma));

    tableRow.appendChild(tableDataTitleNode);
    tableRow.appendChild(tableDataUrlNode);
    tableRow.appendChild(tableDataTimeNode);
    tableRow.appendChild(tableDataScoreNode);
    tableRow.appendChild(tableDataIdNode);
    tableRow.appendChild(tableDataKarmaNode);

    return tableRow;
}

function createURLTags (url) {
    var createAnchorElement = document.createElement('A');
    createAnchorElement.setAttribute('href', url);
    createAnchorElement.setAttribute('target', '_blank');
    createAnchorElement.appendChild(document.createTextNode(url));
    return createAnchorElement;
}

function createAndFillTableHeader () {

    var tableRow = document.createElement('TR');
    tableHeading.forEach(function(headingText) {
        var tableHeadingNode = document.createElement('TH');
        tableHeadingNode.appendChild(document.createTextNode(headingText));
        tableRow.appendChild(tableHeadingNode);
    });

    return tableRow;
}