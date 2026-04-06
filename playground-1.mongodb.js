/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rickmorty');

// Insert a few documents into the characters collection.
db.getCollection('characters').insertMany([
  { 'name': 'Rick Sanchez', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 'status': 'Alive', 'gender': 'Male' },
  { 'name': 'Morty Smith', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 'status': 'Alive', 'gender': 'Male' },
  { 'name': 'Summer Smith', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 'status': 'Alive', 'gender': 'Female' },
  { 'name': 'Beth Smith', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 'status': 'Alive', 'gender': 'Female' },
  { 'name': 'Jerry Smith', 'species': 'Human', 'image': 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', 'status': 'Alive', 'gender': 'Male' },
  { 'name': 'Mr. Meeseeks', 'species': 'Alien', 'image': 'https://rickandmortyapi.com/api/character/avatar/6.jpeg', 'status': 'Alive', 'gender': 'Male' },
  { 'name': 'Birdperson', 'species': 'Alien', 'image': 'https://rickandmortyapi.com/api/character/avatar/7.jpeg', 'status': 'Alive', 'gender': 'Male' },
  { 'name': 'Squanchy', 'species': 'Alien', 'image': 'https://rickandmortyapi.com/api/character/avatar/8.jpeg', 'status': 'Alive', 'gender': 'Male' },
]);

