console.log('***** Music Collection *****')

const collection = [];

const addToCollection = (title, artist, yearPublished) => {
  let album = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}

console.log(addToCollection('fish','nofish','1962'));
console.log(addToCollection('plenty o', 'nofish', '1961'));
console.log(addToCollection('The Moon', 'Blue Phil', '1976'));
console.log(addToCollection("Tailgatin'", 'Tayley Rich', '2017'));
console.log(addToCollection('Boats on Water', 'Tayley Rich', '2015'));
console.log(addToCollection('Jamming on these drums to release the frustration of a hard day at work as a lawyer', 'Kelly', '1993'));



console.log(collection);
