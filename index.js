//Import fichier JSON sur javascript
let json = require("./movies.json");
let fs = require('fs');

let myArgs = process.argv.slice(2);
console.log('myArgs:',myArgs);

if (myArgs[0] == '-action'){

    switch (myArgs[1]){
        case 'transform':
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
            fs.writeFile("movies.out.json",stringOut,function(err) {
                if(err) return console.error(err);
                console.log('done');
            });

            //Temps execution 
            function synchronous() {
                console.time("sync");
                fs.readFileSync("./movies.json")
                console.timeEnd("sync")
            }
            synchronous();
            break;

        case 'sort_date':
            //Tri de date dans le titre
            function modifTitre2(Film){
                let newdate = new Date(Film['release_date']*1000);
                let year = newdate.getFullYear();
                let title = Film['title'];
                let newTitle = "(" + year + ")" +title;
                console.log(newTitle);
                Film["title"] = newTitle;
                console.log(Film);
            };

            //Modif sur tous les films 
            function changeTitle2(){
                for (let i =0; i < json.length; i++){
                    let Film = json[i];
                    modifTitre2(Film);
                }
            };
            changeTitle2();

            //Tri croissant des dates 
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
            let stringOut2 = JSON.stringify(json,null,'\t');
            fs.writeFile("triCroiss.out.json",stringOut2,function(err) {
                if(err) return console.error(err);
                console.log('done');
            });
            break;

        case 'sort_titre':
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
            let stringOut3 = JSON.stringify(json,null,'\t');
            fs.writeFile("triAlpha.out.json",stringOut3,function(err) {
                if(err) return console.error(err);
                console.log('done');
            });
            break;

        case 'search_date':
            function searchDate(year, sorted){
                for (let i =0; i < json.length; i++){
                    let date = new Date (json[i].release_date*1000);
                    let getyear = date.getFullYear();
                    if(getyear == year){
                        console.log(json[i].title);
                    }
                }
            };
            searchDate(2022, false);
            break;
        default: 
        console.log("pas compris")


    }

}


