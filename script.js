let submittedRating;

const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (event) => {
    console.log("button was clicked");
    if (submittedRating !== undefined){
        displayThankYou();
    }
});

function displayThankYou() {
    console.log("display thank you was called")
    displayRating();
    const ratingState = document.querySelector(".rating-state");
    const thankYouState = document.querySelector(".thank-you-state");

    ratingState.style.display = "none";
    thankYouState.style.display = "flex";
}

const ratingOptions = document.querySelectorAll("input[name=rating");

for (let i = 0; i < ratingOptions.length; i++) {
    ratingOptions[i].parentElement.addEventListener("click", (event) => { //on the div, to increase the hit radius
        if (!ratingOptions[i].checked) {
            ratingOptions[i].checked = true; //in case they clicked the div but not the actual radio button
            submittedRating = ratingOptions[i].value; 
        }
        removeActive();
        if (event.target.nodeName === "INPUT") {
            event.target.parentElement.classList.add("active"); //if they hit the radio button, add class list to parent (div)
        }
        else {
            event.target.classList.add("active"); //if div itself was hit
        }
    });
}

function removeActive() {
    const activeOption = document.querySelector(".active");
    if (activeOption !== null) {
        activeOption.classList.remove("active");
    }
}

function displayRating() {
    const ratingValue = document.getElementById("rating-value");
    ratingValue.innerText = submittedRating;
}