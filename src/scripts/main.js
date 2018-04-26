const output = document.querySelector("#output")

const fragment = document.createDocumentFragment()

// create factory function to generate components
// create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.classList = classList
    inputField.setAttribute("type", type)
    inputField.placeholder = defaultPlaceholderText
    return inputField
}


// create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}

// create card component
const cardFactory = (classList, textContent) => {
    const theSection = document.createElement("section")
    theSection.classList = classList
    theSection.textContent = textContent
    return theSection
}


const createTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

const createCardButton = buttonFactory("button--submit", "Create Card")
// attach event listener to button
createCardButton.addEventListener("click", function () {
    // get value of input field
    const userEntry = createTextInput.value

    //create card component with text inside
    output.appendChild(cardFactory("card", userEntry))
    createTextInput.value = ""
})

fragment.appendChild(createTextInput)
fragment.appendChild(createCardButton)


// create card component



output.appendChild(fragment)