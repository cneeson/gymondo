const db = require('./');

console.log('Seeding database...')

db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");

  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize(() => console.log('Database seeded.'));
});
