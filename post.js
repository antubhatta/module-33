// function postData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => postLoader(data))
// }

// function postLoader(data){
//     const postDiv=document.getElementById('post-container')
//    for(const user of data){
   
//     const div= document.createElement('div')
//     div.classList.add('post')
//     div.innerHTML=`
//     <h3>User-${user.userId}</h3>
//     <p>title-${user.title}</p>
//     <p>body-${user.body}</p>
//     `;
//     postDiv.appendChild(div)
//    }
  
// }
// postData()

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> displayPosts(data))

}
function displayPosts(post){
    const postContainer=document.getElementById('post-container')
   for(const user of post){
    // console.log(user)
    const postDiv=document.createElement('div')
    postDiv.classList.add('post')
    postDiv.innerHTML=`
    <h3>User-${user.userId}</h3>
    <h3>Id-${user.id}</h3>
    <h4>Title-${user.title}</h4>
    <p>Body-${user.body}</p>
    `
    postContainer.appendChild(postDiv)
    
   }

}
loadPosts()
function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}
function patchingPost(){
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function createApost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}