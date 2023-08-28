function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(data){
    const commentContainer= document.getElementById('comment-container')
    for(const user of data){
        console.log(user)
        const commentDiv= document.createElement('div')
        // commentDiv.classList.add('comment')
        commentDiv.innerHTML=`
        <h3>Id- ${user.id}</h3>
        <h3>Name -${user.name}</h3>
        <h4>Title- ${user.email}</h4>
        <p>Body- ${user.body}</p>
        `
        commentContainer.appendChild(commentDiv)
        
    }
}
loadComments()