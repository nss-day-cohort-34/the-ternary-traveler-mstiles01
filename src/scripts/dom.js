import HTMLRep from "./factory"

const DOMRep = {
renderToDom (interestHTML) {
    const mainContainer = document.querySelector("#container")
    mainContainer.innerHTML += interestHTML
},

}

export default DOMRep
