//just a const list that may come in handy later
const Data = ((r)=> r.json())
const showsURL = "http://localhost:3000/tvshows"
const showsDropDown = document.getElementById(`collection`)
const showsReviews = document.getElementById(`reviews-section`)
//fetching from DB then for eaching them
fetch(showsURL)
.then(Data)
.then((showsArray)=>{
    showsArray.forEach(renderShows)
    const firstShow = showsArray[0]
    displayShow(firstShow)
})
//adding renderReview
const renderReview = (review) => {
    const singleComment = document.createElement(`p`)
    singleComment.innerText = review.comment
    showsReviews.append(singleComment)
}
//seperating function
const displayShow = (show) => {
    document.getElementById("details-title").innerText = show.title
    document.getElementById("details-genre").innerText = show.genre
    document.getElementById("details-img").src = show.image
    document.getElementById("details-img").alt = show.title + " poster"
}
//rendering a show to html
const renderShows = (show) => {
    const singleShow = document.createElement(`div`)
    singleShow.innerText = show.title
    singleShow.className = `show`
    const review = show.reviews
    //console.log(show)
    //console.log(review)

    review.forEach(renderReview)
    singleShow.addEventListener("click", () => {
        displayShow(show)
    })
    showsDropDown.append(singleShow)
    singleShow.addEventListener('mouseover',(event) => {
        //console.log(event)
        event.target.style.color = "orange";
        setTimeout(() => {
            event.target.style.color = "";
        }, 1000);
    })
}

// created form function that adds new tv show user inputs into the list however it does not presist yet -kp
const form = document.querySelector(".add-show-form")
// optimistic rendering of newTvShow
form.addEventListener('submit',(event)=>{
event.preventDefault();
    const newTvShow = {
        title: event.target.name.value,
        genre: event.target.genre.value,
        image: event.target.image.value,
        reviews: `[
            {
                comment:
            }
        ]`
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