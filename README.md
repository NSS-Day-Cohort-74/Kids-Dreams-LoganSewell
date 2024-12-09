# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > The `click` event is defined in the `kids.js` module. I used the `document.addEventListener` method to listen for click events on the HTML document. Within this event listener, I assigned the target of the click event to the `kidClicked` variable. Additionally, I created a `wish` variable to easily access the wishes stored in the database and ensured that the wishes are included as a dataset within the element.

   In the previous `Kids` function, an `if` statement was added to ensure the code executes only when a child’s name is clicked, using the dataset to verify this. When a child’s name is clicked, a `window.alert` will display the message: `${kidClicked.innerText} wish is to ${wish}` for the corresponding child in the `children` array. A `break` statement is included to exit the `for...of` loop after one alert, preventing multiple pop-ups from appearing for a single click (which would otherwise happen for each child in the `children` array).
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > This function should be called within a `for...of` loop because its return value is needed for each child in the `kids` array to generate the text that will appear on the website. The loop identifies which celebrity is associated with each child by passing the appropriate argument into the `findCelebrityMatch` function during each iteration.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > I prefer creating variables within the `clickEvent` function for any data I want to display in the `window.alert`, as long as the data comes from the same object within the same array.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The `main` module provides the portion of HTML that will be inserted into `index.html`.  
   In the first part of `main.js`, all the necessary functions are imported to achieve the desired output. Next, a variable `mainContainer` is defined, referencing the HTML element with the ID `container`. Another variable, `applicationHTML`, is assigned to the HTML content we want to display on the page. Template literals with `${}` are used to call functions that return HTML strings to be displayed in specific sections of the page. Finally, by setting `mainContainer.innerHTML = applicationHTML`, the generated HTML content is inserted into `mainContainer` within `index.html`. "RIGHT HERE"