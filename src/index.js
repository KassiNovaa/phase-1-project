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