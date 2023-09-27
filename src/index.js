//just a const list that may come in handy later
const Data = ((r)=> r.json())
const showsURL = "http://localhost:3000/tvshows"
const showsDropDown = document.getElementById(`collection`)

//fetching from DB then for eaching them
fetch(showsURL)
.then(Data)
.then((showsArray)=>{
    showsArray.forEach(renderShows)
})

//rendering a show to html
const renderShows = (show) => {
    const singleShow = document.createElement(`div`)
    singleShow.innerText = show.title
    singleShow.className = `show`
    singleShow.addEventListener("click", () => {
        document.getElementById("details-title").innerText = show.title
        document.getElementById("details-genre").innerText = show.genre
        document.getElementById("details-img").src = show.image
        document.getElementById("details-img").alt = show.title + " poster"
    })
    showsDropDown.append(singleShow)

    singleShow.addEventListener('mouseover',(event) => {
        console.log(event)
        event.target.style.color = "orange";
        setTimeout(() => {
            event.target.style.color = "";
          }, 1000);
    })
}

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

