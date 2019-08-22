import HTMLRep from "./factory"
import DOMRep from "./dom"
import countryData from "./traveler-data"

const mainFunction = {
    displayAll () {
        countryData.getAllPOI()
        .then(allPOI => {
            allPOI.forEach(interest => {
                const interestHTML = HTMLRep.PlaceHTMLRep(interest)
                DOMRep.renderToDom(interestHTML)


            });
        })
    }
}

mainFunction.displayAll()
// export default mainFunction