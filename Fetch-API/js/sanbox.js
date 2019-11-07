

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }   
}).then(response => {
    //console.log(response);
    return response.json();
  }).then(data => {
       // console.log(JSON.stringify(data))
       // const naveen = JSON.stringify(data)
        const listOfPosts = data;
        console.log(listOfPosts)

    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').textContent = post.title;
      postEl.querySelector('p').textContent = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
   
  }).catch(err => {
    console.log(err);
  });
   
