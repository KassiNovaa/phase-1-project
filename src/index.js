//just a const list that may come in handy later
const Data = ((r)=> r.json())
const showsURL = "http://localhost:3000/tvshows"
const showsDropDown = document.getElementById(`collection`)
const placeholderImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbMI_lmqrrCTrEZkZym0_XjHkDn4eqDomJsQ&usqp=CAU"

//fetching from DB then for eaching them
fetch(showsURL)
.then(Data)
.then((showsArray)=>{
    showsArray.forEach(renderShows)
    const firstShow = showsArray[0]
    displayShow(firstShow)
})
//sep function
const displayShow = (show) => {
    document.getElementById("details-title").innerText = show.title
    document.getElementById("details-genre").innerText = show.genre
    document.getElementById("details-img").src = show.image
    document.getElementById("details-img").alt = show.title + " poster"
    document.getElementById("details-comment").innerText = show.comment
}
//rendering a show to html
const renderShows = (show) => {
    const singleShow = document.createElement(`div`)
    singleShow.innerText = show.title
    singleShow.className = `show`
    singleShow.addEventListener("click", () => {displayShow(show)})
    showsDropDown.append(singleShow)

    singleShow.addEventListener('mouseover',(event) => {
        console.log(event)
        event.target.style.color = "orange";
        setTimeout(() => {
            event.target.style.color = "";
          }, 1000);
    })
    document.getElementById("details-img").src = placeholderImage;
}

// created form function that adds new tv show user inputs into the list however it does not presist yet -kp
const form = document.querySelector(".add-show-form")
console.log(form)
// optimistic rendering of newTvShow
form.addEventListener('submit',(event)=>{
   event.preventDefault();
    const newTvShow = {
        title: event.target.name.value,
        genre: event.target.genre.value,
        image: event.target.image.value,
        comment: event.target.comment.value
    }
    const requestObjectPost = {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTvShow)
    }
    fetch(showsURL, requestObjectPost)
    .then((r) => {
        if (r.ok) {
            return r.json()
        } else {
            throw r.statusText}})
    .then(newTvShowObj => {
        console.log(`success! no danger noodles detected.`)
        renderShows(newTvShowObj)
        event.target.reset()
    })
    .catch(( error ) => console.log(error))
})

document.addEventListener(`DOMContentLoaded`, ()=>{
    //console.log(`add top rated show to display`)
})