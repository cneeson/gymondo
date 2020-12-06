const db = require('./');
const data = require('./mock-data');

console.log('[Database Seeder] Seeding database...');

const splitIntoChunks = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const toSqlValueString = ({ name, description, category, startDate, imageUrl }) => [name, description,category,startDate, imageUrl];

db.serialize(function() {
  db.run("CREATE TABLE workouts (name TEXT, description TEXT, category TEXT, startDate DATE, imageUrl TEXT)");

  const chunks = splitIntoChunks(data, 100);

  chunks.forEach((chunk, index) => {
    console.log(`[Datebase Seeder] Inserting ${chunk.length} records from chunk ${index}`)
    const values = chunk.map(toSqlValueString).flat();
    const placeholders = `${chunk.map(() => '(?, ?, ?, ?, ?)').join(',')}`;
    const query = `INSERT INTO workouts (name, description, category, startDate, imageUrl) VALUES ${placeholders} `;
  
    db.run(query, values);
  });
});
