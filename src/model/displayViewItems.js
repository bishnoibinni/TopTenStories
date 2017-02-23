'use strict';

function DisplayViewItem () {
    this.title = '';             //  The title of the story, poll or job.
    this.url = '';               //  The URL of the story.
    this.time = 0;               //  Creation date of the item, in Unix Time.
    this.score = 0;              //  The story's score, or the votes for a pollopt.
    this.id = '';                //	The author's unique username. Case-sensitive. Required.
    this.karma = 0;               //	The author's karma.
    this.set = function(storyDetails, authorDetails) {
        this.title = storyDetails.title;
        this.url = storyDetails.url;
        this.time = helper.convertUnixTimeToLocalFormat(storyDetails.time);
        this.score = storyDetails.score;
        this.id = authorDetails.id;
        this.karma = authorDetails.karma;
    };
}