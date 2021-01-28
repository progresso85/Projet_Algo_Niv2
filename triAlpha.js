//Import fichier JSON sur javascript
let json = require("./movies.json");

//Tri des titres  
json.sort(
    function(a, b){
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
console.log(json);

//Creation d'un nouveau fichier
let stringOut = JSON.stringify(json,null,'\t');
let fs = require('fs');
fs.writeFile("triAlpha.out.json",stringOut,function(err) {
    if(err) return console.error(err);
    console.log('done');
});

