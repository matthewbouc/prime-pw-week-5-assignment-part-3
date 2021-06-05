// ***********
// Tracks for each album have been given their own file to declutter this page
// **********
console.log('***** Music Collection *****')

const collection = [];

// creates a new object (album) with input parameters as properties.  Push
// object to collection array and returns the album object.
function addToCollection(title, artist, yearPublished, arrayOfTracks){
  let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished,
  tracks: arrayOfTracks,
  }
  collection.push(album);
  return album;
} // end addToCollection()

// Add albums to the collection array
console.log(`Adding albums to 'collection' using addToCollection().`);
console.log(addToCollection('Dear Agony','Breaking Benjamin','2009', dearAgonyTracks));
console.log(addToCollection('Phobia', 'Breaking Benjamin', '2006', phobiaTracks));
console.log(addToCollection('Trophies', 'Paper Lions', '2010', trophiesTracks));
console.log(addToCollection('At Long Creek', 'Paper Lions', '2012', atLongCreekTracks));
console.log(addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', '2006', stadiumArcadiumTracks));
console.log(addToCollection('Superunknown', 'Soundgarden', '1994', superUnknownTracks));

// Verify that collection now contains the expected albums.
console.log(`'collection' array now contains the following albums:`, collection);



function showCollection(collectionArray){
  console.log(`The number of albums in this collection: ${collectionArray.length}.`);
  for (let album of collectionArray){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`)
    for (let i = 0; i < album.tracks.length; i++){
      console.log(`${i+1}. ${album.tracks[i][0]}: ${album.tracks[i][1]}`);
    } // Loop through the tracks property of each album and log it out.
  } // returns TITLE by ARTIST, published in YEAR. - for each album in a collection.
} // end showCollection()

console.log(`TEST - run showCollection function.  Should log the 6 albums separately.`);
showCollection(collection);

// Loop through albums to find match specific artist
function findByArtist(artistName){
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


// create search function - define a default state of empty.  If empty, then return collection.
function search(searchObject=""){
  // defining arrays that will be used to store search results below.
  let newArray = collection;
  let tempArray = []

// Here is where we return entire collection array if no critera is entered for the search
  if (searchObject === ""){
    return collection;
  } // *end 'no criteria searched'

// I started something here trying to re-use above findByArtist function, but I was having problems
// getting this to translate into all the other properties without rewriting the function for each.
// I couldn't figure that out, so I eventually created the active code below, which ended up just being a
// re-write of the findByArtist function.  It might look cleaner if the code was turned into functions instead
// of how I currently have it written.  Something to think about for the future.

// *if object is entered, use the findByArtist function to create
// *an array that matches the artist input.
  //const searchMatchArtist = findByArtist(requestedObject.artist);
// *if the artist array contains any matches, search through that array to determine
// *if the yearPublished property also matches search criteria.
  //if (searchMatchArtist.length > 0){
    //const searchMatchYear = []; // blank array that will be filled with matches
    //for (let album of searchMatchArtist){ // loop through the albums in the findByArtist() returned array.
      //if (album.yearPublished === requestedObject.yearPublished){
        //searchMatchYear.push(album); // if the yearPublished criteria also matches, push that album to searchMatchYear array
      //}
    //}
    //return searchMatchYear; // return the array.  If any albums matched both artist and year, returns array w/ albums.
  //} else {
    //return [];
  //}                         // Otherwise, if no albums matched both artist and year, return empty array.
//}


// we want to keep the below code running 'while' there are still items in newArray
// if newArray.length = 0, that means one of the search criteria wasn't met, therefore we can quit
// the search and return an empty array.
  while (newArray.length > 0){

    if (searchObject.artist){
      for (let album of newArray){
        if (album.artist === searchObject.artist){
          tempArray.push(album);
        } // end if artist === artist
      }  // end loop thru newArray for artist
      newArray = tempArray;
      tempArray = [];
    } // end if searchObject has artist property

    if (searchObject.title){
      for (let album of newArray){
        if (album.title === searchObject.title){
          tempArray.push(album);
        } // end if title === title
      }  // end loop thru newArray for title
      newArray = tempArray;
      tempArray = [];
    } // end if searchObject has title property

    if (searchObject.yearPublished){
      for (let album of newArray){
        if (album.yearPublished === searchObject.yearPublished){
          tempArray.push(album);
        } // end if yearPublished === yearPublished
      }  // end loop thru newArray for yearPublished
      newArray = tempArray;
      tempArray = [];
    } // end if searchObject has yearPublished property

    if (searchObject.trackName){
      for (let album of newArray){
        for (let track of album.tracks){
          if (track[0] === searchObject.trackName){
            tempArray.push(album);
          } // end if track === track
        } // need an extra loop here to search each track. end loop through tracks
      }  // end loop thru albums in new array
      newArray = tempArray;
      tempArray = [];
    } // end if searchObject has track property
    return newArray
  } // End while loop for search
  return newArray // should be blank if nothing matches.
}  // End search()


                     //// TESTING AREA BELOW ////

//TEST -  create objects with properties that can be searched in the search function

const matchingObject = {
  artist: 'Breaking Benjamin',
  yearPublished: '2009'
}

const nonMatchingObject = {
  artist: 'Breaking Benjamin',
  yearPublished: '2021',
}

const rayCharlesObject = {
  artist: 'Ray Charles',
  yearPublished: '1957',
}

const singleProperty = {
  artist: 'Paper Lions',
}

const propertyYear = {
  yearPublished: '2006',
}

const propertyTrack = {
  trackName: 'My Wave',
}

const emptyObject = {
}

// TEST in search funtion
console.log(`*****TESTING AREA BELOW*****`);
console.log(`TEST - Search an object with multiple matching properties, returns Breaking Benjamin album`);
console.log(search(matchingObject));

console.log(`TEST - Search an object with one matching & one not matching property, should return an empty array`);
console.log(search(nonMatchingObject));

console.log(`TEST - Ray Charles search object from stretch goal. (no matching properties to be found)`);
console.log(search(rayCharlesObject));

console.log(`TEST - Testing an object without any properties.`);
console.log(search(emptyObject));

console.log(`TEST - Leave the search function empty.  Should return the whole collection.`);
console.log(search());

console.log(`TEST - Only entered an artist.  Should return two Albums`);
console.log(search(singleProperty));

console.log(`TEST - Only entered a year.  Should return albums from BB and RHCP.`);
console.log(search(propertyYear));

console.log(`TEST - Only entered a trackName ('My Wave') property.  Should return Soundgarden album`);
console.log(search(propertyTrack));

// Should be able to showCollection on search arrays, too.
console.log(`TEST - Run the showCollection function on the search function (using trackName search above)
  Should log the album in the same manner as showCollection tests above.`);
showCollection(search(propertyTrack));
