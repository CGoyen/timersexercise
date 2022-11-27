
//we are using setTimeout and setInterval

//1 write a function called countdown that acceps a number as a parameter and every 1000 miliseconds decrements the value and console.logs it. Once the value is 0, it should log donne! and stop





function countDown(numberInput){
    let intervalID = setInterval(function(){
        if (numberInput > 0){
            console.log(numberInput);
            setTimeout(1000);
            numberInput -= 1;
        } if (numberInput === 0){
            clearInterval(intervalID);
            intervalID = 0;
            return console.log(`DONE!`);
        }
    }, 1000)
}
//if we needed to print 0, then add that in the second if statement


//randomGame

//selects a number between 0 and 1 every 1000 miliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than 0.75, stop the timer and console.log the number of tries it took before we found a number greater than 0.75

function randomGame(){
    let value = 0;
    let counter = 0;
    let intervalID = setInterval(function(){
        if (value <= 0.75){
        value = Math.random(1, 100);
        counter +=1;
        } if (value > 0.75){
            clearInterval(intervalID);
            intervalID = 0
            return console.log(counter);
        }
   }, 1000)
}

