import { Person } from "../entities/person.entity";
import { PersonRepository } from "../repository/person.repository";
import { PersonService } from "../../services/person.service";

export class PersonDataSource implements PersonRepository{
    private service: PersonService;
    constructor(){
        this.service = new PersonService()
    }

    public async findOne(id: string): Promise<Person | null> {
        return await this.service.findOne(id)
    }
    public async findAll(): Promise<Person[]> {
        return await this.service.findAll()
    }
    public async create(entity: Person): Promise<Person | null> {
        return await this.service.create(entity)
    }
    public async update(id: string, entity: Person): Promise<Person | null> {
        return await this.service.update(id, entity)
    }
    public async remove(id: string): Promise<Person | null> {
        return await this.service.remove(id)
    }
}