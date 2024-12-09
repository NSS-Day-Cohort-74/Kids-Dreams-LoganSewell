/* This code snippet helps find a celebrity match for a given child by comparing their IDs.
If a match is found, the details of the matched celebrity are returned; otherwise, it returns an empty object.*/

import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    let celebrityDetail = {} 
    debugger
    for (const celebrity of celebrityArray) {
        if(celebrity.id === kidObject.id){
            celebrityDetail = celebrity
            
        }
    }

    return celebrityDetail
}

/* This code snippet generates an HTML unordered list (<ul>) with list items (<li>) describing each kid's wish and the celebrity they'll be making memories with.
    It dynamically builds the HTML based on the data from the kids and celebrities arrays, and the match found by the findCelebrityMatch function. */
    
export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}