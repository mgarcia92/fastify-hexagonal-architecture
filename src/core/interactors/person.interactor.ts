import { Person } from "../entities/person.entity";
import { GenericRepository } from "../repository/generic.repository";
import { PersonRepository } from "../repository/person.repository";

export class PersonInteractor {

    constructor(private personRepository:GenericRepository<Person> ){
    }

    public async findOne(id: string): Promise<Person | null>{
        return await this.personRepository.findOne(id)
    }

    public async findAll(): Promise<Person[]>{
        return await this.personRepository.findAll()
    }

    
    public async create(entity: Person): Promise<Person | null>{
        return await this.personRepository.create(entity)
    }

    public async update(id: string,entity: Person): Promise<Person | null>{
        return await this.personRepository.update(id,entity)
    }

    public async remove(id:string): Promise<Person | null>{
        return await this.personRepository.remove(id)
    }
}