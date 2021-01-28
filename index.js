//Import fichier JSON sur javascript
let json = require("./movies.json");


//Modif date + titre
function modifTitre(Film){
    let newdate = new Date(Film['release_date']*1000);
    let year = newdate.getFullYear();
    let title = Film['title'];
    let newTitle = title + "(" + year + ")";
    console.log(newTitle);
    Film["title"] = newTitle;
    console.log(Film);
};

//Modif sur tous les films 
function changeTitle(){
    for (let i =0; i < json.length; i++){
        let Film = json[i];
        modifTitre(Film);
    }
};
changeTitle();

//Creation d'un nouveau fichier
let stringOut = JSON.stringify(json,null,'\t');
let fs = require('fs');
fs.writeFile("movies.out.json",stringOut,function(err) {
    if(err) return console.error(err);
    console.log('done');
 });

 //Temps exe 
 function synchronous() {
    console.time("sync");
    fs.readFileSync("./movies.json")
    console.timeEnd("sync")
}
synchronous();

//Import fichier JSON sur javascript
let json = require("./movies.out.json");

//check tous les titres 
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
fs.writeFile("trie.out.json",stringOut,function(err) {
    if(err) return console.error(err);
    console.log('done');
 });
