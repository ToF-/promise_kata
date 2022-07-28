// const fetch = require('node-fetch'); TODO explore node-fetch

// const fetch = require('node-fetch');
// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();

// console.log(data);

const fetchUrl = (url, what_to_do_with_it) => {

    const call_back = (content) => {
        what_to_do_with_it(content);
    }
    fetch(url).then(res => res.json().then(call_back));
}

module.exports = fetchUrl;
