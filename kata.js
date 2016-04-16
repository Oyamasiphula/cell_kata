var allUserProperties = [];

var person = function(name, dataSum) {
    this.username = name;
    this.data = dataSum;
};

var earner1 = new person("Walter","“It was 67MB. Is that everything? I’m busy, you know.”")
var earner2 = new person("Jesse","“Damn, it was like 300MB. Dat Snaptalk is a data hog, yo.”")
var earner3 = new person("Saul","“I think 283MB. That’s what the guy at the store said. I think it means MegaBites.”")
var earner4 = new person("Gus","“Around 150MB. I have the receipts if you need more precise figures.”")

function get1StUserData(){
  var dataSumPerPerson = [];
  var firstPersonsDataSummary = [];

 for(var key in earner1){
    firstPersonsDataSummary.push(key + ", " + earner1[key]);
};
    firstPersonsDataSummary.forEach(function(vals){
    vals.split(",");
    var dataConsumed = vals.replace("“It was ","")
                   .replace("MB. Is that everything? I’m busy, you know.”","")
                   .replace(",",':');
    dataSumPerPerson.push(dataConsumed.split(":"))
  });
  allUserProperties.push(dataSumPerPerson);
  return dataSumPerPerson
};
  get1StUserData();
  // in all the reason using the forin its because I wanted to get proper values from my object and to regenerate
  // a new array values by converting my object

function get2ndUserData(){
    var dataSumPerPerson = []
    var secondPersonsDataSummary = [];
     for(var key in earner2){
      //  console.log(key);
      //  console.log(earner2);
    secondPersonsDataSummary.push(key + ", " + earner2[key]);
    };
    secondPersonsDataSummary.forEach(function(vals){
          vals.split(",");
          console.log(vals);
    var dataConsumed = vals.replace("“Damn, it was like ","")
                           .replace("MB. Dat Snaptalk is a data hog, yo.”","")
                           .replace(",",":");
    dataSumPerPerson.push(dataConsumed.split(":"));
  });
  console.log(dataSumPerPerson);
  allUserProperties.push(dataSumPerPerson)
  return dataSumPerPerson
};
  get2ndUserData()

function get3rdUserData(){

    var dataSumPerPerson = []
    var thirdPersonsDataSummary = [];

    for(var key in earner3){
      thirdPersonsDataSummary.push(key + ", " + earner3[key]);
    };
    thirdPersonsDataSummary.forEach(function(vals){
      vals.split(",");
      var dataConsumed = vals.replace("“I think ","")
                              .replace("MB. That’s what the guy at the store said. I think it means MegaBites.”","")
                              .replace(",",":");
      dataSumPerPerson.push(dataConsumed.split(":"))
    });
    allUserProperties.push(dataSumPerPerson)
    return dataSumPerPerson
};
  get3rdUserData();

function get4thUserData(){
    var dataSumPerPerson = []
    var fourthPersonsDataSummary = [];

    for(var key in earner3){
      fourthPersonsDataSummary.push(key + ", " + earner4[key]);
    };
    fourthPersonsDataSummary.forEach(function(vals){
      vals.split(",");
      var dataConsumed = vals.replace("“Around ","")
                              .replace("MB. I have the receipts if you need more precise figures.”","")
                              .replace(",",":");
      dataSumPerPerson.push(dataConsumed.split(":"))
    });
    allUserProperties.push(dataSumPerPerson)
    return dataSumPerPerson
};
  get4thUserData();

// var toObject = function(allUserProperties){
// }
//
// allUserProperties.forEach(function(userProp){
//   userProp.forEach(function(userDataVals){
//     console.log(userDataVals);
//     userDataVals.split(" ");
//   });
// });

// function getHighestUserDataConsumed(){
// // console.log("")
// return ""
// }
// console.log(allUserProperties);
allUserProperties.forEach(function(newUserPropertiesList){
  // var dataCollection = allUserProperties.slice(); // make a copy
  // var keys = dataCollection.shift();
  newUserPropertiesList.forEach(function(userPropertiesList){

  var username = userPropertiesList[[0]].replace("], [",",");
  var property = userPropertiesList[[1]].replace("",":");

  console.log(username);
  console.log(username);

  })
})




module.exports.person = person;
module.exports.get1StUserData = get1StUserData;
module.exports.get2ndUserData = get2ndUserData;
module.exports.get3rdUserData = get3rdUserData;
module.exports.get4thUserData = get4thUserData;
//
// module.exports.getHighestUserDataConsumed = getHighestUserDataConsumed;
