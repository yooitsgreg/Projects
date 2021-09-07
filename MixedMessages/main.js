//Resources

var person = ["Greg","Rita","Josh","Adam","Amy","Anthony", "Scott", "Jane"];
var problem = ["drinking", "drug"];
var situation = ["relationship","marriage"];
var problem2 = ["drinking", "drugging", "relapse"];
var result = ["screwed up", "destroyed"];
var outcome = ["lost","scared","confused", "pissed off"];


//Function to select random index from given array

function getRandom(arr) {
    var size = arr.length;
    var index = Math.floor(Math.random()* size);
    return arr[index];
}



//Create obj to hold instance of random variables

function mixedMessagesFactory() {
    var obj = {
        _name: getRandom(person),
        _problem: getRandom(problem),
        _situation: getRandom(situation),
        _problem2: getRandom(problem2),
        _result: getRandom(result),
        _outcome: getRandom(outcome),
        getPronoun() {
            if(this._name === "Rita" || this._name === "Amy" || this._name === "Jane") {
                return "her";
            } else {
                return "his";
            }
        }
    };
    var mixedMessages = `I knew ${obj._name} had a ${obj._problem} problem, but I went into the ${obj._situation} with hopes that I could fix ${obj._name}. We are on the outs right now due to ${obj.getPronoun()} ${obj._problem2}. This has completely ${obj._result} my life. ${obj._name} blames me for all of our problems. I'm completely ${obj._outcome} and I don't know what to do.`;
    
    return console.log(mixedMessages);
}




//Run

mixedMessagesFactory();
