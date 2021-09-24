

//GLOBAL VARIABLES

var archesQuery = "";
var cleanArchesQuery = "";
var queryArray = [];
var queryObj = {};
var data = [];



//TESTING:

function test() {
    let archesQuery = document.getElementById("archesInput").value;
    let queryArray = clean(archesQuery);

    let object = toObject(queryArray);

    console.log(object);
    Object.assign(queryObj, object);
    }


function test2() {
    var data = $.csv.toArray(csv);
    console.log(data);
}


// CLEAN ARCHES QUERY AND RETURN ARRAY

function clean(string) {
    let cleanString = string.replace(/[:]/g, " ");
    let cleanString1 = cleanString.replace(/[()"-]/g, " ");
    let cleanString2 = replaceAll(cleanString1, "AND", "");
    let cleanString3 = replaceAll(cleanString2, "OR", "");
    let newArray = cleanString3.split(" ");
    let newArray2 = newArray.filter(word => word !== "");

    return newArray2;
}

const toObject = arr => {
    let r = {};

    for(let i = 0; i < arr.length; i += 2) {
        let key = arr[i], value = arr[i + 1];
        r[key] = value;
    }

    return r;
}


function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }
