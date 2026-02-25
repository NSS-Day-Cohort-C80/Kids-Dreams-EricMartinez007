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
   > The module that contains the click event is Kids.js. First I assigned the click event target a name of childTarget, if the childTarget's dataset has a type of "child" then it will assign an integer to childID, which is equal to the dataset childid that was defined in the Kids function. Once childId is assigned then the click event will run a for of loop where it will go through each child in the children array and if the childID from the click event matches the child.id in the children array a window will appear saying (`${child.name}'s wish is ${child.wish}`) both child.name and child.wish come from the child object in the children array that was matched with the childID of the click event. 
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > findCelebrityMatch() must be in the for of loop because the HTML string that the for of loop produces requires both a child object and the celebrity object that matches that child's id. In the findCelebrityMatch() function we match a celebrity to a child based on the celebrity id and the corresponding child celebrityId. If both integers match then that function will return a specific celebrity object for the child object with the matching celebrityId. 
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > The celebrity click event works similar to how the child click events works. We assign the click target a name of celebrityTarget, then if that celebrityTarget has a dataset type of "celebrity" it will assign an integer to celebrityID that is equal to the dataset celebrityid. A for of loop begins that goes through each celebrity in the celebrities array and if the celebrityID of the celebrityTarget matches the if of that celebrity object it will produce a window alert of (`${celebrity.name} is a ${celebrity.sport} star`). The celebrity.name and celebrity.sport both come from the object's properties that matched the celebrityTarget of the click event. 
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > In main.js we first have mainContainer get assigned to an element of the DOM, specifically the main element that has an id = "container". After, we assign applicationHTML to an HTML string that contains various elements. First is a title for the main container h1: "Make a Memory for Kids" then an article that has the class = "details, in which, two sections are declared. The first section has a class = "detail--column list details__kids", a title of h2 = "Kids", and a imported function of Kids() that displays an ordered list of all the kids in the database. The next section has a class = "detail--column list details__celebrities", a title of h2 = "Celebrities", and a imported function of Celebrities() that displays an ordered list of all the celebrities in the database. After the first article we have another that has a class = "assignments", a title of h2 = "Pairings", and a imported function of Pairings() that displays an unordered list containing the child's name, which celebrity they'll be making memories with, what sport the celebrity is a star in, and what activity/kid wish they'll be doing together. 
