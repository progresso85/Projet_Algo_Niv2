//Import fichier JSON sur javascript
let json = require("./movies.json");

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
            break;
        case 'sort_date':
            console.log("tri date");
            break;
        case 'sort_titre':
            console.log("trie alpha")    
        default: 
        console.log("pas compris")   
            
    
    }

}

