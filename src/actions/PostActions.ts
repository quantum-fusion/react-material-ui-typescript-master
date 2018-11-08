// /src/actions/PostActions.js

require('es6-promise').polyfill();
require('isomorphic-fetch');

export class PostAction {

public postAction() {

    console.log("hello postAction");

fetch('https://gturnquist-quoters.cfapps.io/api/random')
    .then((res) => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then((stories) => {
        console.log(stories);
    });

 }
}
