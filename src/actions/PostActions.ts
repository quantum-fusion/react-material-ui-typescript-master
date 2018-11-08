// /src/actions/PostActions.js

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class PostAction {

public postAction(data:any) {

    console.log("hello postAction: " + data);

    // how to stringify JSON object for posting to REST API

// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141    
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://example.com"; // site that doesn’t send Access-Control-*

fetch(proxyurl + url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

 }
}
