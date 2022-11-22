//take in node user input as array
//sort the array
//iterate over array, setTimeout for the index value
//after index value in seconds do the beep
//has to wait for the beep/setTimeout before iterating to next array value


//first we grab the node input and assign that to a variable
const input = process.argv.slice(2);
//console.log(input)
//next i want to sort the array 
//can't just .sort because that wont work properly with integers
//so I have to do this funky little function mameuver
input.sort((a, b) => a - b);
//console.log(input);
/********************************************************************************\
  now that I have an array of sorted integers, i need to iterate over that array
/*********************************************************************************/
//create delay outside the loop 
let delay = 1;
//iterate with .map because I am really smart
const runThis = input.forEach(element => {
  //Edge cases
  //if no numbers are provided nothing happens
  const noNumbers = input.every(x => {
    x = Number(x);
    if (isNaN(x)) {
      return true;
    }; 
    return false;
  });
  if (noNumbers) {
    return;
  }
  //if an input is a negative number or is not a number
  //then we want to just skip to the next element
  element = Number(element);
  if (element <= 0 || isNaN(element)) {
    //console.log('hello')
    return null;
  }
  //for each iteration delay will have a new value in milleseconds depending on what element
  //represents in the current iterated state
  delay += (element * 1000);
  //use our setTimeout to do the thing it does
  setTimeout(() => {
    //use process.stdout.write instead of console.log so it remains on the same line
    process.stdout.write(`\u0007 ${element}`);
    //delay should equal the element * 1000 because we want it in milliseconds
  }, delay);
});

