import { Person } from '../core/entities/person.entity';
import data from '../mockData/data.json'
import { v4 as uuid } from 'uuid';
export class PersonService {
    public async findOne(id: string): Promise<Person | null> {
        const [dataPerson] = data.filter(x => x.id == id)
        if (!dataPerson) return null
        const findPerson: Person = {
            ...dataPerson,
            createdAt: new Date(dataPerson.createdAt),
            updatedAt: new Date(dataPerson.updatedAt)
        }
        return findPerson
    }

    public async findAll(): Promise<Person[]> {
        const dataPerson: Person[] = data.map(person => ({
            ...person,
            createdAt: new Date(person.createdAt),
            updatedAt: new Date(person.updatedAt)
        }))
        return dataPerson
    }


    public async create(entity: Person): Promise<Person | null> {
        const newEntity = {
            ...entity,
            id: uuid(),
            createdAt: entity.createdAt.toString(),
            updatedAt: entity.updatedAt.toString()
        }
        data.push(newEntity)
        return entity
    }

    public async update(id: string, entity: Person): Promise<Person | null> {
        const findPerson = data.findIndex(x => x.id === id)
        if (findPerson != -1) {
            data[findPerson] = {
                ...data[findPerson],
                ...entity,
                createdAt: entity.createdAt.toString(),
                updatedAt: entity.updatedAt.toString()
            }
            return entity
        }
        return null
    }

    public async remove(id: string): Promise<Person | null> {
        const idx = data.findIndex(x => x.id === id)
        if (idx != -1) {
            const deletedPerson = data[idx]
            data.splice(idx, 1)
            return {
                ...deletedPerson,
                createdAt: new Date(deletedPerson.createdAt),
                updatedAt: new Date(deletedPerson.updatedAt)
            }
        }
        return null
    }
}