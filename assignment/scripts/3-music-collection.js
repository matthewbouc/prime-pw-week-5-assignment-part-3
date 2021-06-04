console.log('***** Music Collection *****')

const collection = [];

let dearAgonyTracks = [['Fade Away', '3:16'], ['I Will Not Bow', '3:36'], ['Crawl', '3:58']]
let phobiaTracks = [['The Diary of Jane', '3:20'], ['Breath', '3:38'], ['You', '3:21']];
let trophiesTracks = [['Hands', '2:27'], ['Lost the War', '2:48'], ['Sweat It Out', '2:32']]
let atLongCreekTracks = []
let stadiumArcadiumTracks = []
let superUnknownTracks = []

function addTracks(arrayName, trackName, length){
  arrayName.push([trackName, length]);
}

addTracks(atLongCreekTracks, 'Ghostwriters', '4:08');
addTracks(atLongCreekTracks, 'My friend', '3:22');
addTracks(atLongCreekTracks, 'Little Liar', '4:00');
console.log(atLongCreekTracks);

addTracks(stadiumArcadiumTracks, 'Dani California', '4:42');
addTracks(stadiumArcadiumTracks, 'Snow (Hey Oh)', '5:35');
addTracks(stadiumArcadiumTracks, 'Charlie', '4:37');
console.log(stadiumArcadiumTracks);

addTracks(superUnknownTracks, 'Let Me Drown', '3:53');
addTracks(superUnknownTracks, 'My Wave', '5:14');
addTracks(superUnknownTracks, 'Fell On Black Days', '4:42');
console.log(superUnknownTracks);

// creates a new object (album) with input parameters as properties.  Push
// object to collection array and returns the album object.
const addToCollection = (title, artist, yearPublished, arrayOfTracks) => {
  let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }
  collection.push(album);
  return album;
} // end addToCollection()

console.log(`Adding albums to 'collection' using addToCollection().`);
console.log(addToCollection('Dear Agony','Breaking Benjamin','2009'));
console.log(addToCollection('Phobia', 'Breaking Benjamin', '2006'));
console.log(addToCollection('Trophies', 'Paper Lions', '2010'));
console.log(addToCollection('At Long Creek', 'Paper Lions', '2012'));
console.log(addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', '2006'));
console.log(addToCollection('Superunknown', 'Soundgarden', '1994'));


console.log(`'collection' array now contains the following albums:`, collection);



const showCollection = collectionArray => {
  console.log(`The number of albums in this collection: ${collectionArray.length}.`);
  for (let album of collectionArray){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`);
  } // returns TITLE by ARTIST, published in YEAR. - for each album in a collection.
} // end showCollection()

console.log(`TEST - run showCollection function.  Should log the 6 albums separately.`);
showCollection(collection);


const findByArtist = artistName => {
  const matchingArtistList = [];
  for (let album of collection){
    if (album.artist === artistName){
      matchingArtistList.push(album);
    } // if any artists in collection match the entered artistName, push it to matchingArtistList
  }
  return matchingArtistList; // return the list (may be empty if no matches found)
} // end findByArtist()

console.log(`TEST - checking multiple artist names.  Should match 2x 'Breaking Benjamin' and 1x 'Soundgarden'. Empty array on 'Taylor Swift'.`);
console.log(findByArtist('Breaking Benjamin'));
console.log(findByArtist('Soundgarden'));
console.log(findByArtist('Taylor Swift'));


function search(requestedObject=""){
// return entire collection array if no critera is entered for the search
  if (requestedObject === ""){
    return collection;
  } // end 'no criteria searched'
// if object is entered, use the findByArtist function to create
// an array that matches the artist input.
  const searchMatchArtist = findByArtist(requestedObject.artist);
// if the artist array contains any matches, search through that array to determine
// if the yearPublished property also matches search criteria.
  if (searchMatchArtist.length > 0){
    const searchMatchYear = []; // blank array that will be filled with matches
    for (let album of searchMatchArtist){ // loop through the albums in the findByArtist() returned array.
      if (album.yearPublished === requestedObject.yearPublished){
        searchMatchYear.push(album); // if the yearPublished criteria also matches, push that album to searchMatchYear array
      }
    }
    return searchMatchYear; // return the array.  If any albums matched both artist and year, returns array w/ albums.
  } else {
    return [];
  }                         // Otherwise, if no albums matched both artist and year, return empty array.
}

//TEST -  create objects with properties that can be searched in the search function

let matchingObject = {
  artist: 'Breaking Benjamin',
  yearPublished: '2009'
}

let nonMatchingObject = {
  artist: 'Breaking Benjamin',
  yearPublished: '2021',
}

let rayCharlesObject = {
  artist: 'Ray Charles',
  yearPublished: '1957',
}

// TEST in search funtion
console.log(`TEST - Search an object with matching properties, should return an array containing album properties`);
console.log(search(matchingObject));
console.log(`TEST - Search an object with one matching, one not matching property, should return an empty array`);
console.log(search(nonMatchingObject));
console.log(`TEST - Ray Charles search object from stretch goal. (no matching properties to be found)`);
console.log(search(rayCharlesObject));
console.log(`TEST - Leave the search function empty.  Should return the whole collection.`);
console.log(search());
