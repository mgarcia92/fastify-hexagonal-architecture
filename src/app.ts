import fastify, { FastifyInstance } from 'fastify'
import { PersonRouter } from './routes/person'
const app: FastifyInstance = fastify({
    logger: {
        prettyPrint: true
    }
})

const port = process.env.PORT || 3004

function buildApp(app: FastifyInstance) {
    app.register(PersonRouter, { prefix: '/v1' })
    start(app)
}


async function start(app: FastifyInstance) {
    try {
        const url = await app.listen(port)
        console.log(`🚀 Server ready at ${url}`)
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}



buildApp(app)

