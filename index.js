import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
        console.log(`Task 1a. 2014 World Cup Final Home Team: ${fifaData[828]['Home Team Name']}`)

/*(b) Away Team name for 2014 world cup final*/
        console.log(`Task 1b. 2014 World Cup Final Away Team: ${fifaData[828]['Away Team Name']}`)
/*(c) Home Team goals for 2014 world cup final*/
        console.log(`Task 1c. Home Team Goals: ${fifaData[828]['Home Team Goals']}`)
/*(d) Away Team goals for 2014 world cup final*/
        console.log(`Task 1d. Home Team Goals: ${fifaData[828]['Away Team Goals']}`)

/*(e) Winner of 2014 world cup final */
      console.log(`Task 1e. Winner of the 2014 World Cup Final: ${fifaData[828]['Win conditions']}`)

      

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {
    
  return  data.filter(data => data.Stage === 'Final');
}
console.log("Task 2:",getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

    function getYears(callback,arr) {
        return callback(arr).map(item => item.Year);
    }
 
console.log("Task 3:",getYears(getFinals,fifaData));
console.log ("What happened to Task 4?!?!?!?!")



/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb1,arr) {
    const winners =  cb1(arr).map(function (item) {
        if (['Home Team Score'] > ['Away Team Score']){
            return item['Home Team Name'];
        }
        else if (['Home Team Score'] < ['Away Team Score']){
            return item['Away Team Name'];
        }else{
            return "Null"
        }
});
    return winners;
}
console.log("Task 5:", getWinners(getFinals,fifaData))


/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {
    const finalYears = callback2(getFinals, fifaData)
    const finalWinners = callback1(getFinals, fifaData);
    
    let years = [];
    finalYears.forEach((item, index) => {years.push(`In ${item}, ${finalWinners[index]} won the world cup!`)})

    return years;
}
  
console.log("Task 6:", getWinnersByYear(getWinners,getYears));


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
const totalHomeGoals = data.map(item => {return item['Home Team Goals']});
const totalAwayGoals = data.map(item => {return item['Away Team Goals']});


const homeGoalsAvg = totalHomeGoals.reduce(function (acc, val){
    return (acc + val)}, 0) /totalHomeGoals.length;
const awayGoalsAvg = totalAwayGoals.reduce(function(acc, val){
    return (acc + val)}, 0) / totalAwayGoals.length;


console.log ("Task 7:",`Average Home Team Goals: ${Math.ceil(homeGoalsAvg)} -- Average Away Team Goals: ${Math.ceil(awayGoalsAvg)} `)
}

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
