// Take the contents of the sonnet div and place it in a variable.
const sonnet = document.getElementById("sonnet");
let sonnetText = sonnet.innerHTML;
console.log("sonnet is ", sonnetText);

// Find and output the starting position of the word "orphans".
let orphanIndex = sonnetText.indexOf("orphans");
console.log("index of orphans is", orphanIndex);

// Output the number of characters in the sonnet.
let sonnetLength = sonnetText.length;
console.log("number of characters in sonnet", sonnetLength);

// Replace the first occurance of the string "winter" with "yuletide".
let sonnetUpdate = sonnetText.replace("winter", "yuletide");
console.log("updated sonnet", sonnetUpdate);

// Replace all occurances of the string "the" with "a large".
sonnetUpdate = sonnetUpdate.replace(/ the /g, " a large ");
console.log("second updated sonnet", sonnetUpdate);

// Set the content of the sonnet div with the new string.
sonnet.innerHTML = sonnetUpdate;
