Project to render the response from the public API's for the top 10 
stories among the given pool of stories.

Also available on https://github.com/bishnoibinni/TopTenStories

The project is written purely in HTML, JS and CSS only.

<h1>To Run the project :</h1>

Go to the index.html location : <b>../src/view/index.html</b> 
and open it in a browser.

First time it will load the main page (index.html) along wiht a spinner
and will call the 3 public API's ( provided and loaded from :
<b>../src/utils/staticData.js</b>) using the rest async GET call service 
(<b>../src/service/transport.js</b>).

Refresh Button (Top-Right corner has been provided to fetch the new 
results). (Picture in the <b>../src/resources/img/Screenshot.png</b>)

Also the URL provided, on click will open the location in another tab of
the browser,

Regarding the hierarchy of the project :
<b>../src/</b> contains the source files

<b>../src/controller/indexController.js</b> - acts as a controller, 
makes call to the public API's using the service, at the same time uses 
the model to collect the data and then uses the helper methods to 
perform additional data extraction and enhancement.

<b>../src/model/displayViewItems.js</b> acts as the final model bean 
which is used to represent the data in the listing for different 
stories.

<b>../src/utils/helper.js</b> provides additional helper functionalities 
for the implementation (pickRandomDataFromArray, 
convertUnixTimeToLocalFormat, sortStoriesByScores)

<b>../src/utils/staticData.js</b> placeholder for the static data, which
could be changed without hampering the rest of the code.

<b>../src/utils/tableTemplateCreator.js</b> works as the backbone to 
provide the templating for the creation of the table in the HTML view.In 
case the url is not available in the response from the rest services, 
USER Defined information is provided : 
Information not available at the moment!!

<b>../dest/</b>  folder is for the minified files.

Includes the uglify topstories.min.js for JS, for CSS there are some 
issues :

Running "cssmin:target" (cssmin) task
>> TypeError: Object #<Object> has no method 'isAbsolute'
Warning: CSS minification failed at src/css/index.css. Use --force to 
continue.

so, the direct import of the css file has been done.
