const HTMLRep = {

    PlaceHTMLRep(placeObj) {
        return `

<section id="POIContainer">
 <h1>${placeObj.name}</h1>
 <h1>${placeObj.visa_required}</h1>
 </section>
<div id="renderform">
 <input id="travelLog" type="text">
<button id="saveTravelLog">Travel Log</button>
<button id="editTravelLog">Edit Travel </button>
</div>
        `
    }

}

export default HTMLRep