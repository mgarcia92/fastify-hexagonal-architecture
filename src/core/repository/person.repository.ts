import { Person } from "../entities/person.entity";

export interface PersonRepository{
    findOne(id: string): Promise<Person | null>,
    findAll(): Promise<Person[]>,
    create(entity: Person): Promise<Person | null>,
    update(id: string, entity: Person): Promise<Person | null>,
    remove(id: string): Promise<Person | null>
}