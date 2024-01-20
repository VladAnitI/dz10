"use strict";
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
    console.log(data);
})
    .catch(e => {
    console.error(e);
});
