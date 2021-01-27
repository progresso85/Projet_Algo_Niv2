//Import fichier JSON sur javascript
let json = require("./movies.json");
let listFilm = json[0]

function search(){
    let date = new Date(listFilm['release_date']*1000);
    let title = listFilm['title'];
}
console.log(title + date);

