"use strict";
fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then(res => res.json())
    .then((data) => {
    console.log(data);
})
    .catch(e => {
    console.error(e);
});
