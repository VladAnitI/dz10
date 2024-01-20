interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then((data: Post[]) => {
    console.log(data);
})
  .catch(e => {
    console.error(e);
});
