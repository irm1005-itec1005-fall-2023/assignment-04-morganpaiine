/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions

function addTask() {
  const input = document.getElementById("todo-input");
  const inputValue = input.value;

 
  if (!inputValue) {
    console.error("Error: No input value");
    return;
  }


  const listItem = document.createElement("li");
  listItem.innerText = inputValue;


  listItem.addEventListener("click", () =>{
    listItem.classList.toggle("completed");
  });

  const list = document.getElementById("todo-list");
  list.appendChild(listItem);

  // Clear the input
  input.value = "";
}
function removeCompletedTasks() {
  const completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach((task) => {
    task.remove();
  });
}



//



// Add a heading to the app container
function inititialise() {
  let appContainer = document.getElementById(appID);

  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer" + appID);
    return;
  }



  // Init complete
  console.log("App successfully initialised");



}

//
// Inits & Event Listeners
//
inititialise();