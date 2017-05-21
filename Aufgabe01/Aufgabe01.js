var fs = require('fs');
const chalk = require('chalk');

var obj=[];
fs.readFile('staedte.json','utf8', function(err, data){
if (err) throw err;
obj = JSON.parse(data);

for (x in obj.cities){
  console.log("name: " + chalk.green(obj.cities[x].name));
  console.log("country: " + chalk.yellow(obj.cities[x].country));
  console.log("population: " + chalk.blue(obj.cities[x].population));
  console.log("--------------------"); };

  obj.cities.sort(function(a ,b){
    if(a.population>b.population){
        return -1;
      }
      else if(a.population<b.population){
        return 1;
      }
      else{
        return 0;
      }
    });

  var x = JSON.stringify(obj);

  fs.writeFile(__dirname + "/staedte_sortiert.json", x, function(err)  {
    if (err) throw err;
      });
      console.log('\n\nThe file has been saved!');
      console.log('\n\nNeue Reihenfolge\n\n');
      for (x in obj.cities){
        console.log("name: " + chalk.green(obj.cities[x].name));
        console.log("country: " + chalk.yellow(obj.cities[x].country));
        console.log("population: " + chalk.blue(obj.cities[x].population));
        console.log("--------------------"); };

});
