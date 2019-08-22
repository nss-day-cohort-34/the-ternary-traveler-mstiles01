const countryData = {

    getAllPOI() {
        return fetch("http://localhost:8088/places")
            .then(events => events.json())
    },
    PostNewPOI(placeObj) {
        return fetch("http://localhost:8088/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeObj)
        })
            .then(newEvent => newEvent.json())
    },

    deletePOI(id) {
        return fetch(`http://localhost:8088/places/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
            .then(newEvent => newEvent.json())
    },

    editPOI(placeObj) {
        return fetch(`http://localhost:8088/places/${placeObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(placeObj)
        })
    },

    getSinglePOI(id) {
        return fetch(`http://localhost:8088/places/${id}`)
            .then(events => events.json())
    }
}

export default countryData