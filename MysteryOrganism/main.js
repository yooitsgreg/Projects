// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns an obj
function pAequorFactory(specimenNum, dna) {
  var obj = {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      var randomBaseIndex = Math.floor(Math.random() * 15);
      var randomBase = returnRandBase();
      //console.log(`The randomBaseIndex is: ${randomBaseIndex}. The randomBase is: ${randomBase}`);
      if(!(dna[randomBaseIndex] === randomBase)) {
         dna.splice(randomBaseIndex, 1, randomBase)
      } else {
        var baseOptions = dna.filter(x => x !== randomBase);
        var randomBase = baseOptions[Math.floor(Math.random() * baseOptions.length)];
        //console.log(`Had to change the randomBase: ${randomBase}`);
        dna.splice(randomBaseIndex, 1, randomBase);
      }
      return this.dna = dna;
    },
    compareDNA(obj) {
      var match = [];
      for(var i=0;i< 15; i++) {
        if(this.dna[i] === obj.dna[i]){
          match.push(obj.dna[i]);
        };
      };
      var compare = (match.length / 15) * 100;
      console.log(`The DNA of the two specimens is ${compare}% alike`);
    },
    willLikelySurvive() {
      var goodDNA = 0;
      for(var i=0;i< 15; i++) {
        if(this.dna[i] === 'G' || this.dna[i] === 'C') {
          goodDNA = goodDNA + 1;
        }
      }
      if(goodDNA >= 9) {
        return true;
      } else {
        return false;
      };
    }
  };
  return obj;
};

//Create instances of objects which will survive and store them in an array
function createSampleSet(num) {
  //Default to 30 if no num provided
  if(num === undefined) {
    var num = 30;
  };
  var samples = [];
  var sampleNumber = 1;
  while(samples.length < num) {
    var dna = mockUpStrand();
    var obj = pAequorFactory(sampleNumber, dna);
    if(obj.willLikelySurvive()) {
      samples.push(obj);
      sampleNumber = sampleNumber + 1
    };
  }
  return samples;
}





//Test objects:
//const testObj1 = pAequorFactory(1, mockUpStrand());
//const testObj2 = pAequorFactory(2, mockUpStrand());
const tests = createSampleSet();


//Log Tests:
console.log(tests);
console.log(tests.length);
//console.log(testObj1);
//console.log(testObj2);
//testObj1.compareDNA(testObj2);
//console.log(testObj1.willLikelySurvive());

//console.log(`Test Object 1: ${testObj1}. Test Object 2: ${testObj2}.`);

//testObj.mutate();
//console.log(testObj);
