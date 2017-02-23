'use strict';

function Story() {
    this.id = 0;	                // The item's unique id.
    this.deleted = true;         // true if the item is deleted.
    this.type = '';              // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
    this.by = '';                 // The username of the item's author.
    this.time = 0;               // Creation date of the item, in Unix Time.
    this.text = '';              // The comment, story or poll text. HTML.
    this.dead = true;            // true if the item is dead.
    this.parent = 0;             // The item's parent. For comments, either another comment or the relevant story. For pollopts, the relevant poll.
    this.kids = [];	            // The ids of the item's comments, in ranked display order.
    this.url = '';               // The URL of the story.
    this.score = 0;              // The story's score, or the votes for a pollopt.
    this.title = '';             // The title of the story, poll or job.
    this.parts = [];             // A list of related pollopts, in display order.
    this.descendants = 0;         // In the case of stories or polls, the total comment count.
}