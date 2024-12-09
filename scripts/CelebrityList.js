// Imports the getCelebrities from the database.js module.
import { getCelebrities } from "./database.js"

// Defines and Creates a new constant variable named celebrities and tells it to equal getCelebrities from the database module. 
const celebrities = getCelebrities()
// Adds an Event Listener to display a popup when the object is clicked.
document.addEventListener(
    "click",
    (getClick) => {
        const clickTarget = getClick.target
        const name = clickTarget.dataset.name
        const sport = clickTarget.dataset.sport
        const type = clickTarget.dataset.type
// If is equal to the value and type of celebrity, then alert with name and name of their sport.
        if(type === "celebrity"){
            window.alert(`${name} is a ${sport} star`)
        }
    }
)
// Exporting the variable Celebrities
export const Celebrities = () => {
    // Let html equal an Ordered List.
    let html = "<ol>"
/* This code constructs a list of <li> elements with custom data,
attributes for each celebrity in the celebrities array,
making it easy to reference these attributes later,
for functionality like event handling or filtering.
*/
    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }
// This appends a string (using template literals) to the html variable.
// It builds the list items (<li>) dynamically for each celebrity.
    html += "</ol>"
    return html
}