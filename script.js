let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}



//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
    console.log("Printing all movies...");
    for(let x = 0; x < allMovies.length; x++) {
        document.getElementById("p1").innerHTML += Math.round((Math.random() * 13) + 8) + ":" + (15 * Math.trunc(Math.random() * 3 + 1)) + ": " + allMovies[x].title + ". This movie has a rating of " + allMovies[x].rating + " out of 5." + "<br>";
        console.log(allMovies[x].title + ", rating of " + allMovies[x].rating + ", " + " haveWatched: " + allMovies[x].haveWatched);
    }
    document.getElementById("p2").innerHTML += "We are currently showing " + allMovies.length + " different types of movies.";
    console.log("You have " + allMovies.length + " movies in total.");
    document.getElementById("p1").innerHTML += "<br>";
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let a = 0;
    document.getElementById("p3").innerHTML = "";
    console.log("printing movie that has higher rating than " + rating)
    for(let i = 0; i < allMovies.length; i++) {
        if(allMovies[i].rating > rating) {
            document.getElementById("p3").innerHTML += allMovies[i].title + " has a rating of " + allMovies[i].rating + "<br>"; 
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            a++;
        }
    }
    console.log("In total there are " + a + " matches.");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    if(title.haveWatched == true) {
        title.haveWatched = false;
    } else { 
        title.haveWatched = true;
    }
    console.log("changing the status of the movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);