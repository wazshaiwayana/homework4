$(document).ready(function() {


//create a var with a list of questions , choices for answers and the correct answer

var quizContent = 
    {
        question: "Which built-in method calls a function for each element in the array?",
        choices1: ["while()", "loop()", "forEach()"],
    },
    {
        question:"which of these String object returns the calling string value converted to uppercase?",
        choices2: ["toUpperCase" , "toString" , "toLowerCase"],
       

    },
    {
        question: "which built-in method sorts the elements of an array?",
        choices3:["changeOrder(order)" , "order()" , "sort()"],
      
    };

var  answers: ["forEach()" , "toUpperCase" , "sort()" ]




// on click of the begin button, the timer should start to 60 seconds and timer should stop once the time has run out

$("#begin").on("click", function(){
    var count = 60;
var timer = setInterval(function() {
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

});

// and the questions should start


$("begin").on("click", function(){
   question.append();
})
})



// on click of this button, the results of the quiz should show 
var results= answers
$("results").on("click", function(){
 displayResults();
})

