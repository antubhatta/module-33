// function userData3(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data=>loadData5(data))
// }
// function loadData5(data){
//     const ul=document.getElementById('list-item')
//     for(const user of data){
//         console.log(user.name)
//         const li=document.createElement('li')
//         li.innerText=user.email
//         ul.appendChild(li)
//     }
    
   
   
// }

function userData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=> userLoad6(data))
}
const ul= document.getElementById('list-item')
function userLoad6(data){
    for(const user of data){
        console.log(user.name)
        const li=document.createElement('li')
        li.innerText=user.email
        ul.appendChild(li)

    }
}
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