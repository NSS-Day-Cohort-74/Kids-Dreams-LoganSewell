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

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-name="${child.name}" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}