var fs = require('fs');
fs.readFile('text.txt', function(err, data){
  console.log(data);
});
