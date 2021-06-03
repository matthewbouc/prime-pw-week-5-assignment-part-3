console.log('***** Music Collection *****')

const collection = [];

const addToCollection = (title, artist, yearPublished) => {
  let record = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }
  collection.push(record);
  return record;
}

console.log(addToCollection ('fish','nofish','1962'));

console.log(collection);
