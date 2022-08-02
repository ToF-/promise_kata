// const fetch = require('node-fetch'); TODO explore node-fetch

// const fetch = require('node-fetch');
// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

// console.log(data);

const fetchUrl = (url, what_to_do_with_it) => {

    const success = res => {
        console.log("success!");
        res.json().then(content =>
            what_to_do_with_it(content,null)
        )};

    const failure = error => {
        what_to_do_with_it(null, error);
    };

    fetch(url).then(success).catch(failure);
}

module.exports = fetchUrl;

