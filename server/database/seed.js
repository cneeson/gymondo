const db = require('./');
const data = require('./mock-data');

console.log('Seeding database...');

const toSqlValueString = ({ name, description, category, startDate, imageUrl }) => [name, description,category,startDate, imageUrl];

db.serialize(function() {
  db.run("CREATE TABLE workouts (name TEXT, description TEXT, category TEXT, startDate DATE, imageUrl TEXT)");

  const values = data.map(toSqlValueString).flat();
  const placeholders = `${data.map(() => '(?, ?, ?, ?, ?)').join(',')}`;
  const query = `INSERT INTO workouts (name, description, category, startDate, imageUrl) VALUES ${placeholders} `;

  db.run(query, values);
});
