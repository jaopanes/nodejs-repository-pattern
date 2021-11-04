import { BaseRepository } from "./base/BaseRepository";
import { Spartan } from "../entities/Spartan";

export class SpartanRepository extends BaseRepository<Spartan> {
  countOfSpartans(): Promise<Number> {
    return this._collection.count({});
  }
}