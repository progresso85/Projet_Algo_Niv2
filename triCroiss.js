//Import fichier JSON sur javascript
let json = require("./movies.json");

//Tri de date dans le titre
function modifTitre(Film){
    let newdate = new Date(Film['release_date']*1000);
    let year = newdate.getFullYear();
    let title = Film['title'];
    let newTitle = "(" + year + ")" +title;
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

json.sort(
    function(a, b){
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});
console.log(json);

let stringOut = JSON.stringify(json,null,'\t');
let fs = require('fs');
fs.writeFile("dateCroiss.out.json",stringOut,function(err) {
    if(err) return console.error(err);
    console.log('done');
});
