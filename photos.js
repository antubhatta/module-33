function photosLoader(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => photosDisplay(data))
}
function photosDisplay(data){
    const photosContainer=document.getElementById('photos-container')
    for(const user of data){
        const photosDiv= document.createElement('div')
        photosDiv.innerHTML= `
        <h2>Id- ${user.id}</h2>
        <h2>Title- ${user.title}</h2>
        <h3>Url- ${user.url}</h3>
        <p>ThumbnailUrl- ${user.thumbnailUrl}</p>
        `
        photosContainer.appendChild(photosDiv)
    }
    
}
photosLoader()