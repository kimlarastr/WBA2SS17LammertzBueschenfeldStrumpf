var fs = require('fs');
var obj=[];
fs.readFile('staedte.json','utf8', function(err, data){
if (err) throw err;
obj = JSON.parse(data);

for (x in obj.cities){
  console.log("name: " + obj.cities[x].name);
  console.log("country: " + obj.cities[x].country);
  console.log("population: " + obj.cities[x].population);
  console.log("--------------------");

};

});








