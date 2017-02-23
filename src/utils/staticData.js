'use strict';

var tableHeading = ['Story title', 'Story URL', 'Story timestamp', 'Story score', 'Author id', 'Author karma score'];
var maximumStoriesToPick = 10;
var infoNotAvailable = 'Information not available at the moment!!';

function getTopStoriesUrl () {
    return 'https://hacker-news.firebaseio.com/v0/topstories.json';
}

function getAuthorUrl (authorId) {
    return 'https://hacker-news.firebaseio.com/v0/user/' + authorId + '.json';
}

function getStoryUrl (storyId) {
    return 'https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json';
}
