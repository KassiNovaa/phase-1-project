//just a const list that may come in handy later
const Data = ((r)=> r.json())
const showsURL = "http://localhost:3000/tvshows"
const showsDropDown = document.getElementById(`collection`)
//rendering a show to html
const renderShows = (show) => {
    const div = document.createElement(`div`)
    div.innerText = show.title
    div.className = `show`
    div.addEventListener("click", () => {
        document.getElementById("details-title").innerText = show.title
        document.getElementById("details-genre").innerText = show.genre
        document.getElementById("details-img").src = show.image
    })
    showsDropDown.append(div)
}
//fetching from DB then for eaching them
fetch(showsURL)
.then(Data)
.then((showsArray)=>{
    showsArray.forEach(renderShows)
})
