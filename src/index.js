//just a const list that may come in handy later
const Data = ((r)=> r.json())
const showsURL = "http://localhost:3000/tvshows"
const showsDropDown = document.getElementById(`collection`)
//rendering a show to html
const renderShows = (show) => {
    console.log(show)
    const div = document.createElement(`div`)
    div.innerText = show.title
    showsDropDown.append(div)
}
//fetching from DB then for eaching them
fetch(showsURL)
.then(Data)
.then((showsArray)=>{
    showsArray.forEach(renderShows)
})
// created form function that adds new tv show user inputs into the list however it does not presist yet -kp

const form = document.querySelector(".add-show-form")
console.log(form)

form.addEventListener('submit',(event)=>{
   event.preventDefault();
    const title = event.target.name.value
    const genre = event.target.genre.value
    const image = event.target.image.value
    const newTvShow = {
        title: title,
        genre: genre,
        image: image
    } 
    renderShows(newTvShow)
    event.target.reset()
})