/* This code listens for click events on the document. When an element with the data-type attribute set to "child" is clicked,
it extracts the child's name and wish from the element's data attributes and displays them in an alert box. */

import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (getClick) => {
        const clickTarget = getClick.target
        const childName = clickTarget.dataset.name
        const wish = clickTarget.dataset.wish
        const type = clickTarget.dataset.type
        if(type === "child"){
            window.alert(`${childName} wish is to ${wish}`)
        }
    }
)

/* This code snippet generates an HTML ordered list (<ol>) with list items (<li>) for each child.
   Each list item includes data attributes for the child's ID, name, wish, and type, making it easy to access this information later (e.g., in event handlers). */

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-name="${child.name}" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}