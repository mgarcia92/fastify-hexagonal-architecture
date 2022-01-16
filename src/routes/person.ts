import { FastifyInstance } from "fastify";
import { Person } from "../core/entities/person.entity";
import { personInteractor} from '../core/interactors'

export const PersonRouter = (fastify: FastifyInstance, opts: any, done: any ) => {
   
    fastify.get('/person', async (req, reply ) => {
        const data = await personInteractor.findAll()
        if(data.length == 0) return reply.code(404).send([])
        return reply.code(200).send(data)  
    })

    fastify.get('/person/:id', async (req, reply ) => {
        const { id } = req.params as { id: string }
        const data = await personInteractor.findOne(id)
        if(!data) return reply.code(404).send({})
        return reply.code(200).send(data)  
    })

    fastify.post('/person', async (req, reply ) => {
        const person = req.body as Person
        const data = await personInteractor.create(person)
        return reply.code(201).send(data)  
    })

    fastify.patch('/person/:id', async (req, reply ) => {
        const { id } = req.params as { id: string }
        const person = req.body as Person
        const data = await personInteractor.update(id, person)
        if(!data) return reply.code(404).send({})
        return reply.code(200).send(data)  
    })

    fastify.delete('/person/:id', async (req, reply ) => {
        const { id } = req.params as { id: string }
        const data = await personInteractor.remove(id)
        if(!data) return reply.code(404).send({})
        return reply.code(200).send(data)  
    })

    done()
}