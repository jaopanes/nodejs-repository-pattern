import { MongoClient } from "mongodb";

import { SpartanRepository } from "./repositories/SpartanRepository";
import { Spartan } from "./entities/Spartan";

(async () => {
  const connection = await MongoClient.connect('mongodb://localhost');
  const db = connection.db('warriors');

  const spartan = new Spartan('Leonidas', 300);

  const repository = new SpartanRepository(db, 'spartans');

  const result = await repository.create(spartan);
  console.log(`spartan inserted with ${result ? 'success' : 'fail'}`);

  const count = await repository.countOfSpartans();
  console.log(`the count of spartans is ${count}`);
})();