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
  // Arrays that will be used to store search results below.
  let results = collection;
  let tempResults = []
// If nothing is entered into the search or the object is empty, return collection
  if (searchObject === ""){
    return collection;
  } // *end 'no criteria searched'

  // To begin, results = collection.  As we check each object property, matching results will be .push()
  // into tempResults.  After looping through a property, results is set to the matches which were
  // pushed into tempResults, then tempResults is reverted back to a blank array for the next property search.
  // The next property will then only loop through the matching results of the property before it.
  while (results.length > 0){
    // we want to keep the below code running 'while' there are still items in results
    // if results.length = 0, that means one of the search criteria had zero matches, return an empty array.
    if (searchObject.artist){
      for (let album of results){
        if (album.artist === searchObject.artist){
          tempResults.push(album);
        } // end if artist === artist
      }  // end loop thru results for artist
      results = tempResults;
      tempResults = [];
    } // end if searchObject has artist property

    if (searchObject.title){
      for (let album of results){
        if (album.title === searchObject.title){
          tempResults.push(album);
        } // end if title === title
      }  // end loop thru results for title
      results = tempResults;
      tempResults = [];
    } // end if searchObject has title property

    if (searchObject.yearPublished){
      for (let album of results){
        if (album.yearPublished === searchObject.yearPublished){
          tempResults.push(album);
        } // end if yearPublished === yearPublished
      }  // end loop thru results for yearPublished
      results = tempResults;
      tempResults = [];
    } // end if searchObject has yearPublished property

    if (searchObject.trackName){
      for (let album of results){
        for (let track of album.tracks){
          if (track[0] === searchObject.trackName){
            tempResults.push(album);
          } // end if track === track
        } // need an extra loop here to search each track. end loop through tracks
      }  // end loop thru albums in new array
      results = tempResults;
      tempResults = [];
    } // end if searchObject has track property
    return results // return results array with matching albums
  }
  return results // if a property and zero matches, return the empty array.
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
console.log(`Search Object Properties(artist: BB, year: 2009), return Dear Agony album`, search(matchingObject));

console.log(`Search Object Properties(artist: BB, year: 2012), return no matches`, search(nonMatchingObject));

console.log(`Search Object Properties(artist: Ray Charles, year: 1957), return no matches`, search(rayCharlesObject));

console.log(`Search Object Properties(no properties), return collection`, search(emptyObject));

console.log(`Search No Object entered, return collection`, search());

console.log(`Search Object Properties(artist: Paper Lions), return 2 Paper Lions albums`, search(singleProperty));

console.log(`Search Object Properties(year: 2006), return 2 albums from 2006`, search(propertyYear));

console.log(`Search Object Properties(trackName: My Wave), return Soundgarden album`, search(propertyTrack));

// Should be able to showCollection on search arrays, too.
console.log(`Input search() into showCollection to log Soundgarden album`);
showCollection(search(propertyTrack));
