console.log('***** Music Collection *****')

const collection = [];

// creates a new object (album) with input parameters as properties.  Push
// object to collection array and returns the album object.
const addToCollection = (title, artist, yearPublished) => {
  let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }
  collection.push(album);
  return album;
} // end addToCollection()

console.log(`Adding albums to 'collection' using addToCollection().`);
console.log(addToCollection('fish','nofish','1962'));
console.log(addToCollection("plenty o'", 'nofish', '1961'));
console.log(addToCollection('The Moon', 'Blue Phil', '1976'));
console.log(addToCollection("Tailgatin'", 'Tayley Rich', '2017'));
console.log(addToCollection('Boats on Water', 'Tayley Rich', '2015'));
console.log(addToCollection('Jamming on these drums to release the frustration of a hard day at work as a lawyer', 'Kelly', '1993'));


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

console.log(`TEST - checking multiple artist names.  Should match 2x 'nofish' and 1x 'Blue Phil'. Empty array on 'Phenom'.`);
console.log(findByArtist('nofish'));
console.log(findByArtist('Blue Phil'));
console.log(findByArtist('Phenom'));


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
  artist: 'nofish',
  yearPublished: '1962'
}

let nonMatchingObject = {
  artist: 'nofish',
  yearPublished: '1963',
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
