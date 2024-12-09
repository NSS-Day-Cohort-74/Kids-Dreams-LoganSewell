// Imports Pairings from the Pairings.js module.
// Imports Celebrities from the CelebrityList.js module.
// Imports Kids from the Kids.js module.
import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"

/* document: Represents the web page's DOM structure.  
  .querySelector(): Selects the first element matching a CSS selector.  
- #container: CSS selector for an element with the ID container.  
- const mainContainer: Declares a constant to store the selected #container element.*/

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

mainContainer.innerHTML = applicationHTML