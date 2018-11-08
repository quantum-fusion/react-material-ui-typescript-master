// /src/actions/PostActions.js

require('es6-promise').polyfill();
require('isomorphic-fetch');

class PostAction extends React.Component {

public postAction() {

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
