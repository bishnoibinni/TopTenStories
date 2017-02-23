'use strict';

var fetchTopStoriesData = function () {
    transport.get(getTopStoriesUrl(), function (result) {
        var topPickRandomStories = helper.pickRandomDataFromArray(JSON.parse(result), maximumStoriesToPick);
        var counter = 0;
        var randomTopStories = [];
        topPickRandomStories.forEach(function (storyId) {

            transport.get(getStoryUrl(storyId), function (individualStory) {

                var storyInstance = new Story();
                storyInstance = JSON.parse(individualStory);
                
                transport.get(getAuthorUrl(storyInstance.by), function (authorDetails) {

                    var authorInstance = new Author();
                    authorInstance = JSON.parse(authorDetails);

                    var displayItem = new DisplayViewItem();

                    displayItem.set(storyInstance, authorInstance);
                    randomTopStories.push(displayItem);
                    counter ++;

                    if (counter === maximumStoriesToPick) {
                        randomTopStories.sort(helper.sortStoriesByScores);

                        var spinnerClass = document.getElementsByClassName('spinner');
                        if (spinnerClass && spinnerClass.length > 0 && spinnerClass[0].getAttribute('class') == 'spinner') {
                            spinnerClass[0].setAttribute('class', 'nospinner');
                            
                            var listOfStories = document.getElementById('listStories');
                            listOfStories.appendChild(tableTemplateCreator.createAndPopulateTableTemplate(randomTopStories));

                        }
                    }
                });
            });
        });
    });
};


fetchTopStoriesData();

var refreshButton = document.getElementById('refresh');
refreshButton.onclick = function () {
    var noSpinnerClass = document.getElementsByClassName('nospinner');
    if (noSpinnerClass.length > 0 && noSpinnerClass[0].getAttribute('class') == 'nospinner') {
        noSpinnerClass[0].setAttribute('class', 'spinner');
        var storyNode = document.getElementById('listStories');
        while(storyNode.firstChild) {
            storyNode.removeChild(storyNode.firstChild);
        }
        fetchTopStoriesData();
    }
};