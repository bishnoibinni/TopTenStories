'use strict';

function Author () {
    this.id = '';           //	The user's unique username. Case-sensitive. Required.
    this.delay = 0;         //	Delay in minutes between a comment's creation and its visibility to other users.
    this.created = 0;       //	Creation date of the user, in Unix Time.
    this.karma = 0;         //	The user's karma.
    this.about = '';        //	The user's optional self-description. HTML.
    this.submitted = [];    //	List of the user's stories; polls and comments.
}