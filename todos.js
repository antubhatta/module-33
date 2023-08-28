function todosLoader(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data=> todosDisplay(data))
}

function todosDisplay(data){
    // get the container
    const todosContainer=document.getElementById('todos-container')
    for(const user of data){
        // console.log(user)
        // create the child element
        const postDiv= document.createElement('div')
        // css styles
        postDiv.classList.add('todos')
        // set inner text or innerHtml
        postDiv.innerHTML=`
        <h4>Id- ${user.id}</h4>
        <p>Title- ${user.title}</p>
        <h4>Completed: ${user.completed === true ? 'completed': 'not completed'}</h4>
    
        `
        // appendChild
        todosContainer.appendChild(postDiv)
    }
}
todosLoader()