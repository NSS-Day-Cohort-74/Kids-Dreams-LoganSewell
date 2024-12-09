import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()
document.addEventListener(
    "click",
    (getClick) => {
        const clickTarget = getClick.target
        const name = clickTarget.dataset.name
        const sport = clickTarget.dataset.sport
        const type = clickTarget.dataset.type

        if(type === "celebrity"){
            window.alert(`${name} is a ${sport} star`)
        }
    }
)
export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}


//name is a sport star