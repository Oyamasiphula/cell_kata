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
    var userData = vals.replace("“It was ","")
                   .replace("MB. Is that everything? I’m busy, you know.”","")
                   .replace(",",':');
    dataSumPerPerson.push(userData)
  });
  return dataSumPerPerson
};

  // in all the reason using the forin its because I wanted to get proper values from my object and regenerate
  // a new array values by converting my object

function get2ndUserData(){
    var dataSumPerPerson = []
    var secondPersonsDataSummary = [];
     for(var key in earner2){
    secondPersonsDataSummary.push(key + ", " + earner2[key]);
    };
    secondPersonsDataSummary.forEach(function(vals){
          vals.split(",");
    var dataConsumed = vals.replace("“Damn, it was like ","")
                           .replace("MB. Dat Snaptalk is a data hog, yo.”","")
                           .replace(",",":");
    dataSumPerPerson.push(dataConsumed);
  });
  return dataSumPerPerson
};

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
      dataSumPerPerson.push(dataConsumed)
    });
    return dataSumPerPerson
};

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
      dataSumPerPerson.push(dataConsumed)
    });
    return dataSumPerPerson
};

function getHighestUserDataConsumed(){
return ""
}


module.exports.person = person;
module.exports.get1StUserData = get1StUserData;
module.exports.get2ndUserData = get2ndUserData;
module.exports.get3rdUserData = get3rdUserData;
module.exports.get4thUserData = get4thUserData;
module.exports.getHighestUserDataConsumed = getHighestUserDataConsumed;
